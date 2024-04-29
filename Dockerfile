FROM node:20-alpine3.18 as base

FROM base as deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci

# Production only deps stage
FROM base as production-deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci --omit=dev
RUN wget https://gobinaries.com/tj/node-prune --output-document - | /bin/sh && node-prune

# Build stage
FROM base as build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .
RUN npm run build

FROM php:8.1-fpm-alpine as install-composer
RUN apk --no-cache add curl git wget bash dpkg
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions zip imagick pdo_mysql
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer
RUN mkdir -p /var/www/html
WORKDIR /var/www/html
ADD . .
RUN composer install --optimize-autoloader --no-dev

FROM --platform=linux/amd64 php:8.1-fpm-alpine
# Add PHP extensions
COPY --from=install-composer /usr/local/bin/install-php-extensions /usr/local/bin/
RUN install-php-extensions zip imagick pdo_mysql
RUN mkdir -p /var/www/html
WORKDIR /var/www/html
ADD . .
COPY --from=production-deps /app/node_modules ./node_modules
COPY --from=build /app/public/build ./public/build
COPY --from=install-composer /var/www/html/vendor ./vendor
EXPOSE 8082
CMD ["/usr/local/bin/php", "artisan", "serve", "--host=0.0.0.0", "--port=8082"]

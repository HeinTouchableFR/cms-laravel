isDocker := $(shell docker info > /dev/null 2>&1 && echo 1)
isProd := $(shell grep "APP_ENV=prod" .env > /dev/null && echo 1)
domain := "aymericlhomme.fr"
server := "rkin7577@nirrti.o2switch.net"
user := $(shell id -u)
group := $(shell id -g)
theme := "aymericlhomme"

sy := php bin/console
node :=
php :=
ifeq ($(isDocker), 1)
	ifneq ($(isProd), 1)
		dc := USER_ID=$(user) GROUP_ID=$(group) THEME=$(theme) docker-compose
		dcimport := USER_ID=$(user) GROUP_ID=$(group) docker-compose -f docker-compose.import.yml
		de := docker-compose exec
		dr := $(dc) run --rm
		drtest := $(dc) -f docker-compose.test.yml run --rm
		sy := $(de) php bin/console
		node := $(dr) node
		php := $(dr) --no-deps php
	endif
endif

.DEFAULT_GOAL := help
.PHONY: help
help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: deploy
deploy: ## Déploie les fichiers sur le serveur
	ssh o2switch 'cd ~/aymericlhomme.fr && git clone https://github.com/HeinTouchableFR/cms-laravel.git . && make install'

.PHONY: install
install: vendor/autoload.php .env public/storage public/build/manifest.json
	php artisan cache:clear
	php artisan migrate

# -----------------------------------
# Dépendances
# -----------------------------------
.env:
	cp .env.example .env
	php artisan key:generate

public/storage:
	php artisan storage:link

vendor/autoload.php: composer.lock
	composer install --no-dev --optimize-autoloader
	touch vendor/autoload.php

public/build/manifest.json: package.json
	npm i
	npm run build


.PHONY: build-docker
build-docker:
	$(dc) create
	$(dc) pull --ignore-pull-failures
	$(dc) build php
	$(dc) build node
	$(dc) build db
	$(dc) start db
	sleep 5
	make dumpimport
	make dev
	sleep 30
	make post-build

.PHONY: dev
dev: vendor/autoload.php node_modules/time ## Lance le serveur de développement
	$(dc) up
	$(node) npm run dev

.PHONY: seed
seed: vendor/autoload.php ## Génère des données dans la base de données (docker-compose up doit être lancé)
	$(sy) doctrine:migrations:migrate -q
	$(sy) app:seed -q

.PHONY: rollback
rollback:
	$(sy) doctrine:migration:migrate prev

.PHONY: dump
dump: var/dump ## Génère un dump SQL
	$(de) db sh -c 'mysqldump --user=user --password=user --databases cms > /var/www/var/dump/dump.sql'

.PHONY: dumpimport
dumpimport: ## Import un dump SQL
	$(de) db sh -c 'mysql --user=user --password=user cms < /var/www/var/dump/dump.sql'

.PHONY: clean
clean:
	$(php) php bin/console c:c

.PHONY: doc
doc: ## Génère le sommaire de la documentation
	npx doctoc ./README.md


post-build:
	$(php) composer install
	touch vendor/autoload.php
	$(node) yarn
	touch node_modules/time
	$(node) yarn
	$(node) npm run build --theme=$(theme)


.PHONY: helpers
helpers: ## Se connecte en ssh au serveur
	$(php) php artisan ide-helper:generate
	$(php) php artisan ide-helper:models -F helpers/ModelHelper.php -M
	$(php) php artisan ide-helper:meta

.PHONY: analyse
analyse: ## Se connecte en ssh au serveur
	$(php) ./vendor/bin/phpstan analyse

.PHONY: pint
pint: ## Se connecte en ssh au serveur
	$(php) ./vendor/bin/pint

.PHONY: request
request: ## Permet d'ajouter un package node
	$(php) php artisan make:request $(RUN_ARGS)

.PHONY: migration
migration: ## Permet d'ajouter un package node
	$(php) php artisan make:migration $(RUN_ARGS)

.PHONY: migrate
migrate: ## Permet d'ajouter un package node
	$(php) php artisan migrate $(RUN_ARGS)

.PHONY: controller
controller: ## Permet d'ajouter un package node
	$(php) php artisan make:controller $(RUN_ARGS)

.PHONY: model
model: ## Permet d'ajouter un package node
	$(php) php artisan make:model $(RUN_ARGS)

.PHONY: component
component: ## Permet d'ajouter un package node
	$(php) php artisan make:component $(RUN_ARGS)

.PHONY: add
add: ## Permet d'ajouter un package node
	$(node) yarn add $(RUN_ARGS)

.PHONY: require
require: ## Permet d'ajouter un package php
	$(php) composer require $(RUN_ARGS)

.PHONY: remove
remove: ## Permet de supprimer un package node
	$(node) yarn remove $(RUN_ARGS)

.PHONY: delete
delete: ## Permet de supprimer un package node
	$(php) composer remove $(RUN_ARGS)

# -----------------------------------
# Fonctions
# -----------------------------------

# If the first argument is "add"...
ifeq (add,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # ...and turn them into do-nothing targets
  $(eval $(RUN_ARGS):;@:)
endif

# If the first argument is "require"...
ifeq (require,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # ...and turn them into do-nothing targets
  $(eval $(RUN_ARGS):;@:)
endif

# If the first argument is "remove"...
ifeq (remove,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # ...and turn them into do-nothing targets
  $(eval $(RUN_ARGS):;@:)
endif

# If the first argument is "delete"...
ifeq (delete,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # ...and turn them into do-nothing targets
  $(eval $(RUN_ARGS):;@:)
endif

# If the first argument is "component"...
ifeq (component,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
   RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
    # ...and turn them into do-nothing targets
    $(eval $(RUN_ARGS):;@:)
endif

# If the first argument is "controller"...
ifeq (controller,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
   RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
    # ...and turn them into do-nothing targets
    $(eval $(RUN_ARGS):;@:)
endif

# If the first argument is "migrate"...
ifeq (migrate,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
   RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
    # ...and turn them into do-nothing targets
    $(eval $(RUN_ARGS):;@:)
endif

# If the first argument is "model"...
ifeq (model,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
   RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
    # ...and turn them into do-nothing targets
    $(eval $(RUN_ARGS):;@:)
endif

# If the first argument is "migration"...
ifeq (migration,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
   RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
    # ...and turn them into do-nothing targets
    $(eval $(RUN_ARGS):;@:)
endif

# If the first argument is "request"...
ifeq (request,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
   RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
    # ...and turn them into do-nothing targets
    $(eval $(RUN_ARGS):;@:)
endif

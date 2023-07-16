-- MariaDB dump 10.19  Distrib 10.9.4-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: cms
-- ------------------------------------------------------
-- Server version	10.9.4-MariaDB-1:10.9.4+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `cms`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `cms` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `cms`;

--
-- Table structure for table `attachments`
--

CREATE TABLE `attachments` (
                               `id` bigint(20) UNSIGNED NOT NULL,
                               `filename` varchar(255) NOT NULL,
                               `filesize` int(11) NOT NULL,
                               `created_at` timestamp NULL DEFAULT NULL,
                               `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
                              `id` bigint(20) UNSIGNED NOT NULL,
                              `name` varchar(255) NOT NULL,
                              `slug` varchar(255) NOT NULL,
                              `created_at` timestamp NULL DEFAULT NULL,
                              `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
                            `id` bigint(20) UNSIGNED NOT NULL,
                            `email` varchar(255) DEFAULT NULL,
                            `username` varchar(255) DEFAULT NULL,
                            `content` text DEFAULT NULL,
                            `content_id` bigint(20) UNSIGNED NOT NULL,
                            `user_id` bigint(20) UNSIGNED NOT NULL,
                            `comment_id` bigint(20) UNSIGNED DEFAULT NULL,
                            `spam` tinyint(1) NOT NULL DEFAULT 0,
                            `created_at` timestamp NULL DEFAULT NULL,
                            `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `contact_requests`
--

CREATE TABLE `contact_requests` (
                                    `id` bigint(20) UNSIGNED NOT NULL,
                                    `ip` varchar(255) NOT NULL,
                                    `created_at` timestamp NULL DEFAULT NULL,
                                    `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `contents`
--

CREATE TABLE `contents` (
                            `id` bigint(20) UNSIGNED NOT NULL,
                            `title` varchar(255) NOT NULL,
                            `slug` varchar(255) NOT NULL,
                            `description` varchar(255) DEFAULT NULL,
                            `content` text DEFAULT NULL,
                            `online` tinyint(1) NOT NULL,
                            `type` varchar(255) NOT NULL,
                            `user_id` bigint(20) UNSIGNED NOT NULL,
                            `created_at` timestamp NULL DEFAULT NULL,
                            `updated_at` timestamp NULL DEFAULT NULL,
                            `category_id` bigint(20) UNSIGNED DEFAULT NULL,
                            `attachment_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `content_tag`
--

CREATE TABLE `content_tag` (
                               `content_id` bigint(20) UNSIGNED NOT NULL,
                               `tag_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `extensions`
--

CREATE TABLE `extensions` (
                              `id` bigint(20) UNSIGNED NOT NULL,
                              `name` varchar(255) NOT NULL,
                              `active` tinyint(1) NOT NULL DEFAULT 1,
                              `created_at` timestamp NULL DEFAULT NULL,
                              `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `extensions`
--

INSERT INTO `extensions` (`id`, `name`, `active`, `created_at`, `updated_at`) VALUES
    (2, 'Portfolio', 1, '2023-05-24 17:59:36', '2023-05-24 17:59:36');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
                               `id` bigint(20) UNSIGNED NOT NULL,
                               `uuid` varchar(255) NOT NULL,
                               `connection` text NOT NULL,
                               `queue` text NOT NULL,
                               `payload` longtext NOT NULL,
                               `exception` longtext NOT NULL,
                               `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `jobs`
--

CREATE TABLE `jobs` (
                        `id` bigint(20) UNSIGNED NOT NULL,
                        `queue` varchar(255) NOT NULL,
                        `payload` longtext NOT NULL,
                        `attempts` tinyint(3) UNSIGNED NOT NULL,
                        `reserved_at` int(10) UNSIGNED DEFAULT NULL,
                        `available_at` int(10) UNSIGNED NOT NULL,
                        `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
                              `id` int(10) UNSIGNED NOT NULL,
                              `migration` varchar(255) NOT NULL,
                              `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
                                                          (1, '2014_10_12_000000_create_users_table', 1),
                                                          (2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
                                                          (3, '2019_08_19_000000_create_failed_jobs_table', 1),
                                                          (4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
                                                          (5, '2023_04_25_205049_create_contents_table', 1),
                                                          (6, '2023_04_25_213551_create_categories_table', 1),
                                                          (7, '2023_04_25_220454_create_tags_table', 1),
                                                          (8, '2023_04_26_175806_create_attachments_table', 1),
                                                          (9, '2023_04_27_113407_create_options_table', 1),
                                                          (10, '2023_05_06_132138_create_permission_tables', 1),
                                                          (11, '2023_05_07_195416_add_status_to_users_table', 1),
                                                          (12, '2023_05_08_182535_create_contact_requests_table', 1),
                                                          (13, '2023_05_08_204337_create_jobs_table', 1),
                                                          (14, '2023_05_17_120358_create_comments_table', 2),
                                                          (15, '2023_05_17_185947_create_notifications_table', 3),
                                                          (16, '2023_05_17_220748_update_user_table', 4),
                                                          (17, '2023_05_22_181843_create_extensions_table', 5);

-- --------------------------------------------------------

--
-- Structure de la table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
                                         `permission_id` bigint(20) UNSIGNED NOT NULL,
                                         `model_type` varchar(255) NOT NULL,
                                         `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
                                   `role_id` bigint(20) UNSIGNED NOT NULL,
                                   `model_type` varchar(255) NOT NULL,
                                   `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
    (1, 'App\\Models\\User', 1);

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE `notifications` (
                                 `id` char(36) NOT NULL,
                                 `type` varchar(255) NOT NULL,
                                 `notifiable_type` varchar(255) NOT NULL,
                                 `notifiable_id` bigint(20) UNSIGNED NOT NULL,
                                 `data` text NOT NULL,
                                 `read_at` timestamp NULL DEFAULT NULL,
                                 `created_at` timestamp NULL DEFAULT NULL,
                                 `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `options`
--

CREATE TABLE `options` (
                           `key` varchar(255) NOT NULL,
                           `value` varchar(255) NOT NULL,
                           `created_at` timestamp NULL DEFAULT NULL,
                           `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `options`
--

INSERT INTO `options` (`key`, `value`, `created_at`, `updated_at`) VALUES
                                                                       ('blog', '4', '2023-05-13 15:38:26', '2023-05-13 15:38:26'),
                                                                       ('contact-email', 'contact@aymericlhomme.fr', '2023-05-13 15:38:26', '2023-05-13 15:50:25'),
                                                                       ('description', 'Je suis développeur web en Freelance. Je propose des prestations pour créer et développer votre site internet. N\'hésitez plus!', '2023-05-13 15:38:26', '2023-05-13 15:51:41'),
('facebook', 'https://www.facebook.com/aymeric.62830', '2023-05-13 15:38:26', '2023-05-13 15:50:02'),
('favicon', '2', '2023-05-13 15:38:26', '2023-05-13 15:49:44'),
('footer', '2', '2023-05-13 15:38:26', '2023-05-13 15:38:26'),
('header', '1', '2023-05-13 15:38:26', '2023-05-13 15:38:26'),
('homepage', '3', '2023-05-13 15:38:26', '2023-05-13 15:38:26'),
('instagram', 'https://www.instagram.com/aymericlhomme', '2023-05-13 15:38:26', '2023-05-13 15:50:10'),
('linkedin', 'https://www.linkedin.com/in/aymeric-lhomme-39148a195', '2023-05-13 15:38:26', '2023-05-13 15:50:06'),
('logo', '1', '2023-05-13 15:38:26', '2023-05-13 15:49:41'),
('noreply-email', 'noreply@aymericlhomme.fr', '2023-05-13 15:38:26', '2023-05-13 15:50:28'),
('sav-email', 'sav@aymericlhomme.fr', '2023-05-13 15:38:26', '2023-05-13 15:50:42'),
('sitename', 'Lhomme Aymeric', '2023-05-13 15:38:26', '2023-05-13 15:50:22'),
('spam_words', 'Sexe\nBite\nHot\nSexy\nChaud\nViagra\nCure\nSexuel\nFemme/homme sexy\nAgrandissez votre pénis\nPerformance\nCasino\nBlackjack\nPoker\nJetons\nMise\nRoulette\nTexas Hold\'em\nOpportunité\nSans frais\nCarte bancaire\nVirement Paypal\nTaux d\'intérêt\nMeilleur prix\nPrix les plus bas', '2023-05-13 15:38:26', '2023-05-13 15:51:42'),
('theme', 'aymericlhomme', '2023-05-13 15:38:26', '2023-06-06 12:32:42'),
('twitter', 'https://twitter.com/AymericLhomme', '2023-05-13 15:38:26', '2023-05-13 15:49:59');

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'role-list', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(2, 'role-create', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(3, 'role-edit', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(4, 'role-delete', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(5, 'content-list', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(6, 'content-create', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(7, 'content-edit', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(8, 'content-delete', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(9, 'user-list', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(10, 'user-create', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(11, 'user-edit', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(12, 'user-delete', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(13, 'category-list', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(14, 'category-create', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(15, 'category-edit', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(16, 'category-delete', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(17, 'tag-list', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(18, 'tag-create', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(19, 'tag-edit', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(20, 'tag-delete', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(21, 'option-list', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(22, 'option-edit', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(23, 'theme-list', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(24, 'theme-upload', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(25, 'theme-delete', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(26, 'access-administration', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(27, 'extension-list', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(28, 'extension-upload', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(29, 'extension-toggle', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25'),
(30, 'extension-delete', 'web', '2023-05-13 15:38:25', '2023-05-13 15:38:25');

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Administrateur', 'web', '2023-05-13 15:38:26', '2023-05-13 15:38:26');

-- --------------------------------------------------------

--
-- Structure de la table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1);

-- --------------------------------------------------------

--
-- Structure de la table `tags`
--

CREATE TABLE `tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `visible` tinyint(1) NOT NULL,
  `tag_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `notifications_read_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `status`, `notifications_read_at`) VALUES
(1, 'Lhomme Aymeric', 'aymericlhomme@orange.fr', NULL, '$2y$10$qmdDNOXXCZ.q7pEzX7TEBu4p6jxFx/fX4urmBJBDBc1ntlO48PGtC', NULL, '2023-05-13 15:38:26', '2023-05-24 12:27:51', 1, '2023-05-24 16:27:51');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `attachments`
--
ALTER TABLE `attachments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_content_id_foreign` (`content_id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_comment_id_foreign` (`comment_id`);

--
-- Index pour la table `contact_requests`
--
ALTER TABLE `contact_requests`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contents`
--
ALTER TABLE `contents`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `contents_slug_unique` (`slug`),
  ADD KEY `contents_user_id_foreign` (`user_id`),
  ADD KEY `contents_category_id_foreign` (`category_id`),
  ADD KEY `contents_attachment_id_foreign` (`attachment_id`);

--
-- Index pour la table `content_tag`
--
ALTER TABLE `content_tag`
  ADD PRIMARY KEY (`content_id`,`tag_id`),
  ADD KEY `content_tag_tag_id_foreign` (`tag_id`);

--
-- Index pour la table `extensions`
--
ALTER TABLE `extensions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Index pour la table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Index pour la table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`key`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Index pour la table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Index pour la table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tags_slug_unique` (`slug`),
  ADD KEY `tags_tag_id_foreign` (`tag_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `attachments`
--
ALTER TABLE `attachments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `contact_requests`
--
ALTER TABLE `contact_requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `contents`
--
ALTER TABLE `contents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `extensions`
--
ALTER TABLE `extensions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_content_id_foreign` FOREIGN KEY (`content_id`) REFERENCES `contents` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `contents`
--
ALTER TABLE `contents`
  ADD CONSTRAINT `contents_attachment_id_foreign` FOREIGN KEY (`attachment_id`) REFERENCES `attachments` (`id`),
  ADD CONSTRAINT `contents_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `contents_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `content_tag`
--
ALTER TABLE `content_tag`
  ADD CONSTRAINT `content_tag_content_id_foreign` FOREIGN KEY (`content_id`) REFERENCES `contents` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `content_tag_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `tags`
--
ALTER TABLE `tags`
  ADD CONSTRAINT `tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

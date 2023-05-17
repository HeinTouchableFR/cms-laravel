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

--
-- Déchargement des données de la table `attachments`
--

INSERT INTO `attachments` (`id`, `filename`, `filesize`, `created_at`, `updated_at`) VALUES
                                                                                         (1, 'attachments/RmcxEtT160ms7MEZnEEG5JjFiwhp0bFup9dQUE8w.png', 11964, '2023-05-12 15:15:58', '2023-05-12 15:15:58'),
                                                                                         (2, 'attachments/TmVvoQIZsDNRBYWw9vz2ZLb1GKMknttm6JXKrpzE.png', 3287, '2023-05-12 15:16:04', '2023-05-12 15:16:04'),
                                                                                         (3, 'attachments/uNn1vBMJzvsvg7VBR9XBGohIJMFYz4gvS0u4PakW.png', 21629, '2023-05-12 15:17:20', '2023-05-12 15:17:20'),
                                                                                         (4, 'attachments/zdSPy2ohmFBJsQDMg89N4N0T6U6RQleFM8JuV3Nc.png', 20750, '2023-05-12 15:17:23', '2023-05-12 15:17:23'),
                                                                                         (5, 'attachments/BSFSInwzTFf7vxB4pOh4zlFCcL6kGHvP6qGapjmU.png', 20365, '2023-05-12 15:17:25', '2023-05-12 15:17:25'),
                                                                                         (6, 'attachments/HXbimyAmh4r0KPfBBOqWMuEfqfdtQLZtDNFQhwqq.png', 21734, '2023-05-12 15:17:28', '2023-05-12 15:17:28'),
                                                                                         (7, 'attachments/dm8ndZ2hFU1RKuxliUhggQO3f8VlhFPz8Z0Szv3z.webp', 115766, '2023-05-12 17:47:23', '2023-05-12 17:47:23'),
                                                                                         (8, 'attachments/KlhOFuaeaWL1JUY23SPlI7psJYdzNsXGkbczyHC1.webp', 69908, '2023-05-12 17:47:25', '2023-05-12 17:47:25'),
                                                                                         (9, 'attachments/Qxs0jfxyJSPxjgh5v0R8PL0o5PXEGpF54fiBG6Zb.webp', 135848, '2023-05-12 17:47:28', '2023-05-12 17:47:28'),
                                                                                         (10, 'attachments/lCk0EsJlSTGaqAS5sRk8qhAZs0yPD2FB58uxbcdW.webp', 43006, '2023-05-12 17:47:32', '2023-05-12 17:47:32'),
                                                                                         (11, 'attachments/DRw2HLNyUINi1fjlO5F2P2qKlc0yI4tT9aTnbCJc.webp', 38358, '2023-05-12 17:47:54', '2023-05-12 17:47:54'),
                                                                                         (12, 'attachments/jBYPIuuZkH6FDtzLI9adcXtrb8zgncf4sUMGZQOh.webp', 86542, '2023-05-12 17:50:20', '2023-05-12 17:50:20'),
                                                                                         (13, 'attachments/alTA41qkMHMsML99BFA2zSmA1fKjUtnCPvPzIkgl.webp', 38962, '2023-05-12 17:50:23', '2023-05-12 17:50:23'),
                                                                                         (14, 'attachments/m073snNWaxcz5wrdo7upcsmiC8oRCYUMpB60FUJV.webp', 73680, '2023-05-12 17:50:24', '2023-05-12 17:50:24'),
                                                                                         (15, 'attachments/bRORJmElmNnufPZktAQlnzSo8n88Rd0aE2iNvMFq.webp', 133778, '2023-05-12 17:50:26', '2023-05-12 17:50:26'),
                                                                                         (16, 'attachments/EtHhmkbCAvFRSuHLdi9YHsoeO5TUr5ddcLNjq9sJ.webp', 67442, '2023-05-12 17:50:29', '2023-05-12 17:50:29'),
                                                                                         (17, 'attachments/39FYRNzj0n2w3Gb1BTRh2sxLXkVRuAUCFNc0j2Iy.webp', 41954, '2023-05-12 17:50:31', '2023-05-12 17:50:31'),
                                                                                         (18, 'attachments/wYpb8GkFs6burwVdM2L9sW41uEiLEnQ1hhNBPAnd.webp', 58194, '2023-05-12 17:50:33', '2023-05-12 17:50:33'),
                                                                                         (19, 'attachments/N5LLndLvlPMzLpKIMBtN835CaIMMpFI6OgkIsyjq.webp', 60734, '2023-05-12 17:50:42', '2023-05-12 17:50:42');

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

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
                                                                                (1, 'Site e-commerce', 'site-e-commerce', '2023-05-13 17:53:04', '2023-05-13 17:53:04'),
                                                                                (2, 'Site vitrine', 'site-vitrine', '2023-05-13 17:53:17', '2023-05-13 17:53:17');

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

--
-- Déchargement des données de la table `contact_requests`
--

INSERT INTO `contact_requests` (`id`, `ip`, `created_at`, `updated_at`) VALUES
    (1, '81.49.7.0', '2023-05-13 18:45:29', '2023-05-13 18:45:29');

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

--
-- Déchargement des données de la table `contents`
--

INSERT INTO `contents` (`id`, `title`, `slug`, `description`, `content`, `online`, `type`, `user_id`, `created_at`, `updated_at`, `category_id`, `attachment_id`) VALUES
                                                                                                                                                                      (1, 'Header', 'header', NULL, '[\r\n  {\r\n    \"auth\": true,\r\n    \"links\": [\r\n      {\r\n        \"label\": \"\",\r\n        \"url\": \"{\\\"path\\\":\\\"home\\\",\\\"label\\\":\\\"Accueil\\\"}\"\r\n      },\r\n      {\r\n        \"label\": \"Portfolio\",\r\n        \"url\": \"{\\\"path\\\":\\\"blog.index\\\",\\\"label\\\":\\\"Blog\\\"}\"\r\n      },\r\n      {\r\n        \"label\": \"\",\r\n        \"url\": \"{\\\"path\\\":\\\"page.show\\\",\\\"label\\\":\\\"Contact\\\",\\\"slug\\\":\\\"contact\\\"}\"\r\n      }\r\n    ],\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"var(--white)\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"header\",\r\n    \"logoWidth\": \"275\",\r\n    \"logoHeight\": \"120\",\r\n    \"logo\": true,\r\n    \"searchbar\": true\r\n  }\r\n]', 1, 'header', 1, '2023-05-13 17:38:26', '2023-05-13 17:49:36', NULL, NULL),
                                                                                                                                                                      (2, 'Footer', 'footer', NULL, '[\r\n  {\r\n    \"columns\": [\r\n      {\r\n        \"title\": \"Informations\",\r\n        \"content\": \"<p>Lhomme Aymeric</p><p>Siret: <strong>89082990600019</strong></p><p>Développeur Full stack Freelance sur la Côte d\'Opale.</p><p><strong><span style=\\\"color: var(--color-1)\\\">Wordpress - Symfony - React</span></strong></p>\",\r\n        \"links\": [],\r\n        \"social\": false,\r\n        \"themeswitcher\": false\r\n      },\r\n      {\r\n        \"title\": \"Plan du site\",\r\n        \"content\": \"<p></p>\",\r\n        \"links\": [\r\n          {\r\n            \"label\": \"\",\r\n            \"url\": \"{\\\"path\\\":\\\"home\\\",\\\"label\\\":\\\"Accueil\\\"}\"\r\n          },\r\n          {\r\n            \"label\": \"\",\r\n            \"url\": \"{\\\"path\\\":\\\"blog.index\\\",\\\"label\\\":\\\"Blog\\\"}\"\r\n          },\r\n          {\r\n            \"label\": \"\",\r\n            \"url\": \"{\\\"path\\\":\\\"page.show\\\",\\\"label\\\":\\\"Contact\\\",\\\"slug\\\":\\\"contact\\\"}\"\r\n          }\r\n        ],\r\n        \"social\": false,\r\n        \"themeswitcher\": false\r\n      },\r\n      {\r\n        \"title\": \"Me contacter\",\r\n        \"content\": \"<p></p>\",\r\n        \"links\": [\r\n          {\r\n            \"label\": \"Par e-mail\",\r\n            \"url\": \"{\\\"path\\\":\\\"page.show\\\",\\\"label\\\":\\\"Contact\\\",\\\"slug\\\":\\\"contact\\\"}\"\r\n          }\r\n        ],\r\n        \"social\": true,\r\n        \"themeswitcher\": false\r\n      }\r\n    ],\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"var(--color-light)\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"footer-columns\"\r\n  },\r\n  {\r\n    \"credit\": \"<p>Intégration et développement par<span style=\\\"color: rgb(58, 52, 61)\\\"> </span><a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr/\\\"><strong>Aymeric Lhomme</strong></a></p>\",\r\n    \"links\": [\r\n      {\r\n        \"label\": \"\",\r\n        \"url\": \"{\\\"path\\\":\\\"page.show\\\",\\\"label\\\":\\\"Mentions Légales\\\",\\\"slug\\\":\\\"mentions-legales\\\"}\"\r\n      }\r\n    ],\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"var(--contrast)\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-light)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"footer-credit\"\r\n  }\r\n]', 1, 'footer', 1, '2023-05-13 17:38:26', '2023-05-13 17:48:42', NULL, NULL),
(3, 'Bienvenue sur mon site', 'home', NULL, '[\r\n  {\r\n    \"blocs\": [\r\n      {\r\n        \"title\": \"Refonte\",\r\n        \"image\": 5,\r\n        \"content\": \"<p>Si vous souhaitez donner un coup de jeune à votre site internet existant, nous pouvons faire une refonte de votre site.</p>\"\r\n      },\r\n      {\r\n        \"title\": \"Intégration\",\r\n        \"image\": 6,\r\n        \"content\": \"<p>Vous souhaitez convertir votre maquette en vrai page web ? Nous pouvons en discuter.</p>\"\r\n      },\r\n      {\r\n        \"title\": \"E-Commerce\",\r\n        \"image\": 4,\r\n        \"content\": \"<p>Si vous avez besoin de développer une application e-commerce, je maitrise les frameworks Symfony et React.</p>\"\r\n      },\r\n      {\r\n        \"title\": \"Vitrine\",\r\n        \"image\": 3,\r\n        \"content\": \"<p>Vous souhaitez créer un site vitrine ou un portfolio ? Je peux vous mettre en place un site internet facile d’utilisation.</p>\"\r\n      }\r\n    ],\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"service-section\"\r\n  },\r\n  {\r\n    \"title\": \"Mes dernières réalisations\",\r\n    \"content\": \"<p></p>\",\r\n    \"padding\": 5,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"last-posts\"\r\n  }\r\n]', 1, 'page', 1, '2023-05-13 17:38:26', '2023-05-13 17:43:10', NULL, NULL),
                                                                                                                                                                       (4, 'Blog', 'blog', NULL, '[\r\n  {\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"var(--color-light)\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"blog-header\"\r\n  },\r\n  {\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"blog-posts\"\r\n  }\r\n]', 1, 'template', 1, '2023-05-13 17:38:26', '2023-05-13 17:49:12', NULL, NULL),
                                                                                                                                                                       (5, 'Mentions Légales', 'mentions-legales', NULL, '[\r\n  {\r\n    \"title\": \"1 - Édition du site\",\r\n    \"titleAlign\": \"left\",\r\n    \"content\": \"<p>En vertu de l\'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique, il est précisé aux utilisateurs du site internet <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a> l\'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:</p><p>Propriétaire du site : Entrepreneur individuel: Lhomme Aymeric - Contact : <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"mailto:contact@aymericlhomme.fr\\\"><span style=\\\"color: var(--contrast)\\\">contact@aymericlhomme.fr</span></a> - Tél: 06 03 69 51 79 - Adresse : 47 Résidence de l\'Aumônerie, 62830 Samer.</p><p>Identification de l\'entreprise : Entrepreneur individuel: Lhomme Aymeric au capital social de 0€ - SIREN : 890829906 - Adresse postale : 47 Résidence de l\'Aumônerie, 62830 Samer.</p><p>Directeur de la publication : Lhomme Aymeric - Contact : <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"mailto:contact@aymericlhomme.fr\\\"><span style=\\\"color: var(--contrast)\\\">contact@aymericlhomme.fr</span></a>.</p><p>Hébergeur : <strong>o2switch</strong> - <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.o2switch.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.o2switch.fr</span></strong></a> - Tél: 04 44 44 60 40</p><p>Délégué à la protection des données : Lhomme Aymeric - <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"mailto:contact@aymericlhomme.fr\\\"><span style=\\\"color: var(--contrast)\\\">contact@aymericlhomme.fr</span></a></p>\",\r\n    \"buttons\": [],\r\n    \"padding\": 5,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"hero\"\r\n  },\r\n  {\r\n    \"title\": \"2 - Propriété intellectuelle et contrefaçons\",\r\n    \"titleAlign\": \"left\",\r\n    \"content\": \"<p>Entrepreneur individuel: Lhomme Aymeric est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.</p><p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Entrepreneur individuel: Lhomme Aymeric.</p><p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>\",\r\n    \"buttons\": [],\r\n    \"padding\": 5,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"hero\"\r\n  },\r\n  {\r\n    \"title\": \"3 - Limitations de responsabilité\",\r\n    \"titleAlign\": \"left\",\r\n    \"content\": \"<p>Entrepreneur individuel: Lhomme Aymeric ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a>.</p><p>Entrepreneur individuel: Lhomme Aymeric décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a>.</p><p>Entrepreneur individuel: Lhomme Aymeric s’engage à sécuriser au mieux le site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a>, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.</p><p>Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. Entrepreneur individuel: Lhomme Aymeric se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.</p><p>Le cas échéant, Entrepreneur individuel: Lhomme Aymeric se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>\",\r\n    \"buttons\": [],\r\n    \"padding\": 5,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"hero\"\r\n  },\r\n  {\r\n    \"title\": \"4 - CNIL et gestion des données personnelles\",\r\n    \"titleAlign\": \"left\",\r\n    \"content\": \"<p>Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a> dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : Lhomme Aymeric - <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"mailto:contact@aymericlhomme.fr\\\"><span style=\\\"color: var(--contrast)\\\">contact@aymericlhomme.fr</span></a>.</p><p>Pour plus d\'informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire ...), lisez notre Politique de Confidentialité.</p><p>Il est également possible de déposer une réclamation auprès de la CNIL.</p>\",\r\n    \"buttons\": [],\r\n    \"padding\": 5,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"hero\"\r\n  },\r\n  {\r\n    \"title\": \"5 - Liens hypertextes et cookies\",\r\n    \"titleAlign\": \"left\",\r\n    \"content\": \"<p>Le site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a> contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a>.</p><p>La navigation sur le site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.</p><p>Un \\\"cookie\\\" est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d\'obtenir des mesures de fréquentation, par exemple.</p><p>Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.</p><p>Les cookies sont enregistrés pour une durée maximale d\'un mois.</p><p>Pour plus d\'informations sur la façon dont nous faisons usage des cookies, lisez notre Politique de Confidentialité.</p>\",\r\n    \"buttons\": [],\r\n    \"padding\": 5,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"hero\"\r\n  },\r\n  {\r\n    \"title\": \"6 - Droit applicable et attribution de juridiction\",\r\n    \"titleAlign\": \"left\",\r\n    \"content\": \"<p>Tout litige en relation avec l’utilisation du site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a> est soumis au droit français.</p>\",\r\n    \"buttons\": [],\r\n    \"padding\": 5,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"hero\"\r\n  }\r\n]', 1, 'page', 1, '2023-05-13 17:38:26', '2023-05-13 17:44:30', NULL, NULL),
(6, 'Contact', 'contact', NULL, '[\r\n  {\r\n    \"title\": \"Me contacter\",\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"var(--color-light)\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"page-header\"\r\n  },\r\n  {\r\n    \"fields\": [\r\n      {\r\n        \"label\": \"Votre nom\",\r\n        \"name\": \"name\",\r\n        \"type\": \"input\",\r\n        \"required\": true,\r\n        \"full\": false\r\n      },\r\n      {\r\n        \"label\": \"Votre e-mail\",\r\n        \"name\": \"email\",\r\n        \"type\": \"input\",\r\n        \"required\": true,\r\n        \"full\": false\r\n      },\r\n      {\r\n        \"label\": \"Votre message\",\r\n        \"name\": \"content\",\r\n        \"type\": \"textarea\",\r\n        \"required\": true,\r\n        \"full\": true\r\n      }\r\n    ],\r\n    \"padding\": 0,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"contact-form\"\r\n  }\r\n]', 1, 'page', 1, '2023-05-13 17:46:02', '2023-05-13 17:46:02', NULL, NULL),
                                                                                                                                                                        (7, 'VapeHouse', 'vapehouse', 'Création d\'un site e-commerce sur mesure pour la vente de cigarettes électronique pour la société VapeHouse', '[\r\n  {\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"var(--color-light)\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"article-header\"\r\n  },\r\n  {\r\n    \"mainImage\": 9,\r\n    \"secondaryImage\": 8,\r\n    \"title\": \"Création d\'un site e-commerce sur mesure pour la vente de cigarettes électronique\",\r\n    \"textAtLeft\": \"<p>Ce projet est une création d\'une boutique en ligne afin de proposé à la vente des cigarettes électroniques et des e-liquides pour l\'entreprise Vapehouse. La boutique à été réalisée grâce à un développement sur mesure, a l\'aide du framework <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://symfony.com/\\\"><strong>Symfony</strong></a> ainsi que de <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://fr.reactjs.org/\\\"><strong>React</strong></a>.</p>\",\r\n    \"textAtRight\": \"<p></p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"invertingImages\": false,\r\n    \"_name\": \"blog-layout\"\r\n  },\r\n  {\r\n    \"mainImage\": 7,\r\n    \"secondaryImage\": 10,\r\n    \"title\": \"Front-End\",\r\n    \"textAtLeft\": \"<p><a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://symfony.com/\\\"><strong>Symfony</strong></a> utilise le moteur de template <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://fr.wikipedia.org/wiki/Twig\\\"><strong>Twig</strong></a>, qui permet de créer la structure HTML du site tout en y incluant les données récupérées par les controlleurs. Un controlleur représente une route (une url) du site internet.</p><p></p>\",\r\n    \"textAtRight\": \"<p>La partie administrative du site à été entièrement réalisée grâce à <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://fr.reactjs.org/\\\"><strong>React</strong></a> afin de proposer une interface dynamique sans temps de chargement apparent.</p><p></p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"invertingImages\": true,\r\n    \"_name\": \"blog-layout\"\r\n  },\r\n  {\r\n    \"mainImage\": 11,\r\n    \"secondaryImage\": 9,\r\n    \"title\": \"Back-End\",\r\n    \"textAtLeft\": \"<p><a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://symfony.com/\\\"><strong>Symfony</strong></a> utilise l\'<a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://fr.wikipedia.org/wiki/Doctrine_(ORM)\\\"><strong>ORM Doctrine</strong></a> afin d\'avoir un lien entre les objets et les éléments de la base de données. Pour cela, il est nécessaire de créer diverses entitées qui représentent un objet et donc une table dans la base de données.</p>\",\r\n    \"textAtRight\": \"<p>Afin de pouvoir communiquer avec l\'administration, il est nécessaire de créer des APIs. Pour cela, j\'ai utilisé le package <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://api-platform.com/\\\"><strong>API Platform</strong></a> qui permet de créer directement toutes les APIs (GET, POST, PUT, DELETE) en se basant sur les entitées <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://symfony.com/\\\"><strong>Symfony</strong></a>.</p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"invertingImages\": false,\r\n    \"_name\": \"blog-layout\"\r\n  }\r\n]', 1, 'blog', 1, '2023-05-13 17:59:26', '2023-05-13 18:01:18', 1, 9),
(8, 'Souvenir d\'Instant', 'souvenir-d-instant', 'Développement sur mesure d\'une boutique Wordpress pour la vente d\'objets personnalisables', '[\r\n  {\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"var(--color-light)\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"article-header\"\r\n  },\r\n  {\r\n    \"mainImage\": 19,\r\n    \"secondaryImage\": 15,\r\n    \"title\": \"Intégration & Développement WordPress\",\r\n    \"textAtLeft\": \"<p>Ce projet est une création d\'une boutique en ligne afin de proposé à la vente des produits en bois personnalisable par les client de l\'entreprise Souvenir d\'Instant. La boutique à été réalisée grâce au CMS <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://wordpress.org/\\\"><strong>Wordpress</strong></a>, en créant un thème sur mesure.</p>\",\r\n    \"textAtRight\": \"<p>Avant tout, il a fallut créer une maquette en fonction du brand-board fourni par le client. La maquette à été réalisée grâce à l\'outil de prototypage <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://figma.com\\\"><strong>Figma</strong></a> et est disponible <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.figma.com/file/od1r2wgQl1hRwX92r7TrUw/Souvenir-d-instant?node-id=0%3A1\\\"><strong>ici</strong></a>.</p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"invertingImages\": false,\r\n    \"_name\": \"blog-layout\"\r\n  },\r\n  {\r\n    \"mainImage\": 14,\r\n    \"secondaryImage\": 13,\r\n    \"title\": \"Un espace de vente\",\r\n    \"textAtLeft\": \"<p>Afin de créer un espace de vente, j\'ai utilisé le plugin <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://woocommerce.com/\\\"><strong>Woocommerce</strong></a>. Après avoir configuré le module, puis modifié le design de ce dernier en fonction de la maquette, la partie e-commerce du site était prête.</p><p></p>\",\r\n    \"textAtRight\": \"<p>Le client souhaitant pouvoir fournir une prévisualisation en temps réel de l\'objet personnalisable, il a fallut trouver une solution afin d\'intégrer cette fonctionnalité à <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://woocommerce.com/\\\"><strong>Woocommerce</strong></a>. Pour cela, j\'ai utilisé un plugin proposé par la société <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"http://Zakeke.com\\\"><strong>Zakeke.com</strong></a>. Ce dernier permet d\'ajouter un éditeur permettant d\'effectuer sa personnalisation, d\'exporter ou de partager la personnalisation et d\'ajouter la personnalisation au panier.</p><p></p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"invertingImages\": true,\r\n    \"_name\": \"blog-layout\"\r\n  },\r\n  {\r\n    \"mainImage\": 12,\r\n    \"secondaryImage\": 16,\r\n    \"title\": \"Un espace photo\",\r\n    \"textAtLeft\": \"<p>En plus d\'un site de vente, <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://souvenirdinstant.fr/\\\"><strong>Souvenir d\'Instant</strong></a> souhaitait pouvoir proposer ses services en tant que photographe. L\'espace photo permet de mettre en avant certaines images choisi par <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://souvenirdinstant.fr/\\\"><strong>Souvenir d\'Instant</strong></a> ainsi que de proposer ses services et tarifs.</p>\",\r\n    \"textAtRight\": \"<p>De plus, un espace privé pour chaque client doit être disponible afin que <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://souvenirdinstant.fr/\\\"><strong>Souvenir d\'Instant</strong></a> puisse mettre en ligne les différentes photos réalisées lors des différents événements.</p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"invertingImages\": false,\r\n    \"_name\": \"blog-layout\"\r\n  }\r\n]', 1, 'blog', 1, '2023-05-13 18:05:26', '2023-05-13 18:06:46', 1, 19);

-- --------------------------------------------------------

--
-- Structure de la table `content_tag`
--

CREATE TABLE `content_tag` (
  `content_id` bigint(20) UNSIGNED NOT NULL,
  `tag_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `content_tag`
--

INSERT INTO `content_tag` (`content_id`, `tag_id`) VALUES
(7, 4),
(7, 7),
(7, 10),
(8, 2),
(8, 10);

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
(13, '2023_05_08_204337_create_jobs_table', 1);

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
('blog', '4', '2023-05-13 17:38:26', '2023-05-13 17:38:26'),
('contact-email', 'contact@aymericlhomme.fr', '2023-05-13 17:38:26', '2023-05-13 17:50:25'),
('description', 'Je suis développeur web en Freelance. Je propose des prestations pour créer et développer votre site internet. N\'hésitez plus!', '2023-05-13 17:38:26', '2023-05-13 17:51:41'),
('facebook', 'https://www.facebook.com/aymeric.62830', '2023-05-13 17:38:26', '2023-05-13 17:50:02'),
('favicon', '2', '2023-05-13 17:38:26', '2023-05-13 17:49:44'),
('footer', '2', '2023-05-13 17:38:26', '2023-05-13 17:38:26'),
('header', '1', '2023-05-13 17:38:26', '2023-05-13 17:38:26'),
('homepage', '3', '2023-05-13 17:38:26', '2023-05-13 17:38:26'),
('instagram', 'https://www.instagram.com/aymericlhomme', '2023-05-13 17:38:26', '2023-05-13 17:50:10'),
('linkedin', 'https://www.linkedin.com/in/aymeric-lhomme-39148a195', '2023-05-13 17:38:26', '2023-05-13 17:50:06'),
('logo', '1', '2023-05-13 17:38:26', '2023-05-13 17:49:41'),
('noreply-email', 'noreply@aymericlhomme.fr', '2023-05-13 17:38:26', '2023-05-13 17:50:28'),
('sav-email', 'sav@aymericlhomme.fr', '2023-05-13 17:38:26', '2023-05-13 17:50:42'),
('sitename', 'Lhomme Aymeric', '2023-05-13 17:38:26', '2023-05-13 17:50:22'),
('spam_words', 'Sexe\nBite\nHot\nSexy\nChaud\nViagra\nCure\nSexuel\nFemme/homme sexy\nAgrandissez votre pénis\nPerformance\nCasino\nBlackjack\nPoker\nJetons\nMise\nRoulette\nTexas Hold\'em\nOpportunité\nSans frais\nCarte bancaire\nVirement Paypal\nTaux d\'intérêt\nMeilleur prix\nPrix les plus bas', '2023-05-13 17:38:26', '2023-05-13 17:51:42'),
('theme', 'aymericlhomme', '2023-05-13 17:38:26', '2023-05-13 17:39:26'),
('twitter', 'https://twitter.com/AymericLhomme', '2023-05-13 17:38:26', '2023-05-13 17:49:59');

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
(1, 'role-list', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(2, 'role-create', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(3, 'role-edit', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(4, 'role-delete', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(5, 'content-list', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(6, 'content-create', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(7, 'content-edit', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(8, 'content-delete', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(9, 'user-list', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(10, 'user-create', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(11, 'user-edit', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(12, 'user-delete', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(13, 'category-list', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(14, 'category-create', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(15, 'category-edit', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(16, 'category-delete', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(17, 'tag-list', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(18, 'tag-create', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(19, 'tag-edit', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(20, 'tag-delete', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(21, 'option-list', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(22, 'option-edit', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(23, 'theme-list', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(24, 'theme-upload', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(25, 'theme-delete', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25'),
(26, 'access-administration', 'web', '2023-05-13 17:38:25', '2023-05-13 17:38:25');

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
(1, 'Administrateur', 'web', '2023-05-13 17:38:26', '2023-05-13 17:38:26');

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
(26, 1);

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

--
-- Déchargement des données de la table `tags`
--

INSERT INTO `tags` (`id`, `name`, `slug`, `description`, `position`, `visible`, `tag_id`, `created_at`, `updated_at`) VALUES
(1, 'CMS', 'cms', NULL, NULL, 1, NULL, '2023-05-13 17:53:26', '2023-05-13 17:53:26'),
(2, 'Wordpress', 'wordpress', NULL, NULL, 1, 1, '2023-05-13 17:53:41', '2023-05-13 17:53:41'),
(3, 'Framework', 'framework', NULL, NULL, 1, NULL, '2023-05-13 17:53:54', '2023-05-13 17:53:54'),
(4, 'Symfony', 'symfony', NULL, NULL, 1, 3, '2023-05-13 17:54:05', '2023-05-13 17:54:05'),
(5, 'Laravel', 'laravel', NULL, NULL, 1, 3, '2023-05-13 17:54:17', '2023-05-13 17:54:17'),
(6, 'NextJS', 'nextjs', NULL, NULL, 1, 3, '2023-05-13 17:54:29', '2023-05-13 17:54:29'),
(7, 'React', 'react', NULL, NULL, 1, 3, '2023-05-13 17:54:40', '2023-05-13 17:54:40'),
(8, 'ViteJS', 'vitejs', NULL, NULL, 1, 3, '2023-05-13 17:54:50', '2023-05-13 17:54:50'),
(9, 'Service', 'service', NULL, NULL, 1, NULL, '2023-05-13 17:55:02', '2023-05-13 17:55:02'),
(10, 'Intégration', 'integration', NULL, 1, 1, 9, '2023-05-13 17:55:12', '2023-05-13 17:55:45'),
(11, 'Refonte', 'refonte', NULL, NULL, 1, 9, '2023-05-13 17:55:56', '2023-05-13 17:55:56');

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
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `status`) VALUES
(1, 'Lhomme Aymeric', 'aymericlhomme@orange.fr', NULL, '$2y$10$qmdDNOXXCZ.q7pEzX7TEBu4p6jxFx/fX4urmBJBDBc1ntlO48PGtC', NULL, '2023-05-13 17:38:26', '2023-05-15 18:43:24', 1);

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
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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

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

DROP TABLE IF EXISTS `attachments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attachments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `filesize` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attachments`
--

LOCK TABLES `attachments` WRITE;
/*!40000 ALTER TABLE `attachments` DISABLE KEYS */;
INSERT INTO `attachments` VALUES
(6,'attachments/VGAd4V5GBYizqx7cpF5leMbTUpcSbui30PyLRmFJ.png',177734,'2023-04-26 20:38:10','2023-04-26 20:38:10'),
(9,'attachments/73hkryKmDtV6HxC42yDFaPt42PXPp3l7SvkFWiLS.png',11964,'2023-04-27 13:34:36','2023-04-27 13:34:36'),
(10,'attachments/YbEWC6mAVWhLSmqzTCpNlMG2YdkTKJQAWDfW3wOj.png',3287,'2023-04-27 13:34:38','2023-04-27 13:34:38'),
(11,'attachments/gArpX1LkPtkE4vnW6Z6BHnPFRX3awVnuzieKfraY.png',21629,'2023-04-28 14:10:14','2023-04-28 14:10:14'),
(12,'attachments/REZ04prvsXjWNCNtZEzWtY75aPfFH1sNmxk5efs9.png',20365,'2023-04-28 14:10:17','2023-04-28 14:10:17'),
(13,'attachments/GdheipuGODDSpqz7oNyWCg287oVrvgKkhEozBcGn.png',20750,'2023-04-28 14:10:20','2023-04-28 14:10:20'),
(14,'attachments/WbYhfTxobXcihmgl1pVE8xIiMjMlTbbrrVqq8TOC.png',21734,'2023-04-28 14:10:22','2023-04-28 14:10:22'),
(15,'attachments/sH4V3MxFvCTMM4Lq3eaqIcxGxraXSAu0o1mXU6Eg.webp',135848,'2023-04-29 13:41:57','2023-04-29 13:41:57'),
(16,'attachments/Ftjo0cjPybvKEo7hy3Ce155pBTJWSZhnpByolRGZ.webp',38358,'2023-04-29 13:41:58','2023-04-29 13:41:58'),
(17,'attachments/4iFLZFSbA7AiKBVyrtmBWOT0P51HRiDz6uGDqQzn.webp',115766,'2023-04-29 13:42:00','2023-04-29 13:42:00'),
(18,'attachments/VptrG0lir5VSsVKZWSu08pzmyh07DzInOdOGIq64.webp',43006,'2023-04-29 13:42:01','2023-04-29 13:42:01'),
(19,'attachments/JQ2QDyw2prjNoTCxVTztRYGKl7D7pUy8IaP2rBUo.webp',69908,'2023-04-29 13:42:03','2023-04-29 13:42:03'),
(20,'attachments/xHrnnhjFCZxLTR8GNfIdtgvOtIbTIPNPzcKSIiH4.webp',60734,'2023-04-29 13:46:51','2023-04-29 13:46:51'),
(21,'attachments/MczBlPm8GEdBUo9RHWkIfOuXDGAGTvbnMqcGrKtk.webp',67442,'2023-04-29 13:46:53','2023-04-29 13:46:53'),
(22,'attachments/ftm96i2TrIahEQ3jpa4XJyBOP1lb4Er5OFJkv4kY.webp',73680,'2023-04-29 13:46:54','2023-04-29 13:46:54'),
(23,'attachments/hisQ7J8XTl4nTAjSX4aLjxsbhWAqLoIEoqmnxl8Q.webp',133778,'2023-04-29 13:46:56','2023-04-29 13:46:56'),
(24,'attachments/fiRavYRnluLWxBQUE10DBeZJf4L94t7OTHrU9yTI.webp',38962,'2023-04-29 13:46:57','2023-04-29 13:46:57'),
(25,'attachments/muBYfjfxFmLkjS6W8cusLR3EZeLYuvC2xePl3r9q.webp',41954,'2023-04-29 13:46:59','2023-04-29 13:46:59'),
(26,'attachments/0Dt58QkifwN17L2PLPY0RopKGDhJ7pFlvaZS3Tx8.webp',86542,'2023-04-29 13:47:01','2023-04-29 13:47:01'),
(27,'attachments/PrEKbTI5jsbXORuAPlmspjwi7I6OXsQaof0LfMKs.webp',58194,'2023-04-29 13:47:02','2023-04-29 13:47:02');
/*!40000 ALTER TABLE `attachments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES
(1,'Site e-commerce','site-e-commerce','2023-05-07 12:29:24','2023-05-07 12:29:24'),
(3,'Site vitrine','site-vitrine','2023-05-07 14:05:21','2023-05-07 14:05:21');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_requests`
--

DROP TABLE IF EXISTS `contact_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_requests` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_requests`
--

LOCK TABLES `contact_requests` WRITE;
/*!40000 ALTER TABLE `contact_requests` DISABLE KEYS */;
INSERT INTO `contact_requests` VALUES
(6,'172.20.0.0','2023-05-08 20:51:24','2023-05-08 20:51:24');
/*!40000 ALTER TABLE `contact_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `content_tag`
--

DROP TABLE IF EXISTS `content_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `content_tag` (
  `content_id` bigint(20) unsigned NOT NULL,
  `tag_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`content_id`,`tag_id`),
  KEY `post_tag_tag_id_foreign` (`tag_id`),
  CONSTRAINT `content_tag_contents_id_fk` FOREIGN KEY (`content_id`) REFERENCES `contents` (`id`),
  CONSTRAINT `content_tag_tags_id_fk` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content_tag`
--

LOCK TABLES `content_tag` WRITE;
/*!40000 ALTER TABLE `content_tag` DISABLE KEYS */;
INSERT INTO `content_tag` VALUES
(1,4),
(1,6);
/*!40000 ALTER TABLE `content_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contents`
--

DROP TABLE IF EXISTS `contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contents` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `online` tinyint(1) NOT NULL,
  `type` varchar(255) NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` bigint(20) unsigned DEFAULT NULL,
  `attachment_id` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `contents_slug_unique` (`slug`),
  KEY `contents_user_id_foreign` (`user_id`),
  KEY `contents_category_id_foreign` (`category_id`),
  KEY `contents_attachment_id_foreign` (`attachment_id`),
  CONSTRAINT `contents_attachment_id_foreign` FOREIGN KEY (`attachment_id`) REFERENCES `attachments` (`id`),
  CONSTRAINT `contents_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `contents_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contents`
--

LOCK TABLES `contents` WRITE;
/*!40000 ALTER TABLE `contents` DISABLE KEYS */;
INSERT INTO `contents` VALUES
(1,'VapeHouse','vapehouse','Création d\'un site e-commerce sur mesure pour la vente de cigarettes électronique pour la société VapeHouse','[\r\n  {\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"var(--color-light)\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"article-header\"\r\n  },\r\n  {\r\n    \"mainImage\": 15,\r\n    \"secondaryImage\": 19,\r\n    \"title\": \"Création d\'un site e-commerce sur mesure pour la vente de cigarettes électronique\",\r\n    \"textAtLeft\": \"<p>Ce projet est une création d\'une boutique en ligne afin de proposé à la vente des cigarettes électroniques et des e-liquides pour l\'entreprise Vapehouse. La boutique à été réalisée grâce à un développement sur mesure, a l\'aide du framework <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://symfony.com/\\\"><strong>Symfony</strong></a> ainsi que de <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://fr.reactjs.org/\\\"><strong>React</strong></a>.</p>\",\r\n    \"textAtRight\": \"<p></p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"invertingImages\": false,\r\n    \"_name\": \"blog-layout\"\r\n  },\r\n  {\r\n    \"mainImage\": 17,\r\n    \"secondaryImage\": 18,\r\n    \"title\": \"Front-End\",\r\n    \"textAtLeft\": \"<p><a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://symfony.com/\\\"><strong>Symfony</strong></a> utilise le moteur de template <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://fr.wikipedia.org/wiki/Twig\\\"><strong>Twig</strong></a>, qui permet de créer la structure HTML du site tout en y incluant les données récupérées par les controlleurs. Un controlleur représente une route (une url) du site internet.</p><p></p>\",\r\n    \"textAtRight\": \"<p>La partie administrative du site à été entièrement réalisée grâce à <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://fr.reactjs.org/\\\"><strong>React</strong></a> afin de proposer une interface dynamique sans temps de chargement apparent.</p><p></p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"invertingImages\": true,\r\n    \"_name\": \"blog-layout\"\r\n  },\r\n  {\r\n    \"mainImage\": 16,\r\n    \"secondaryImage\": 15,\r\n    \"title\": \"Back-End\",\r\n    \"textAtLeft\": \"<p><a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://symfony.com/\\\"><strong>Symfony</strong></a> utilise l\'<a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://fr.wikipedia.org/wiki/Doctrine_(ORM)\\\"><strong>ORM Doctrine</strong></a> afin d\'avoir un lien entre les objets et les éléments de la base de données. Pour cela, il est nécessaire de créer diverses entitées qui représentent un objet et donc une table dans la base de données.</p>\",\r\n    \"textAtRight\": \"<p>Afin de pouvoir communiquer avec l\'administration, il est nécessaire de créer des APIs. Pour cela, j\'ai utilisé le package <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://api-platform.com/\\\"><strong>API Platform</strong></a> qui permet de créer directement toutes les APIs (GET, POST, PUT, DELETE) en se basant sur les entitées <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://symfony.com/\\\"><strong>Symfony</strong></a>.</p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"invertingImages\": false,\r\n    \"_name\": \"blog-layout\"\r\n  }\r\n]',1,'blog',1,'2023-04-26 15:43:18','2023-04-29 13:43:48',1,15),
(2,'Header','header',NULL,'[\r\n  {\r\n    \"logo\": true,\r\n    \"searchbar\": true,\r\n    \"auth\": true,\r\n    \"links\": [\r\n      {\r\n        \"label\": \"\",\r\n        \"url\": \"{\\\"path\\\":\\\"home\\\",\\\"label\\\":\\\"Accueil\\\"}\"\r\n      },\r\n      {\r\n        \"label\": \"Portfolio\",\r\n        \"url\": \"{\\\"path\\\":\\\"blog.index\\\",\\\"label\\\":\\\"Blog\\\"}\"\r\n      },\r\n      {\r\n        \"label\": \"\",\r\n        \"url\": \"{\\\"path\\\":\\\"page.show\\\",\\\"label\\\":\\\"Contact\\\",\\\"slug\\\":\\\"contact\\\"}\"\r\n      }\r\n    ],\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"var(--white)\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"logoWidth\": \"275\",\r\n    \"logoHeight\": \"120\",\r\n    \"_name\": \"header\"\r\n  }\r\n]',1,'header',1,'2023-04-27 14:30:03','2023-04-28 17:57:25',NULL,NULL),
(3,'Footer','footer',NULL,'[\n  {\n    \"columns\": [\n      {\n        \"title\": \"Informations\",\n        \"content\": \"<p>Lhomme Aymeric</p><p>Siret: <strong>89082990600019</strong></p><p>Développeur Full stack Freelance sur la Côte d\'Opale.</p><p><strong><span style=\\\"color: var(--color-1)\\\">Wordpress - Symfony - React</span></strong></p>\",\n        \"links\": [],\n        \"social\": false,\n        \"themeswitcher\": false\n      },\n      {\n        \"title\": \"Plan du site\",\n        \"content\": \"<p></p>\",\n        \"links\": [\n          {\n            \"label\": \"\",\n            \"url\": \"{\\\"path\\\":\\\"home\\\",\\\"label\\\":\\\"Accueil\\\"}\"\n          },\n          {\n            \"label\": \"\",\n            \"url\": \"{\\\"path\\\":\\\"blog.index\\\",\\\"label\\\":\\\"Blog\\\"}\"\n          },\n          {\n            \"label\": \"\",\n            \"url\": \"{\\\"path\\\":\\\"page.show\\\",\\\"label\\\":\\\"Contact\\\",\\\"slug\\\":\\\"contact\\\"}\"\n          }\n        ],\n        \"social\": false,\n        \"themeswitcher\": false\n      },\n      {\n        \"title\": \"Me contacter\",\n        \"content\": \"<p></p>\",\n        \"links\": [\n          {\n            \"label\": \"Par e-mail\",\n            \"url\": \"{\\\"path\\\":\\\"page.show\\\",\\\"label\\\":\\\"Contact\\\",\\\"slug\\\":\\\"contact\\\"}\"\n          }\n        ],\n        \"social\": true,\n        \"themeswitcher\": false\n      }\n    ],\n    \"padding\": 2,\n    \"backgroundColor\": \"var(--color-light)\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--contrast)\",\n    \"textColor\": \"var(--color-dark)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"footer-columns\"\n  },\n  {\n    \"credit\": \"<p>Intégration et développement par<span style=\\\"color: rgb(58, 52, 61)\\\"> </span><a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr/\\\"><strong>Aymeric Lhomme</strong></a></p>\",\n    \"links\": [\n      {\n        \"label\": \"\",\n        \"url\": \"{\\\"path\\\":\\\"page.show\\\",\\\"label\\\":\\\"Mentions Légales\\\",\\\"slug\\\":\\\"mentions-legales\\\"}\"\n      }\n    ],\n    \"padding\": 1,\n    \"backgroundColor\": \"var(--color-1)\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--contrast)\",\n    \"textColor\": \"var(--color-light)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"footer-credit\"\n  }\n]',1,'footer',1,'2023-04-27 14:30:05','2023-04-27 14:30:12',NULL,NULL),
(4,'Blog','blog',NULL,'[\n  {\n    \"padding\": 2,\n    \"backgroundColor\": \"var(--color-light)\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--contrast)\",\n    \"textColor\": \"var(--color-dark)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"blog-header\"\n  },\n  {\n    \"padding\": 2,\n    \"backgroundColor\": \"\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--contrast)\",\n    \"textColor\": \"var(--color-dark)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"blog-posts\"\n  }\n]',1,'template',1,'2023-04-27 14:30:06','2023-04-27 14:30:13',NULL,NULL),
(5,'Bienvenue sur mon site','accueil',NULL,'[\r\n  {\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"service-section\",\r\n    \"blocs\": [\r\n      {\r\n        \"title\": \"Refonte\",\r\n        \"image\": 12,\r\n        \"content\": \"<p>Si vous souhaitez donner un coup de jeune à votre site internet existant, nous pouvons faire une refonte de votre site.</p>\"\r\n      },\r\n      {\r\n        \"title\": \"Intégration\",\r\n        \"image\": 14,\r\n        \"content\": \"<p>Vous souhaitez convertir votre maquette en vrai page web ? Nous pouvons en discuter.</p>\"\r\n      },\r\n      {\r\n        \"title\": \"E-Commerce\",\r\n        \"image\": 13,\r\n        \"content\": \"<p>Si vous avez besoin de développer une application e-commerce, je maitrise les frameworks Symfony et React.</p>\"\r\n      },\r\n      {\r\n        \"title\": \"Vitrine\",\r\n        \"image\": 11,\r\n        \"content\": \"<p>Vous souhaitez créer un site vitrine ou un portfolio ? Je peux vous mettre en place un site internet facile d’utilisation.</p>\"\r\n      }\r\n    ]\r\n  },\r\n  {\r\n    \"title\": \"Mes dernières réalisations\",\r\n    \"content\": \"<p></p>\",\r\n    \"padding\": 5,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"last-posts\"\r\n  }\r\n]',1,'page',1,'2023-04-27 14:46:46','2023-04-28 14:13:49',NULL,NULL),
(15,'Mentions Légales','mentions-legales',NULL,'[\n  {\n    \"title\": \"1 - Édition du site\",\n    \"titleAlign\": \"left\",\n    \"content\": \"<p>En vertu de l\'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique, il est précisé aux utilisateurs du site internet <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a> l\'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:</p><p>Propriétaire du site : Entrepreneur individuel: Lhomme Aymeric - Contact : <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"mailto:contact@aymericlhomme.fr\\\"><span style=\\\"color: var(--contrast)\\\">contact@aymericlhomme.fr</span></a> - Tél: 06 03 69 51 79 - Adresse : 47 Résidence de l\'Aumônerie, 62830 Samer.</p><p>Identification de l\'entreprise : Entrepreneur individuel: Lhomme Aymeric au capital social de 0€ - SIREN : 890829906 - Adresse postale : 47 Résidence de l\'Aumônerie, 62830 Samer.</p><p>Directeur de la publication : Lhomme Aymeric - Contact : <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"mailto:contact@aymericlhomme.fr\\\"><span style=\\\"color: var(--contrast)\\\">contact@aymericlhomme.fr</span></a>.</p><p>Hébergeur : <strong>o2switch</strong> - <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.o2switch.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.o2switch.fr</span></strong></a> - Tél: 04 44 44 60 40</p><p>Délégué à la protection des données : Lhomme Aymeric - <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"mailto:contact@aymericlhomme.fr\\\"><span style=\\\"color: var(--contrast)\\\">contact@aymericlhomme.fr</span></a></p>\",\n    \"buttons\": [],\n    \"padding\": 2,\n    \"backgroundColor\": \"\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--contrast)\",\n    \"textColor\": \"var(--color-dark)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"hero\"\n  },\n  {\n    \"title\": \"2 - Propriété intellectuelle et contrefaçons\",\n    \"titleAlign\": \"left\",\n    \"content\": \"<p>Entrepreneur individuel: Lhomme Aymeric est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.</p><p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Entrepreneur individuel: Lhomme Aymeric.</p><p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>\",\n    \"buttons\": [],\n    \"padding\": 2,\n    \"backgroundColor\": \"\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--contrast)\",\n    \"textColor\": \"var(--color-dark)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"hero\"\n  },\n  {\n    \"title\": \"3 - Limitations de responsabilité\",\n    \"titleAlign\": \"left\",\n    \"content\": \"<p>Entrepreneur individuel: Lhomme Aymeric ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a>.</p><p>Entrepreneur individuel: Lhomme Aymeric décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a>.</p><p>Entrepreneur individuel: Lhomme Aymeric s’engage à sécuriser au mieux le site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a>, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.</p><p>Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. Entrepreneur individuel: Lhomme Aymeric se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.</p><p>Le cas échéant, Entrepreneur individuel: Lhomme Aymeric se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>\",\n    \"buttons\": [],\n    \"padding\": 2,\n    \"backgroundColor\": \"\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--contrast)\",\n    \"textColor\": \"var(--color-dark)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"hero\"\n  },\n  {\n    \"title\": \"4 - CNIL et gestion des données personnelles\",\n    \"titleAlign\": \"left\",\n    \"content\": \"<p>Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a> dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : Lhomme Aymeric - <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"mailto:contact@aymericlhomme.fr\\\"><span style=\\\"color: var(--contrast)\\\">contact@aymericlhomme.fr</span></a>.</p><p>Pour plus d\'informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire ...), lisez notre Politique de Confidentialité.</p><p>Il est également possible de déposer une réclamation auprès de la CNIL.</p>\",\n    \"buttons\": [],\n    \"padding\": 2,\n    \"backgroundColor\": \"\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--contrast)\",\n    \"textColor\": \"var(--color-dark)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"hero\"\n  },\n  {\n    \"title\": \"5 - Liens hypertextes et cookies\",\n    \"titleAlign\": \"left\",\n    \"content\": \"<p>Le site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a> contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a>.</p><p>La navigation sur le site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.</p><p>Un \\\"cookie\\\" est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d\'obtenir des mesures de fréquentation, par exemple.</p><p>Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.</p><p>Les cookies sont enregistrés pour une durée maximale d\'un mois.</p><p>Pour plus d\'informations sur la façon dont nous faisons usage des cookies, lisez notre Politique de Confidentialité.</p>\",\n    \"buttons\": [],\n    \"padding\": 2,\n    \"backgroundColor\": \"\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--contrast)\",\n    \"textColor\": \"var(--color-dark)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"hero\"\n  },\n  {\n    \"title\": \"6 - Droit applicable et attribution de juridiction\",\n    \"titleAlign\": \"left\",\n    \"content\": \"<p>Tout litige en relation avec l’utilisation du site <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.aymericlhomme.fr\\\"><strong><span style=\\\"color: var(--contrast)\\\">https://www.aymericlhomme.fr</span></strong></a> est soumis au droit français.</p>\",\n    \"buttons\": [],\n    \"padding\": 2,\n    \"backgroundColor\": \"\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--contrast)\",\n    \"textColor\": \"var(--color-dark)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"hero\"\n  }\n]',1,'page',1,'2023-04-27 15:23:51','2023-04-27 15:24:37',NULL,NULL),
(16,'Souvenir d\'Instant','souvenir-d-instant','Développement sur mesure d\'une boutique Wordpress pour la vente d\'objets personnalisables','[\r\n  {\r\n    \"padding\": 2,\r\n    \"backgroundColor\": \"var(--color-light)\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"article-header\"\r\n  },\r\n  {\r\n    \"mainImage\": 20,\r\n    \"secondaryImage\": 23,\r\n    \"title\": \"Intégration & Développement WordPress\",\r\n    \"textAtLeft\": \"<p>Ce projet est une création d\'une boutique en ligne afin de proposé à la vente des produits en bois personnalisable par les client de l\'entreprise Souvenir d\'Instant. La boutique à été réalisée grâce au CMS <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://wordpress.org/\\\"><strong>Wordpress</strong></a>, en créant un thème sur mesure.</p>\",\r\n    \"textAtRight\": \"<p>Avant tout, il a fallut créer une maquette en fonction du brand-board fourni par le client. La maquette à été réalisée grâce à l\'outil de prototypage <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://figma.com\\\"><strong>Figma</strong></a> et est disponible <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://www.figma.com/file/od1r2wgQl1hRwX92r7TrUw/Souvenir-d-instant?node-id=0%3A1\\\"><strong>ici</strong></a>.</p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"blog-layout\",\r\n    \"invertingImages\": false\r\n  },\r\n  {\r\n    \"mainImage\": 22,\r\n    \"secondaryImage\": 24,\r\n    \"title\": \"Un espace de vente\",\r\n    \"textAtLeft\": \"<p>Afin de créer un espace de vente, j\'ai utilisé le plugin <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://woocommerce.com/\\\"><strong>Woocommerce</strong></a>. Après avoir configuré le module, puis modifié le design de ce dernier en fonction de la maquette, la partie e-commerce du site était prête.</p>\",\r\n    \"textAtRight\": \"<p>Le client souhaitant pouvoir fournir une prévisualisation en temps réel de l\'objet personnalisable, il a fallut trouver une solution afin d\'intégrer cette fonctionnalité à <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://woocommerce.com/\\\"><strong>Woocommerce</strong></a>. Pour cela, j\'ai utilisé un plugin proposé par la société <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"http://Zakeke.com\\\"><strong>Zakeke.com</strong></a>. Ce dernier permet d\'ajouter un éditeur permettant d\'effectuer sa personnalisation, d\'exporter ou de partager la personnalisation et d\'ajouter la personnalisation au panier.</p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"blog-layout\",\r\n    \"invertingImages\": true\r\n  },\r\n  {\r\n    \"mainImage\": 26,\r\n    \"secondaryImage\": 21,\r\n    \"title\": \"Un espace photo\",\r\n    \"textAtLeft\": \"<p>En plus d\'un site de vente, <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://souvenirdinstant.fr/\\\"><strong>Souvenir d\'Instant</strong></a> souhaitait pouvoir proposer ses services en tant que photographe. L\'espace photo permet de mettre en avant certaines images choisi par <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://souvenirdinstant.fr/\\\"><strong>Souvenir d\'Instant</strong></a> ainsi que de proposer ses services et tarifs.</p>\",\r\n    \"textAtRight\": \"<p>De plus, un espace privé pour chaque client doit être disponible afin que <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\" href=\\\"https://souvenirdinstant.fr/\\\"><strong>Souvenir d\'Instant</strong></a> puisse mettre en ligne les différentes photos réalisées lors des différents événements.</p>\",\r\n    \"padding\": 4,\r\n    \"backgroundColor\": \"\",\r\n    \"backgroundDesktop\": \"\",\r\n    \"backgroundMobile\": \"\",\r\n    \"titleColor\": \"var(--contrast)\",\r\n    \"textColor\": \"var(--color-dark)\",\r\n    \"backgroundSize\": \"\",\r\n    \"backgroundRepeat\": \"\",\r\n    \"backgroundXPosition\": \"\",\r\n    \"backgroundYPosition\": \"\",\r\n    \"_name\": \"blog-layout\",\r\n    \"invertingImages\": false\r\n  }\r\n]',1,'blog',1,'2023-04-27 15:24:23','2023-04-29 13:48:31',1,20),
(19,'Contact','contact',NULL,'[\n  {\n    \"title\": \"Me contacter\",\n    \"padding\": 2,\n    \"backgroundColor\": \"var(--color-light)\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--color-1)\",\n    \"textColor\": \"var(--color-dark)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"page-header\"\n  },\n  {\n    \"fields\": [\n      {\n        \"label\": \"Votre nom\",\n        \"name\": \"name\",\n        \"type\": \"\",\n        \"full\": false,\n        \"required\": true\n      },\n      {\n        \"label\": \"Votre e-mail\",\n        \"name\": \"email\",\n        \"type\": \"input\",\n        \"full\": false,\n        \"required\": true\n      },\n      {\n        \"label\": \"Votre message\",\n        \"name\": \"content\",\n        \"type\": \"textarea\",\n        \"full\": true,\n        \"required\": true\n      }\n    ],\n    \"padding\": 4,\n    \"backgroundColor\": \"\",\n    \"backgroundDesktop\": \"\",\n    \"backgroundMobile\": \"\",\n    \"titleColor\": \"var(--contrast)\",\n    \"textColor\": \"var(--color-dark)\",\n    \"backgroundSize\": \"\",\n    \"backgroundRepeat\": \"\",\n    \"backgroundXPosition\": \"\",\n    \"backgroundYPosition\": \"\",\n    \"_name\": \"contact-form\"\n  }\n]',1,'page',1,'2023-04-28 17:56:06','2023-04-28 17:56:06',NULL,NULL),
(22,'rererere','rerere',NULL,'[]',1,'page',1,'2023-05-08 14:11:15','2023-05-08 14:11:15',NULL,NULL),
(23,'reeeeeeeee','reeeeeee',NULL,'[]',1,'page',1,'2023-05-08 14:11:23','2023-05-08 14:11:23',NULL,NULL),
(24,'reree','reree',NULL,'[]',1,'page',1,'2023-05-08 14:11:33','2023-05-08 14:11:33',NULL,NULL);
/*!40000 ALTER TABLE `contents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES
(3,'default','{\"uuid\":\"0ca6e5ac-ab74-4013-8237-5bf3279a04ef\",\"displayName\":\"Laravel\\\\Scout\\\\Jobs\\\\MakeSearchable\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Laravel\\\\Scout\\\\Jobs\\\\MakeSearchable\",\"command\":\"O:33:\\\"Laravel\\\\Scout\\\\Jobs\\\\MakeSearchable\\\":2:{s:6:\\\"models\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":5:{s:5:\\\"class\\\";s:18:\\\"App\\\\Models\\\\Content\\\";s:2:\\\"id\\\";a:1:{i:0;i:25;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";s:15:\\\"collectionClass\\\";N;}s:10:\\\"connection\\\";s:8:\\\"database\\\";}\"}}',0,NULL,1683641343,1683641343),
(4,'default','{\"uuid\":\"7f1c92d0-750a-4fbd-9eb5-858f00571b88\",\"displayName\":\"Laravel\\\\Scout\\\\Jobs\\\\RemoveFromSearch\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Laravel\\\\Scout\\\\Jobs\\\\RemoveFromSearch\",\"command\":\"O:35:\\\"Laravel\\\\Scout\\\\Jobs\\\\RemoveFromSearch\\\":2:{s:6:\\\"models\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":5:{s:5:\\\"class\\\";s:18:\\\"App\\\\Models\\\\Content\\\";s:2:\\\"id\\\";a:1:{i:0;i:25;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";s:15:\\\"collectionClass\\\";s:44:\\\"Laravel\\\\Scout\\\\Jobs\\\\RemoveableScoutCollection\\\";}s:10:\\\"connection\\\";s:8:\\\"database\\\";}\"}}',0,NULL,1683641368,1683641368);
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES
(1,'2014_10_12_000000_create_users_table',1),
(2,'2014_10_12_100000_create_password_reset_tokens_table',1),
(3,'2019_08_19_000000_create_failed_jobs_table',1),
(4,'2019_12_14_000001_create_personal_access_tokens_table',1),
(5,'2023_04_25_205049_create_contents_table',1),
(6,'2023_04_25_213551_create_categories_table',1),
(7,'2023_04_25_220454_create_tags_table',1),
(9,'2023_04_26_175806_create_attachments_table',2),
(10,'2023_04_27_113407_create_options_table',3),
(11,'2023_05_06_132138_create_permission_tables',4),
(12,'2023_05_07_195416_add_status_to_users_table',5),
(13,'2023_05_08_182535_create_contact_requests_table',6),
(14,'2023_05_08_204337_create_jobs_table',7);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_permissions`
--

DROP TABLE IF EXISTS `model_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_permissions`
--

LOCK TABLES `model_has_permissions` WRITE;
/*!40000 ALTER TABLE `model_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `model_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_roles`
--

DROP TABLE IF EXISTS `model_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) unsigned NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_roles`
--

LOCK TABLES `model_has_roles` WRITE;
/*!40000 ALTER TABLE `model_has_roles` DISABLE KEYS */;
INSERT INTO `model_has_roles` VALUES
(1,'App\\Models\\User',1),
(2,'App\\Models\\User',3);
/*!40000 ALTER TABLE `model_has_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `options`
--

DROP TABLE IF EXISTS `options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `options` (
  `key` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `options`
--

LOCK TABLES `options` WRITE;
/*!40000 ALTER TABLE `options` DISABLE KEYS */;
INSERT INTO `options` VALUES
('blog','Choisir une option','2023-04-27 14:21:35','2023-05-12 19:52:26'),
('contact-email','contact@aymericlhomme.fr','2023-04-27 14:23:36','2023-04-27 14:23:36'),
('description','Je suis développeur web en Freelance. Je propose des prestations pour créer et développer votre site internet. N\'hésitez plus!','2023-04-27 14:18:18','2023-04-27 14:18:18'),
('facebook','https://www.facebook.com/aymeric.62830','2023-04-27 14:22:17','2023-04-27 14:22:17'),
('favicon','10','2023-04-27 14:19:53','2023-04-27 13:34:45'),
('footer','3','2023-04-27 14:21:11','2023-04-27 14:21:11'),
('header','2','2023-04-27 14:20:55','2023-04-27 14:20:55'),
('homepage','5','2023-04-27 14:20:24','2023-04-27 12:59:47'),
('instagram','https://www.instagram.com/aymericlhomme','2023-04-27 14:22:17','2023-04-27 14:22:17'),
('linkedin','https://www.linkedin.com/in/aymeric-lhomme-39148a195','2023-04-27 14:22:17','2023-04-27 14:22:17'),
('logo','9','2023-04-27 14:18:55','2023-04-27 13:34:40'),
('noreply-email','noreply@aymericlhomme.fr','2023-04-27 14:23:54','2023-04-27 14:23:54'),
('sav-email','sav@aymericlhomme.fr','2023-04-27 14:24:17','2023-04-27 14:24:17'),
('sitename','Lhomme Aymeric','2023-04-27 14:17:18','2023-04-27 13:31:38'),
('theme','aymericlhomme','2023-04-27 14:24:46','2023-04-27 13:32:02'),
('twitter','https://twitter.com/AymericLhomme','2023-04-27 14:22:17','2023-04-27 14:22:17');
/*!40000 ALTER TABLE `options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES
(1,'role-list','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(2,'role-create','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(3,'role-edit','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(4,'role-delete','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(5,'content-list','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(6,'content-create','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(7,'content-edit','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(8,'content-delete','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(9,'access-administration','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(10,'option-list','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(11,'option-edit','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(12,'category-list','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(13,'category-create','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(14,'category-edit','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(15,'category-delete','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(16,'tag-list','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(17,'tag-create','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(18,'tag-edit','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(19,'tag-delete','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(20,'user-list','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(21,'user-create','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(22,'user-edit','web','2023-05-06 13:46:11','2023-05-06 13:46:11'),
(23,'user-delete','web','2023-05-06 13:46:11','2023-05-06 13:46:11');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_has_permissions`
--

DROP TABLE IF EXISTS `role_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_has_permissions`
--

LOCK TABLES `role_has_permissions` WRITE;
/*!40000 ALTER TABLE `role_has_permissions` DISABLE KEYS */;
INSERT INTO `role_has_permissions` VALUES
(1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(5,2),
(6,1),
(6,2),
(7,1),
(7,2),
(8,1),
(8,2),
(9,1),
(9,2),
(10,1),
(11,1),
(12,1),
(12,2),
(13,1),
(13,2),
(14,1),
(14,2),
(15,1),
(15,2),
(16,1),
(16,2),
(17,1),
(17,2),
(18,1),
(18,2),
(19,1),
(19,2),
(20,1),
(21,1),
(22,1),
(23,1);
/*!40000 ALTER TABLE `role_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES
(1,'Administrateur','web','2023-05-06 13:47:11','2023-05-06 13:47:11'),
(2,'Editeur','web','2023-05-07 21:27:42','2023-05-07 21:27:42');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `visible` tinyint(1) NOT NULL,
  `tag_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tags_slug_unique` (`slug`),
  KEY `tags_tag_id_foreign` (`tag_id`),
  CONSTRAINT `tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES
(1,'CMS','cms',NULL,1,1,NULL,'2023-05-07 16:15:08','2023-05-07 16:15:08'),
(2,'Framework','framework',NULL,2,1,NULL,'2023-05-07 16:15:08','2023-05-07 16:15:08'),
(3,'Wordpress','wordpress',NULL,1,1,1,'2023-05-07 16:15:08','2023-05-07 16:15:08'),
(4,'React','react',NULL,4,1,2,'2023-05-07 16:15:08','2023-05-07 15:33:46'),
(5,'NextJS','nextjs',NULL,3,1,2,'2023-05-07 16:15:08','2023-05-07 15:33:46'),
(6,'Symfony','symfony',NULL,1,1,2,'2023-05-07 16:15:08','2023-05-07 15:34:57'),
(7,'Service','service',NULL,3,1,NULL,'2023-05-07 16:15:08','2023-05-07 16:15:08'),
(8,'Intégration','integration',NULL,1,1,7,'2023-05-07 16:15:08','2023-05-07 16:15:08'),
(9,'Refonte','refonte',NULL,2,1,7,'2023-05-07 16:15:08','2023-05-07 16:15:08'),
(10,'Laravel','laravel',NULL,2,1,2,'2023-05-07 15:33:39','2023-05-07 15:33:46');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'HeinTouchable','aymericlhomme@orange.fr','2023-05-06 19:35:47','$2y$10$PuLWOg4BlBtLSv3G6TELjODnD.BbtC9zYrw7Dx0e4NXWZG/uN0LX2','FmKbugXK8vixr1cIogvYCiAhupiGiSkwE8TXahUwNKOSBNxXFxNRTNoqkxtf','2023-04-26 12:06:41','2023-05-06 19:35:47',1),
(3,'test','test@local.fr','2023-05-06 17:36:37','$2y$10$nnT/k6CKPEGxoeQJowLPqOKSeuYVTzCaPKVKqwMH6jpaQkF.pLKLK','4Rj0aIl68PoWNPdxOxoaaIS71lqdwFQfixkBaRO8Jc8hBNnQLXF0dvhRMFO6','2023-05-06 15:30:38','2023-05-07 21:44:52',1),
(4,'test','test1@local.fr','2023-05-07 20:55:43','$2y$10$aBWxDNqk1yJA1xXe4awecOOOM8OzmOGz7YwvHdOHdbal0VYa77cxS',NULL,'2023-05-06 18:49:51','2023-05-07 20:55:43',0),
(5,'bite@local.fr','bite@local.fr','2023-05-07 22:14:32','$2y$10$xFqkixpuEEtOz5s381Ovpu5tr09AQxKmovYGQvY0to45w3D9.Rlom',NULL,'2023-05-07 22:10:19','2023-05-07 22:14:32',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-12 20:11:46

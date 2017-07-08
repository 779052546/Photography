/*
SQLyog Ultimate v11.27 (32 bit)
MySQL - 10.1.21-MariaDB : Database - tata
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`tata` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `tata`;

/*Table structure for table `custom` */

DROP TABLE IF EXISTS `custom`;

CREATE TABLE `custom` (
  `name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sheying` int(1) DEFAULT NULL,
  `zaoxing` int(1) DEFAULT NULL,
  `fuwu` int(1) DEFAULT NULL,
  `conment` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` varchar(8) COLLATE utf8_unicode_ci DEFAULT NULL,
  `head` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id` int(8) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `custom` */

insert  into `custom`(`name`,`sheying`,`zaoxing`,`fuwu`,`conment`,`price`,`head`,`id`) values ('梦x',1,1,1,'2312312312341323123123','8875345元','头像',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

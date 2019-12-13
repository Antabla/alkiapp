--
-- Database: `alkiapp_db`
--

CREATE DATABASE IF NOT EXISTS `alkiapp_db`;
USE `alkiapp_db`;


-- ENTITIES

--
-- Struttura della tabella `home`
--

CREATE TABLE IF NOT EXISTS `home` (
	`address` varchar(130)  NOT NULL,
	`available` int  NOT NULL,
	`bathrooms` int  NOT NULL,
	`city` varchar(130)  NOT NULL,
	`description` varchar(130) ,
	`images` varchar(130)  NOT NULL,
	`internet` int  NOT NULL,
	`onlyfor` int  NOT NULL,
	`owner` int  NOT NULL,
	`price` int  NOT NULL,
	`rooms` int  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `lessee`
--

CREATE TABLE IF NOT EXISTS `lessee` (
	`email` varchar(130)  NOT NULL,
	`iduser` int  NOT NULL,
	`lastname` varchar(130)  NOT NULL,
	`name` varchar(130)  NOT NULL,
	`phone` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `rental`
--

CREATE TABLE IF NOT EXISTS `rental` (
	`idhome` int  NOT NULL,
	`idstudent` int  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `student`
--

CREATE TABLE IF NOT EXISTS `student` (
	`email` varchar(130)  NOT NULL,
	`iduser` int  NOT NULL,
	`lastname` varchar(130)  NOT NULL,
	`name` varchar(130)  NOT NULL,
	`phone` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `alkiapp_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `alkiapp_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);







-- --------------------------------------------------------
-- Host:                         us-cdbr-iron-east-01.cleardb.net
-- Versión del servidor:         5.5.56-log - MySQL Community Server (GPL)
-- SO del servidor:              Linux
-- HeidiSQL Versión:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para heroku_b8b282901e0c5f8
CREATE DATABASE IF NOT EXISTS `heroku_b8b282901e0c5f8` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `heroku_b8b282901e0c5f8`;

-- Volcando estructura para tabla heroku_b8b282901e0c5f8.boletos
CREATE TABLE IF NOT EXISTS `boletos` (
  `idBoleto` varchar(100) NOT NULL,
  `idPersona` int(11) NOT NULL,
  PRIMARY KEY (`idBoleto`),
  KEY `idPersona` (`idPersona`),
  CONSTRAINT `idPersona` FOREIGN KEY (`idPersona`) REFERENCES `registrados` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla heroku_b8b282901e0c5f8.registrados
CREATE TABLE IF NOT EXISTS `registrados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL DEFAULT '0',
  `apellido` varchar(100) NOT NULL DEFAULT '0',
  `ubicacion` varchar(100) NOT NULL DEFAULT '0',
  `email` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla heroku_b8b282901e0c5f8.verificados
CREATE TABLE IF NOT EXISTS `verificados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idBoleto` varchar(100) NOT NULL,
  `fechaRegistro` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idBoleto` (`idBoleto`),
  CONSTRAINT `idBoleto` FOREIGN KEY (`idBoleto`) REFERENCES `boletos` (`idBoleto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 22/07/2024 às 10:18
-- Versão do servidor: 8.3.0
-- Versão do PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `e_commerce`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `is_admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `is_admin`) VALUES
(1, 'samuel', 'samuel@samuel', '$2y$10$jq2pfI7sjg7EHFI9mMjj.OrZJh.1bqEt0AlGXJ564BmQpviQmSxlG', 1),
(2, 'samuel2', 'samuel2@samuel2', '$2y$10$VxhU3b6AIBOgJUFD9u2RlOs62W0Q/6qAe0e343MOhod3Ov/TFZRJ6', 0),
(3, 'lucas', 'lucaspenaprado.bh@gmail.com', '$2y$10$KOlxSjNERbWnrd09tQciqeE2brAh3uOEsZvYWaglh4uph9Ahnk6q6', 0),
(4, 'lucas2', 'lucaspenaprado.bh2@gmail.com', '$2y$10$jlx/15IoxLYBEAs9c0bxCewBITv6MM1jotihwnb7SJSPS5rgtsosW', 0),
(5, 'test', 'test@gmail', '$2y$10$yvEThN1jPIhyHnmUdXelGemsu8MWcKci7wjmbaC6tY5oSQK62SOuy', 0),
(6, 'test2', 'test@test', '$2y$10$8nXdvGGkqZXhVvOzveTcbOY68ahCE5vtNRQ4Wu8uaPysdJxr3Gswu', 0),
(7, 'sim', 'sim@sim', '$2y$10$jCLR.W2UGUjBDN6lSrOLS.m9ouL.hsJq8.jrmrdlX71t81uKtnS0u', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

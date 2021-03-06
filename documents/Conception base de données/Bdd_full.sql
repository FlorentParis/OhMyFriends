-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 14 juin 2021 à 14:50
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ohmyfriends`
--

-- --------------------------------------------------------

--
-- Structure de la table `episodes`
--

DROP TABLE IF EXISTS `episodes`;
CREATE TABLE IF NOT EXISTS `episodes` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `date_diffusion` date NOT NULL,
  `audience` int(11) NOT NULL,
  `id_saison` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `episodes_id_saison_foreign` (`id_saison`)
) ENGINE=MyISAM AUTO_INCREMENT=237 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `episodes`
--

INSERT INTO `episodes` (`id`, `date_diffusion`, `audience`, `id_saison`) VALUES
(1, '1994-09-22', 21500000, 1),
(2, '1994-09-29', 20000000, 1),
(3, '1994-10-06', 19100000, 1),
(4, '1994-10-13', 19100000, 1),
(5, '1994-10-20', 18100000, 1),
(6, '1994-10-27', 18000000, 1),
(7, '1994-11-03', 23100000, 1),
(8, '1994-11-10', 21100000, 1),
(9, '1994-11-17', 23100000, 1),
(10, '1994-12-15', 19900000, 1),
(11, '1995-01-05', 26600000, 1),
(12, '1995-01-12', 24000000, 1),
(13, '1995-01-19', 25800000, 1),
(14, '1995-02-09', 23800000, 1),
(15, '1995-02-16', 24800000, 1),
(16, '1995-02-23', 26100000, 1),
(17, '1995-02-23', 30500000, 1),
(18, '1995-03-02', 30400000, 1),
(19, '1995-03-09', 29400000, 1),
(20, '1995-04-06', 30000000, 1),
(21, '1995-04-27', 28400000, 1),
(22, '1995-05-04', 29900000, 1),
(23, '1995-05-11', 28700000, 1),
(24, '1995-05-18', 31300000, 1),
(25, '1995-09-21', 30100000, 2),
(26, '1995-09-28', 29800000, 2),
(27, '1995-10-05', 30200000, 2),
(28, '1995-10-12', 28100000, 2),
(29, '1995-10-19', 28300000, 2),
(30, '1995-11-02', 30200000, 2),
(31, '1995-11-09', 30500000, 2),
(32, '1995-11-16', 32900000, 2),
(33, '1995-12-15', 27800000, 2),
(34, '1996-01-04', 32200000, 2),
(35, '1996-01-18', 31600000, 2),
(36, '1996-01-28', 52900000, 2),
(37, '1996-01-28', 52900000, 2),
(38, '1996-02-01', 33600000, 2),
(39, '1996-02-08', 32900000, 2),
(40, '1996-02-15', 31100000, 2),
(41, '1996-02-22', 30200000, 2),
(42, '1996-03-21', 30100000, 2),
(43, '1996-03-28', 31200000, 2),
(44, '1996-04-04', 27400000, 2),
(45, '1996-04-25', 24700000, 2),
(46, '1996-05-02', 25500000, 2),
(47, '1996-05-09', 26100000, 2),
(48, '1996-05-16', 29000000, 2),
(49, '1996-09-19', 26800000, 3),
(50, '1996-09-26', 26700000, 3),
(51, '1996-10-03', 25200000, 3),
(52, '1996-10-10', 26100000, 3),
(53, '1996-10-17', 23300000, 3),
(54, '1996-10-31', 23300000, 3),
(55, '1996-11-07', 27400000, 3),
(56, '1996-11-14', 28700000, 3),
(57, '1996-11-21', 29300000, 3),
(58, '1996-12-12', 25100000, 3),
(59, '1997-01-09', 29800000, 3),
(60, '1997-01-16', 29600000, 3),
(61, '1997-01-30', 28000000, 3),
(62, '1997-02-06', 28900000, 3),
(63, '1997-02-13', 27300000, 3),
(64, '1997-02-20', 28300000, 3),
(65, '1997-03-03', 25800000, 3),
(66, '1997-03-13', 28100000, 3),
(67, '1997-03-27', 23700000, 3),
(68, '1997-04-10', 24400000, 3),
(69, '1997-04-17', 23200000, 3),
(70, '1997-04-24', 22600000, 3),
(71, '1997-05-01', 24200000, 3),
(72, '1997-05-08', 23100000, 3),
(73, '1997-05-15', 28800000, 3),
(74, '1997-09-25', 29400000, 4),
(75, '1997-10-02', 25500000, 4),
(76, '1997-10-09', 24000000, 4),
(77, '1997-10-16', 24300000, 4),
(78, '1997-10-30', 24400000, 4),
(79, '1997-11-06', 25700000, 4),
(80, '1997-11-13', 26400000, 4),
(81, '1997-11-20', 26800000, 4),
(82, '1997-12-11', 23900000, 4),
(83, '1997-12-18', 23200000, 4),
(84, '1998-01-08', 23700000, 4),
(85, '1998-01-15', 27100000, 4),
(86, '1998-01-29', 25300000, 4),
(87, '1998-02-05', 25100000, 4),
(88, '1998-02-26', 24400000, 4),
(89, '1998-03-19', 23100000, 4),
(90, '1998-03-26', 23200000, 4),
(91, '1998-04-02', 21700000, 4),
(92, '1998-04-09', 21800000, 4),
(93, '1998-04-16', 21900000, 4),
(94, '1998-04-23', 21500000, 4),
(95, '1998-04-30', 23200000, 4),
(96, '1998-05-07', 31600000, 4),
(97, '1998-05-07', 31600000, 4),
(98, '1998-09-24', 31100000, 5),
(99, '1998-10-01', 25400000, 5),
(100, '1998-10-08', 26800000, 5),
(101, '1998-10-15', 24100000, 5),
(102, '1998-10-29', 25900000, 5),
(103, '1998-11-05', 25000000, 5),
(104, '1998-11-12', 24400000, 5),
(105, '1998-11-19', 23900000, 5),
(106, '1998-12-10', 23000000, 5),
(107, '1998-12-17', 23700000, 5),
(108, '1999-01-07', 27000000, 5),
(109, '1999-01-21', 24800000, 5),
(110, '1999-02-04', 24900000, 5),
(111, '1999-02-11', 27700000, 5),
(112, '1999-02-18', 29300000, 5),
(113, '1999-02-25', 26000000, 5),
(114, '1999-03-18', 24500000, 5),
(115, '1999-04-08', 21900000, 5),
(116, '1999-04-22', 20900000, 5),
(117, '1999-04-29', 19600000, 5),
(118, '1999-05-06', 20900000, 5),
(119, '1999-05-13', 21300000, 5),
(120, '1999-05-20', 25900000, 5),
(121, '1999-05-20', 25900000, 5),
(122, '1999-09-23', 27700000, 6),
(123, '1999-09-30', 22900000, 6),
(124, '1999-10-07', 21600000, 6),
(125, '1999-10-14', 21100000, 6),
(126, '1999-10-21', 22400000, 6),
(127, '1999-11-04', 23600000, 6),
(128, '1999-11-11', 22700000, 6),
(129, '1999-11-18', 22100000, 6),
(130, '1999-11-25', 19200000, 6),
(131, '1999-12-16', 22400000, 6),
(132, '2000-01-06', 22300000, 6),
(133, '2000-01-13', 22300000, 6),
(134, '2000-02-03', 24100000, 6),
(135, '2000-02-10', 23800000, 6),
(136, '2000-02-17', 20700000, 6),
(137, '2000-02-17', 20700000, 6),
(138, '2000-02-24', 22100000, 6),
(139, '2000-03-09', 20500000, 6),
(140, '2000-03-23', 21500000, 6),
(141, '2000-04-13', 18800000, 6),
(142, '2000-04-27', 20900000, 6),
(143, '2000-05-04', 20000000, 6),
(144, '2000-05-11', 20900000, 6),
(145, '2000-05-18', 30700000, 6),
(146, '2000-05-18', 30700000, 6),
(147, '2000-10-12', 25540000, 7),
(148, '2000-10-12', 27930000, 7),
(149, '2000-10-19', 22700000, 7),
(150, '2000-10-26', 22660000, 7),
(151, '2000-11-02', 24430000, 7),
(152, '2000-11-09', 22010000, 7),
(153, '2000-11-16', 23730000, 7),
(154, '2000-11-23', 16570000, 7),
(155, '2000-12-07', 21080000, 7),
(156, '2000-12-14', 23260000, 7),
(157, '2001-01-04', 24370000, 7),
(158, '2001-01-11', 22860000, 7),
(159, '2001-02-01', 22240000, 7),
(160, '2001-02-08', 22400000, 7),
(161, '2001-02-15', 21750000, 7),
(162, '2001-02-22', 21220000, 7),
(163, '2001-03-15', 20840000, 7),
(164, '2001-03-29', 17810000, 7),
(165, '2001-04-19', 16550000, 7),
(166, '2001-04-26', 16300000, 7),
(167, '2001-05-03', 15650000, 7),
(168, '2001-05-10', 17230000, 7),
(169, '2001-05-17', 30050000, 7),
(170, '2001-05-17', 30050000, 7),
(171, '2001-09-27', 31700000, 8),
(172, '2001-10-04', 30040000, 8),
(173, '2001-10-11', 29200000, 8),
(174, '2001-10-18', 25580000, 8),
(175, '2001-10-25', 25640000, 8),
(176, '2001-11-01', 26960000, 8),
(177, '2001-11-08', 24240000, 8),
(178, '2001-11-15', 26540000, 8),
(179, '2001-11-22', 24240000, 8),
(180, '2001-12-06', 22440000, 8),
(181, '2001-12-13', 23850000, 8),
(182, '2002-01-10', 25530000, 8),
(183, '2002-01-17', 29240000, 8),
(184, '2002-01-31', 28640000, 8),
(185, '2002-02-07', 28640000, 8),
(186, '2002-02-28', 27520000, 8),
(187, '2002-03-07', 26300000, 8),
(188, '2002-03-28', 22050000, 8),
(189, '2002-04-04', 22590000, 8),
(190, '2002-04-25', 22240000, 8),
(191, '2002-05-02', 23970000, 8),
(192, '2002-05-09', 24320000, 8),
(193, '2002-05-16', 34910000, 8),
(194, '2002-05-16', 34910000, 8),
(195, '2002-09-26', 34010000, 9),
(196, '2002-10-03', 28930000, 9),
(197, '2002-10-10', 26630000, 9),
(198, '2002-10-17', 25820000, 9),
(199, '2002-10-31', 24460000, 9),
(200, '2002-11-07', 27510000, 9),
(201, '2002-11-14', 25350000, 9),
(202, '2002-11-21', 26760000, 9),
(203, '2002-12-05', 25430000, 9),
(204, '2002-12-12', 22290000, 9),
(205, '2003-01-09', 23670000, 9),
(206, '2003-01-16', 23660000, 9),
(207, '2003-01-30', 25820000, 9),
(208, '2003-02-06', 23370000, 9),
(209, '2003-02-13', 20850000, 9),
(210, '2003-02-20', 19520000, 9),
(211, '2003-03-13', 21000000, 9),
(212, '2003-04-03', 20790000, 9),
(213, '2003-04-17', 18250000, 9),
(214, '2003-04-24', 20710000, 9),
(215, '2003-05-01', 19030000, 9),
(216, '2003-05-08', 19550000, 9),
(217, '2003-05-15', 25490000, 9),
(218, '2003-05-15', 25490000, 9),
(219, '2003-09-25', 24540000, 10),
(220, '2003-10-02', 22380000, 10),
(221, '2003-10-09', 21870000, 10),
(222, '2003-10-23', 18770000, 10),
(223, '2003-10-30', 19370000, 10),
(224, '2003-11-06', 20380000, 10),
(225, '2003-11-13', 20210000, 10),
(226, '2003-11-20', 20660000, 10),
(227, '2004-01-08', 25490000, 10),
(228, '2004-01-15', 26680000, 10),
(229, '2004-02-05', 24910000, 10),
(230, '2004-02-12', 25900000, 10),
(231, '2004-02-19', 24270000, 10),
(232, '2004-02-26', 22830000, 10),
(233, '2004-04-22', 22640000, 10),
(234, '2004-04-29', 24510000, 10),
(235, '2004-05-06', 36890000, 10),
(236, '2004-05-06', 52460000, 10);

-- --------------------------------------------------------

--
-- Structure de la table `livres`
--

DROP TABLE IF EXISTS `livres`;
CREATE TABLE IF NOT EXISTS `livres` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `annee` int(11) NOT NULL,
  `omg_count` int(11) NOT NULL,
  `omg_total` int(11) NOT NULL,
  `id_source` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `livres_id_source_foreign` (`id_source`)
) ENGINE=MyISAM AUTO_INCREMENT=181 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `livres`
--

INSERT INTO `livres` (`id`, `annee`, `omg_count`, `omg_total`, `id_source`) VALUES
(1, 1990, 451, 2162578, 1),
(2, 1991, 602, 2264982, 1),
(3, 1992, 533, 2143292, 1),
(4, 1993, 705, 2549107, 1),
(5, 1994, 769, 2946133, 1),
(6, 1995, 937, 3377361, 1),
(7, 1996, 949, 2944803, 1),
(8, 1997, 870, 2941330, 1),
(9, 1998, 953, 2955752, 1),
(10, 1999, 1041, 2945180, 1),
(11, 2000, 1141, 2949068, 1),
(12, 2001, 1211, 2943236, 1),
(13, 2002, 1052, 2945424, 1),
(14, 2003, 1221, 2954728, 1),
(15, 2004, 1254, 2950484, 1),
(16, 2005, 1189, 2949107, 1),
(17, 2006, 1440, 2937420, 1),
(18, 2007, 1390, 2945973, 1),
(19, 2008, 1419, 2948703, 1),
(20, 2009, 1333, 2944607, 1),
(21, 2010, 1366, 2959238, 1),
(22, 2011, 1574, 2946734, 1),
(23, 2012, 1741, 2953379, 1),
(24, 2013, 1674, 2964866, 1),
(25, 2014, 1875, 2956653, 1),
(26, 2015, 1731, 2949057, 1),
(27, 2016, 1486, 2960554, 1),
(28, 2017, 1603, 2961956, 1),
(29, 2018, 1760, 2923590, 1),
(30, 2019, 1818, 2919359, 1),
(31, 1990, 0, 2994867, 2),
(32, 1991, 1, 3043900, 2),
(33, 1992, 0, 3027024, 2),
(34, 1993, 0, 3124076, 2),
(35, 1994, 1, 3046350, 2),
(36, 1995, 1, 3020408, 2),
(37, 1996, 0, 3103742, 2),
(38, 1997, 0, 3328617, 2),
(39, 1998, 4, 3094770, 2),
(40, 1999, 2, 3033896, 2),
(41, 2000, 1, 3085980, 2),
(42, 2001, 0, 2986544, 2),
(43, 2002, 1, 3067085, 2),
(44, 2003, 1, 3067767, 2),
(45, 2004, 0, 3041616, 2),
(46, 2005, 6, 2976006, 2),
(47, 2006, 3, 3054073, 2),
(48, 2007, 1, 3249638, 2),
(49, 2008, 3, 3016533, 2),
(50, 2009, 5, 2983726, 2),
(51, 2010, 2, 2877259, 2),
(52, 2011, 2, 3367013, 2),
(53, 2012, 0, 3304418, 2),
(54, 2013, 4, 2702711, 2),
(55, 2014, 4, 2630874, 2),
(56, 2015, 1, 2756971, 2),
(57, 2016, 1, 2954437, 2),
(58, 2017, 0, 3017392, 2),
(59, 2018, 2, 3124606, 2),
(60, 2019, 0, 3036621, 2),
(61, 1990, 59, 2957426, 3),
(62, 1991, 46, 3057283, 3),
(63, 1992, 35, 2859684, 3),
(64, 1993, 44, 2854359, 3),
(65, 1994, 57, 2811440, 3),
(66, 1995, 44, 2800259, 3),
(67, 1996, 59, 2738049, 3),
(68, 1997, 54, 2628802, 3),
(69, 1998, 55, 2763463, 3),
(70, 1999, 91, 3017650, 3),
(71, 2000, 63, 2873130, 3),
(72, 2001, 99, 2834357, 3),
(73, 2002, 56, 2749464, 3),
(74, 2003, 70, 3022169, 3),
(75, 2004, 83, 3003076, 3),
(76, 2005, 49, 2956459, 3),
(77, 2006, 58, 3008520, 3),
(78, 2007, 75, 2965886, 3),
(79, 2008, 45, 3036889, 3),
(80, 2009, 45, 2964375, 3),
(81, 2010, 44, 2854585, 3),
(82, 2011, 62, 3052122, 3),
(83, 2012, 79, 2831520, 3),
(84, 2013, 50, 3117706, 3),
(85, 2014, 50, 3040882, 3),
(86, 2015, 37, 3055801, 3),
(87, 2016, 39, 2376350, 3),
(88, 2017, 56, 2893267, 3),
(89, 2018, 66, 2994652, 3),
(90, 2019, 37, 2992909, 3),
(91, 1990, 4, 3066874, 4),
(92, 1991, 4, 3154789, 4),
(93, 1992, 8, 3201613, 4),
(94, 1993, 9, 3170868, 4),
(95, 1994, 10, 3213625, 4),
(96, 1995, 7, 3208946, 4),
(97, 1996, 10, 3228176, 4),
(98, 1997, 22, 3250228, 4),
(99, 1998, 16, 3272469, 4),
(100, 1999, 10, 3270365, 4),
(101, 2000, 24, 3272184, 4),
(102, 2001, 30, 3204722, 4),
(103, 2002, 15, 3221093, 4),
(104, 2003, 15, 3231273, 4),
(105, 2004, 23, 3233392, 4),
(106, 2005, 24, 3248609, 4),
(107, 2006, 25, 3208301, 4),
(108, 2007, 31, 3148671, 4),
(109, 2008, 24, 3185191, 4),
(110, 2009, 22, 2930685, 4),
(111, 2010, 30, 2828679, 4),
(112, 2011, 25, 3121137, 4),
(113, 2012, 33, 3214271, 4),
(114, 2013, 30, 3125999, 4),
(115, 2014, 25, 3177800, 4),
(116, 2015, 28, 3135059, 4),
(117, 2016, 19, 3026951, 4),
(118, 2017, 32, 3149398, 4),
(119, 2018, 29, 3104141, 4),
(120, 2019, 33, 3107638, 4),
(121, 1990, 7, 3025469, 5),
(122, 1991, 9, 3049204, 5),
(123, 1992, 6, 3027128, 5),
(124, 1993, 9, 3075512, 5),
(125, 1994, 5, 3068590, 5),
(126, 1995, 10, 3053070, 5),
(127, 1996, 10, 3034666, 5),
(128, 1997, 12, 3080535, 5),
(129, 1998, 15, 3059404, 5),
(130, 1999, 19, 3045376, 5),
(131, 2000, 20, 2991475, 5),
(132, 2001, 11, 3021111, 5),
(133, 2002, 24, 3052681, 5),
(134, 2003, 18, 3005438, 5),
(135, 2004, 24, 3049540, 5),
(136, 2005, 17, 3053104, 5),
(137, 2006, 18, 3055096, 5),
(138, 2007, 14, 2965401, 5),
(139, 2008, 22, 2980513, 5),
(140, 2009, 23, 2919690, 5),
(141, 2010, 14, 2637248, 5),
(142, 2011, 14, 2922935, 5),
(143, 2012, 14, 3076752, 5),
(144, 2013, 16, 3060563, 5),
(145, 2014, 19, 3089316, 5),
(146, 2015, 21, 3062340, 5),
(147, 2016, 18, 3048713, 5),
(148, 2017, 21, 3120232, 5),
(149, 2018, 21, 3115299, 5),
(150, 2019, 21, 3090623, 5),
(151, 1990, 25, 3142050, 6),
(152, 1991, 20, 3104134, 6),
(153, 1992, 60, 3231859, 6),
(154, 1993, 63, 3220522, 6),
(155, 1994, 72, 3217948, 6),
(156, 1995, 64, 3263085, 6),
(157, 1996, 125, 2957755, 6),
(158, 1997, 96, 2845896, 6),
(159, 1998, 103, 3234105, 6),
(160, 1999, 96, 3239311, 6),
(161, 2000, 56, 3275100, 6),
(162, 2001, 80, 2968883, 6),
(163, 2002, 102, 3218580, 6),
(164, 2003, 158, 3275778, 6),
(165, 2004, 107, 3213870, 6),
(166, 2005, 121, 3276966, 6),
(167, 2006, 112, 3224865, 6),
(168, 2007, 119, 2929376, 6),
(169, 2008, 150, 2576889, 6),
(170, 2009, 146, 2948466, 6),
(171, 2010, 208, 3062820, 6),
(172, 2011, 250, 3495933, 6),
(173, 2012, 226, 3258325, 6),
(174, 2013, 237, 2952439, 6),
(175, 2014, 278, 2845592, 6),
(176, 2015, 290, 2924165, 6),
(177, 2016, 247, 3032554, 6),
(178, 2017, 266, 3090583, 6),
(179, 2018, 268, 3211206, 6),
(180, 2019, 242, 3195461, 6);

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2021_06_07_090920_sources', 1),
(2, '2021_06_07_100859_personnages', 1),
(3, '2021_06_07_101246_saisons', 1),
(4, '2021_06_07_101700_scripts', 1),
(5, '2021_06_07_101738_episodes', 1),
(6, '2021_06_07_121742_livres', 1);

-- --------------------------------------------------------

--
-- Structure de la table `personnages`
--

DROP TABLE IF EXISTS `personnages`;
CREATE TABLE IF NOT EXISTS `personnages` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `personnages`
--

INSERT INTO `personnages` (`id`, `nom`) VALUES
(1, 'Rachel'),
(2, 'Monica'),
(3, 'Phoebe'),
(4, 'Ross'),
(5, 'Chandler'),
(6, 'Joey');

-- --------------------------------------------------------

--
-- Structure de la table `saisons`
--

DROP TABLE IF EXISTS `saisons`;
CREATE TABLE IF NOT EXISTS `saisons` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nb_avg_omg` decimal(4,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `saisons`
--

INSERT INTO `saisons` (`id`, `nb_avg_omg`) VALUES
(1, '2.90'),
(2, '4.50'),
(3, '3.60'),
(4, '4.90'),
(5, '3.90'),
(6, '5.30'),
(7, '4.40'),
(8, '4.50'),
(9, '5.40'),
(10, '6.80');

-- --------------------------------------------------------

--
-- Structure de la table `scripts`
--

DROP TABLE IF EXISTS `scripts`;
CREATE TABLE IF NOT EXISTS `scripts` (
  `nb_omg` int(11) NOT NULL,
  `id_personnage` bigint(20) UNSIGNED NOT NULL,
  `id_saison` bigint(20) UNSIGNED NOT NULL,
  KEY `scripts_id_personnage_foreign` (`id_personnage`),
  KEY `scripts_id_saison_foreign` (`id_saison`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `scripts`
--

INSERT INTO `scripts` (`nb_omg`, `id_personnage`, `id_saison`) VALUES
(18, 1, 1),
(27, 1, 2),
(23, 1, 3),
(25, 1, 4),
(31, 1, 5),
(37, 1, 6),
(35, 1, 7),
(26, 1, 8),
(17, 1, 9),
(25, 1, 10),
(14, 2, 1),
(27, 2, 2),
(23, 2, 3),
(31, 2, 4),
(16, 2, 5),
(25, 2, 6),
(19, 2, 7),
(20, 2, 8),
(28, 2, 9),
(36, 2, 10),
(8, 3, 1),
(18, 3, 2),
(24, 3, 3),
(13, 3, 4),
(15, 3, 5),
(15, 3, 6),
(25, 3, 7),
(19, 3, 8),
(28, 3, 9),
(9, 3, 10),
(6, 4, 1),
(9, 4, 2),
(6, 4, 3),
(8, 4, 4),
(9, 4, 5),
(12, 4, 6),
(12, 4, 7),
(9, 4, 8),
(25, 4, 9),
(21, 4, 10),
(9, 5, 1),
(3, 5, 2),
(7, 5, 3),
(7, 5, 4),
(11, 5, 5),
(18, 5, 6),
(8, 5, 7),
(7, 5, 8),
(4, 5, 9),
(5, 5, 10),
(3, 6, 1),
(6, 6, 2),
(4, 6, 3),
(4, 6, 4),
(5, 6, 5),
(9, 6, 6),
(4, 6, 7),
(13, 6, 8),
(9, 6, 9),
(7, 6, 10);

-- --------------------------------------------------------

--
-- Structure de la table `sources`
--

DROP TABLE IF EXISTS `sources`;
CREATE TABLE IF NOT EXISTS `sources` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sources_libelle_unique` (`libelle`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `sources`
--

INSERT INTO `sources` (`id`, `libelle`) VALUES
(1, 'tvm'),
(2, 'acad'),
(3, 'fic'),
(4, 'mag'),
(5, 'news'),
(6, 'spok');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

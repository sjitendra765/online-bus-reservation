-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2016 at 07:02 AM
-- Server version: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `rajdevi`
--

-- --------------------------------------------------------

--
-- Table structure for table `bus`
--

CREATE TABLE IF NOT EXISTS `bus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bus_no` varchar(15) NOT NULL,
  `status` varchar(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=61 ;

--
-- Dumping data for table `bus`
--

INSERT INTO `bus` (`id`, `bus_no`, `status`, `type`) VALUES
(1, '1440', 'on', ''),
(3, '1440', 'on', 'asd'),
(4, '123', 'active', 'df'),
(5, '123', 'active', 'aqsdfsf'),
(6, '12234', 'active', 'bnm'),
(7, '12234', 'active', ''),
(8, '12345', 'active', ''),
(9, '9876', 'no', ''),
(10, '567', 'no', ''),
(11, '12321', 'qwe', ''),
(12, '12321', 'qwe', ''),
(13, '123', 'active', 'huij'),
(14, '123', 'active', 'adasd'),
(15, '1440', 'on', 'ddd'),
(16, '1440', 'on', 'ddd'),
(17, '1440', 'on', 'sd'),
(18, '123', 'active', 'df'),
(19, '123', 'active', 'aq'),
(20, '123', 'active', 'aq'),
(21, '123', 'active', 'aq'),
(22, '123', 'active', 'aq'),
(23, '123', 'active', 'aq'),
(24, '123', 'active', 'aq'),
(25, '123', 'active', 'aq'),
(26, '123', 'active', 'aq'),
(27, '123', 'active', 'aq'),
(28, '123', 'active', 'aq'),
(29, '123', 'active', 'aq'),
(30, '123', 'active', 'aq'),
(31, '123', 'active', 'aq'),
(32, '123', 'active', 'aq'),
(33, '123', 'active', 'aq'),
(34, '123', 'active', 'aq'),
(35, '123', 'active', 'aq'),
(36, '123', 'active', 'aq'),
(37, '123', 'active', 'aq'),
(38, '123', 'active', 'aq'),
(39, '123', 'active', 'aq'),
(40, '123', 'active', 'aq'),
(41, '123', 'active', 'aq'),
(42, '123', 'active', 'aq'),
(43, '123', 'active', 'aq'),
(44, '123', 'active', 'aq'),
(45, '1440', 'on', 'asd'),
(46, '12234', 'active', 'bnm'),
(47, '12234', 'active', 'bnm'),
(48, 'ad', 'ad', 'asd'),
(49, 'sdf', 'sfc', 'sadcf'),
(50, '1232', 'ed', 'wed'),
(51, '123w', 'q', 'q'),
(52, 'ty', '', ''),
(53, '7698', 'ddf', 'tyr'),
(54, '1212', 'xaq', 'awqs'),
(55, '9879', 'mlop', 'koji'),
(56, '5434', 'wer', 'rte'),
(57, '324', 'fde', 'ewr'),
(58, '324', 'fde', 'ewr'),
(59, '324', 'fde', 'ewr'),
(60, '324', 'fde', 'ewr');

-- --------------------------------------------------------

--
-- Table structure for table `busreserve`
--

CREATE TABLE IF NOT EXISTS `busreserve` (
  `name` varchar(50) NOT NULL,
  `from_dept` varchar(20) NOT NULL,
  `to_dest` varchar(20) NOT NULL,
  `dateTotravel` date NOT NULL,
  `no_of_bus` int(11) NOT NULL,
  `no_of_days` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_no` varchar(20) NOT NULL,
  `type_of_bus` varchar(12) NOT NULL,
  `address` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `deport`
--

CREATE TABLE IF NOT EXISTS `deport` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `route_id` int(11) NOT NULL,
  `deport_add` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `route_id` (`route_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `fares`
--

CREATE TABLE IF NOT EXISTS `fares` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_dept` varchar(15) NOT NULL,
  `to_dest` varchar(15) NOT NULL,
  `amount` varchar(15) NOT NULL,
  `amountac` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `fares`
--

INSERT INTO `fares` (`id`, `from_dept`, `to_dest`, `amount`, `amountac`) VALUES
(2, 'kathmandu', 'birgung', '189', '900'),
(3, 'kathmandu', 'malangwa', '100', '800');

-- --------------------------------------------------------

--
-- Table structure for table `places`
--

CREATE TABLE IF NOT EXISTS `places` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `route_id` int(11) NOT NULL,
  `stops` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `route_id` (`route_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `places`
--

INSERT INTO `places` (`id`, `route_id`, `stops`) VALUES
(5, 3, 'kathmandu'),
(6, 3, 'chitwan'),
(7, 3, 'hetauda'),
(8, 3, 'chapur'),
(9, 3, 'malangwa'),
(10, 1, 'muglin');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE IF NOT EXISTS `register` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `address` varchar(30) NOT NULL,
  `phone_no` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `resetPasswordToken` varchar(100) NOT NULL,
  `resetPasswordExpires` bigint(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `address`, `phone_no`, `email`, `password`, `isAdmin`, `resetPasswordToken`, `resetPasswordExpires`) VALUES
(1, 'eded', 'dsfs', 'fsv', 'sjitendra765@gmail.com', 'qw', 0, '2383c18bda6a1203cf77cfe04bba5b1eeb66b1f1', 1472803220670),
(2, 'vfvf', 'vsvs', 'sdvs', 'sjitendra765@gmail.com', 'fdsa', 0, '', 0),
(3, 'sdvv', 'xv vcb ', 'dfbbg', 'sjitendra765@gmail.com', 'qwerty', 0, '', 0),
(4, 'asxsa', 'cdc', 'cddc', 'sjitendra765@gmail.com', '1qw', 0, '', 0),
(5, 'bhbk', 'mlpok', 'xssaw', 'sjitendra765@gmail.com', 'mnbv', 0, '', 0),
(6, 'aqws', 'awd', 'aff', 'sjitendra765@gmail.com', 'bvcx', 0, '', 0),
(7, 'aqws', 'awd', 'aff', 'sjitendra765@gmail.com', 'bvcx', 0, '', 0),
(8, 'aqws', 'awd', 'aff', 'sjitendra765@gmail.com', 'bvcx', 0, '', 0),
(9, 'aqws', 'awd', 'aff', 'sjitendra765@gmail.com', 'bvcx', 0, '', 0),
(10, 'aqws', 'awd', 'aff', 'sjitendra765@gmail.com', 'bvcx', 0, '', 0),
(11, 'aqws', 'awd', 'aff', 'sjitendra765@gmail.com', 'bvcx', 0, '', 0),
(12, 'njko', 'mlpok', 'vcfdx', 'sjitendra765@gmail.com', 'mnbv', 0, '', 0),
(13, 'asdf', 'vfb', 'bgb', 'sjitendra765@gmail.com', 'njik', 0, '', 0),
(14, 'awdf', 'afefg', 'gsgrg', 'sjitendra765@gmail.com', '$2a$10$8Mnaxg5xE2ErzgL1JG.AEueiHRjetZMgVC.cfYWKMjcr6k5BOCZJO', 0, '', 0),
(15, 'kii', 'feff', 'fefrf', 'hero.jitendra.singh@gmail.com', '$2a$10$Mbl1d.qDQ2G3tzGtOHkaRONtL6b.Mfl4wA2WAlzzl5RTKErzks23S', 0, '', 0),
(16, 'sdc', 'sdc', 'sdcsd', 'aswq@gmail.com', '$2a$10$wQjhfUoqKxU10EXo.UguYeH10BsI3liPrm0ftxJfB6wBlN.3CWiMW', 1, '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `reserve`
--

CREATE TABLE IF NOT EXISTS `reserve` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `seat_no` varchar(30) NOT NULL,
  `dateToTravel` date NOT NULL,
  `phone` varchar(15) NOT NULL,
  `bus_no` varchar(15) NOT NULL,
  `from_dept` varchar(20) NOT NULL,
  `to_dest` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `secret_key` varchar(20) NOT NULL,
  `price` varchar(10) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=62 ;

--
-- Dumping data for table `reserve`
--

INSERT INTO `reserve` (`id`, `name`, `seat_no`, `dateToTravel`, `phone`, `bus_no`, `from_dept`, `to_dest`, `email`, `secret_key`, `price`, `user_id`) VALUES
(1, 'sdvsdv', '', '2073-04-14', 'dsvsdv', '98', 'kathmandu', 'malangwa', 'abhay4jite@gmail.com', '', '8400', 0),
(2, 'bhvg', '', '2073-04-13', 'xdzs', '234', 'kathmandu', 'birgunj', 'sjihu@cyc.com', '00691380', '8400', 0),
(3, 'nj', '', '2073-04-13', 'mk', '234', 'kathmandu', 'birgunj', 'guh@hv.com', '39250200', '8400', 0),
(4, 'ewdewd', '', '0000-00-00', 'dewd', '', '', '', 'sjitendra765@gmail.com', '63787500', '8400', 0),
(5, 'sw', '', '0000-00-00', 'de', '', '', '', 'drdr@gmail.com', '29547274', '8400', 0),
(6, 'wsdwsd', '', '0000-00-00', 'asdsa', '', '', '', 'sjitendra765@gmail.com', '56120972', '8400', 0),
(7, 'as', '', '2073-04-13', 'as', '', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '43419143', '8400', 0),
(8, 'as', '', '2073-04-13', 'as', '', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '54236439', '8400', 0),
(9, 'de', '', '2073-04-13', 'ede', '1111', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '28421627', '8400', 0),
(10, 'ws', '', '2073-04-13', 'ws', '1234', 'kathmandu', 'birgunj', 'sjihu@cyc.com', '46418932', '8400', 0),
(11, 'de', '', '2073-04-14', 'de', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '23040646', '4200', 0),
(12, 'dsufvh', '', '2073-04-17', 'sdfv', '1111', 'kathmandu', 'malangwa', 'sdf@gmail.com', '98871678', '8400', 0),
(13, 'er', '', '2073-04-17', 'er', '1111', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '85287119', '8400', 0),
(14, 'sds', '', '2073-04-17', 'sdcdsv', '1111', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '55815521', '8400', 0),
(15, 'asd', '', '2073-04-17', 'asd', '1111', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '27652731', '8400', 0),
(16, 'rvd', '', '2073-04-21', 'dbdb', '1111', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '12735082', '8400', 0),
(17, 'oluo', '', '2073-04-26', 'iiu', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '60865506', '8400', 0),
(18, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '70125763', '8400', 0),
(19, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '13678748', '8400', 0),
(20, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '38734268', '8400', 0),
(21, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '10938889', '8400', 0),
(22, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '22455398', '8400', 0),
(23, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '65482770', '8400', 0),
(24, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '05513776', '8400', 0),
(25, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '21158886', '8400', 0),
(26, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '66874638', '8400', 0),
(27, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '56755184', '8400', 0),
(28, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '78011828', '8400', 0),
(29, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '16369986', '8400', 0),
(30, 'sdc', '', '2073-04-24', 'sdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '36806732', '8400', 0),
(31, 'zaxs', '', '2073-04-24', 'sc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '34857940', '8400', 0),
(32, 'y', '', '2073-04-24', 'hn', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '18495971', '8400', 0),
(33, 'dsc', '', '2073-04-12', 'xc ', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '73408079', '8400', 0),
(34, 'dv', '', '2073-04-12', 'sdv', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '63000187', '8400', 0),
(35, 'dgd', '', '2073-04-24', 'dfvdfb', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '43710487', '8400', 0),
(36, 'jitendra', 'b1', '2016-08-10', '98411888437', '34', 'kathmandu', 'hetauda', 'sjitendra@gmail.com', '', '231', 16),
(37, 'sew', '', '2073-04-26', 'sde', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '12768553', '8400', 0),
(38, 'asxsa', '', '2073-04-26', 'as', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '89516019', '8400', 0),
(39, 'asdd', '', '2073-04-12', 'ada', '98', 'kathmandu', 'malangwa', 'aswq@gmail.com', '83563325', '8400', 0),
(40, 'asdf', '', '2073-04-26', 'asdsa', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '95787607', '8400', 0),
(41, 'asdf', '', '2073-04-26', 'add', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '81310383', '8400', 0),
(42, 'rg', '', '2073-04-26', 'er', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '08919660', '8400', 0),
(43, 'rg', '', '2073-04-26', 'er', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '15413594', '8400', 0),
(44, 'qwd', '', '2073-04-26', 'asdsad', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '07899571', '8400', 0),
(45, 'adcds', '', '2073-04-26', 'zcdc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '15777361', '8400', 0),
(46, 'asxas', '', '2073-04-26', 'asdcadc', '98', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '49324508', '', 0),
(47, 'asdf', '', '2073-04-10', 'asc', '98', 'kathmandu', 'malangwa', 'aswq@gmail.com', '54875797', '', 0),
(48, 'Jitendra Singh', '', '2073-05-17', '9841188437', '9876', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '61904505', '100', 0),
(49, 'jhgj', '', '2073-05-17', '9816851741', '9876', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '49220010', '100', 0),
(50, 'sdc', 'C2', '2073-05-17', 'jihu', '9876', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '35031344', '100', 0),
(51, 'dcdnk', 'C4', '2073-05-17', '9816851741', '9876', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '72979128', '100', 0),
(52, 'sds', 'A2', '2073-05-17', '9841188437', '9876', 'kathmandu', 'malangwa', 'jitendra@gmail.com', '20858151', '100', 0),
(53, 'Jitendra Singh', 'A1', '2073-05-17', '9841188437', '9876', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '08505394', '100', 0),
(54, 'sds', 'A4', '2073-05-17', '9841188437', '9876', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '85949349', '100', 0),
(55, 'sds', 'A3', '2073-05-17', 'sas', '9876', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '63982295', '100', 0),
(56, 'Jitendra Singh', 'A9', '2073-05-17', 'sdcdsv', '9876', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '99241849', '100', 0),
(57, 'Jitendra Singh', 'A10', '2073-05-17', '9841188437', '9876', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '33562147', '100', 0),
(58, 'xs', 'B8', '2073-05-27', 'cd', '9876', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '33958323', '100', 0),
(59, 'dscds', 'A7', '2073-05-29', '9841188437', '9876', 'kathmandu', 'malangwa', 'sjitendra765@gmail.com', '29960772', '100', 0),
(60, 'kihui', 'B9,B10', '2073-07-25', '89u2394y', '9876', 'kathmandu', 'malangwa', 'ds@gmail.com', '73565298', '200', NULL),
(61, 'asdcas', 'A11', '2073-07-27', '4565354645', '9876', 'kathmandu', 'malangwa', 'sj@gmail.com', '71846822', '100', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `route`
--

CREATE TABLE IF NOT EXISTS `route` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_dept` varchar(20) NOT NULL,
  `to_dest` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `route`
--

INSERT INTO `route` (`id`, `from_dept`, `to_dest`) VALUES
(1, 'hetauda', 'illam'),
(3, 'kathmandu', 'malangwa');

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE IF NOT EXISTS `seats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `travel_id` int(11) NOT NULL,
  `seat_no` varchar(5) NOT NULL,
  `date` date NOT NULL,
  `bus_no` varchar(12) NOT NULL,
  `resetToken` varchar(100) NOT NULL,
  `resetTokenExpires` bigint(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `travel_id` (`travel_id`),
  KEY `travel_id_2` (`travel_id`),
  KEY `travel_id_3` (`travel_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=107 ;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`id`, `travel_id`, `seat_no`, `date`, `bus_no`, `resetToken`, `resetTokenExpires`) VALUES
(37, 1, '', '0000-00-00', '98', '', 0),
(38, 1, '', '0000-00-00', '98', '', 0),
(39, 1, '', '2073-04-12', '98', '', 0),
(40, 1, '', '2073-04-12', '98', '', 0),
(41, 1, '', '2073-04-12', '98', '', 0),
(42, 1, '', '2073-04-12', '98', '', 0),
(43, 1, '', '2073-04-24', '98', '', 0),
(44, 1, '', '2073-04-24', '98', '', 0),
(45, 1, '', '2073-04-26', '98', '', 0),
(46, 1, '', '2073-04-26', '98', '', 0),
(47, 1, '', '2073-04-26', '98', '', 0),
(48, 1, '', '2073-04-26', '98', '', 0),
(49, 1, '', '2073-04-12', '98', '', 0),
(50, 1, '', '2073-04-12', '98', '', 0),
(51, 1, '', '2073-04-26', '98', '', 0),
(52, 1, '', '2073-04-26', '98', '', 0),
(53, 1, '', '2073-04-26', '98', '', 0),
(54, 1, '', '2073-04-26', '98', '', 0),
(55, 1, '', '2073-04-26', '98', '', 0),
(56, 1, '', '2073-04-26', '98', '', 0),
(57, 1, '', '2073-04-26', '98', '', 0),
(58, 1, '', '2073-04-26', '98', '', 0),
(59, 0, 'B3', '2073-04-26', '98', '', 0),
(60, 0, 'B4', '2073-04-26', '98', '', 0),
(61, 0, 'A3', '2073-04-26', '98', '', 0),
(62, 0, 'A4', '2073-04-26', '98', '', 0),
(63, 0, 'B5', '2073-04-10', '98', '', 0),
(64, 0, 'B6', '2073-04-10', '98', '', 0),
(65, 0, 'B8', '2073-04-10', '98', '', 0),
(66, 0, 'B10', '2073-04-10', '98', '', 0),
(67, 0, 'B9', '2073-05-17', '9876', '', 0),
(68, 0, 'B10', '2073-05-17', '9876', '', 0),
(69, 0, 'B12', '2073-05-17', '9876', '', 0),
(70, 0, 'B11', '2073-05-17', '9876', '', 0),
(71, 0, 'B6', '2073-05-17', '9876', '', 0),
(72, 0, 'B5', '2073-05-17', '9876', '', 0),
(73, 0, 'B1', '2073-05-17', '9876', '', 0),
(74, 0, 'B2', '2073-05-17', '9876', '', 0),
(75, 0, 'B4', '2073-05-17', '9876', '', 0),
(76, 0, 'B3', '2073-05-17', '9876', '', 0),
(77, 0, 'B8', '2073-05-17', '9876', '', 0),
(78, 0, 'A5', '2073-05-17', '9876', '4af295015c1d23ade951b6d4e8f70cc72b57c599', 1472962166281),
(79, 0, 'A6', '2073-05-17', '9876', '7a03ba326b9f336074938d6a573896ca2429b0ad', 1472971665638),
(80, 0, 'A8', '2073-05-17', '9876', '23a302d562ecd7c3480434d3ece576acdfe34a95', 1472971811033),
(81, 0, 'A7', '2073-05-17', '9876', '01ca06264f88711d60aeb19ab83699fb7f093383', 1472972206379),
(82, 0, 'B7', '2073-05-17', '9876', '3aacd53fa1c7840f01a4c5f262dfc823608b6d37', 1472972527848),
(83, 0, 'B13', '2073-05-17', '9876', '0c4bc893f2632d3333560ed72417af4fd001af43', 1472972698990),
(84, 0, 'B14', '2073-05-17', '9876', 'd07cbe9341d036767028eb4533a9d676e25da4ed', 1472973105473),
(85, 0, 'L1', '2073-05-17', '9876', '6dc04bb78aff82781d5c84ba50bfb76818ccbe27', 1473067487696),
(86, 0, 'L2', '2073-05-17', '9876', '9724e23274c7d7361e757be591d2c9fba4ac472f', 1473068007153),
(87, 0, 'L3', '2073-05-17', '9876', '2f0a607f367590041be9b3fd1c50b1b3d2c03206', 1473069189172),
(88, 0, 'L4', '2073-05-17', '9876', 'fc17f5ade5b809be8c2b35fcce8f8fe629bf2294', 1473069412740),
(89, 0, 'L5', '2073-05-17', '9876', '2670e62e80c43b04a21cc6f2c317049d24802a80', 1473069654099),
(90, 0, 'C1', '2073-05-17', '9876', '4be63367c433e3800ad5577d2e667addb349bc6e', 1473070030728),
(91, 0, 'C3', '2073-05-17', '9876', 'bf3bb325d2dba2ad84bf4d4cc36b6487e6dd5a03', 1473095786933),
(92, 0, 'C2', '2073-05-17', '9876', '120207eb786d92afacfd8b1736328bec5c36f965', 1473096658787),
(93, 0, 'C4', '2073-05-17', '9876', 'cc31dd406a0e10154d7aab97a0e38e7213cdf1ab', 1473096747092),
(94, 0, 'A2', '2073-05-17', '9876', '60e8b9559da814b714f3fd37a5ae6a50f41afd00', 1473097129279),
(95, 0, 'A1', '2073-05-17', '9876', '50625c6ec60f5625684b5a8efd0e2562581d2328', 1473097430585),
(96, 0, 'A4', '2073-05-17', '9876', 'e8d0044dfe6114f848e55f43af20ef7fc0b4dd3c', 1473097980725),
(97, 0, 'A3', '2073-05-17', '9876', 'ab0e2fa93a852ab7b88b5d2474088c4d89d3a70d', 1473098403186),
(98, 0, 'A9', '2073-05-17', '9876', '6ed7997d0229e42cc19a7b86a9d212b10e571c48', 1473098662531),
(99, 0, 'A10', '2073-05-17', '9876', 'db0f464e37a37065069e890186d4b6350f63e42f', 1473099435129),
(100, 0, 'B7', '2073-05-29', '9876', '2fa08565962aa6d059c1f153cb2b3bad08fabea4', 1473615657457),
(101, 0, 'B8', '2073-05-29', '9876', '2fa08565962aa6d059c1f153cb2b3bad08fabea4', 1473615657466),
(102, 0, 'B8', '2073-05-27', '9876', '68ba9596641fc2808f15da556847bfc60b2f958a', 1473616176709),
(103, 0, 'A7', '2073-05-29', '9876', 'b70cc6f0fa79905ceb477645ca7cbc150b3cfdf1', 1473753994239),
(104, 0, 'B10', '2073-07-25', '9876', '6f9b8b8ae0a6090a63a062b1681ee3e3b031478d', 1478682954766),
(105, 0, 'B9', '2073-07-25', '9876', '6f9b8b8ae0a6090a63a062b1681ee3e3b031478d', 1478682954757),
(106, 0, 'A11', '2073-07-27', '9876', '62d102cca0732aabdc92939225c8a312e103744b', 1478683871539);

-- --------------------------------------------------------

--
-- Table structure for table `travelbus`
--

CREATE TABLE IF NOT EXISTS `travelbus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `travelTime` varchar(10) NOT NULL,
  `travelDate` varchar(20) NOT NULL,
  `route_id` int(15) NOT NULL,
  `days` varchar(10) NOT NULL,
  `busid` int(11) NOT NULL,
  `bus_no` varchar(21) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `routeno` (`route_id`),
  KEY `busid` (`busid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `travelbus`
--

INSERT INTO `travelbus` (`id`, `travelTime`, `travelDate`, `route_id`, `days`, `busid`, `bus_no`) VALUES
(2, '', '0000-00-00', 1, '', 0, '1234'),
(3, '', '0000-00-00', 1, '', 0, ''),
(7, 'night', '0000-00-00', 3, 'even', 0, '98'),
(8, 'day', '0000-00-00', 3, 'odd', 0, '1111'),
(9, '', '0000-00-00', 3, 'odd', 0, '1440'),
(10, '', 'day', 3, 'odd', 0, '9876');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `pet` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_name_unique` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `pet`, `created_at`, `updated_at`) VALUES
(1, 'jitendra', 'jit', '2016-07-20 00:00:00', '2016-07-20 02:00:00');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `deport`
--
ALTER TABLE `deport`
  ADD CONSTRAINT `deport_ibfk_1` FOREIGN KEY (`route_id`) REFERENCES `route` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `places`
--
ALTER TABLE `places`
  ADD CONSTRAINT `places_ibfk_1` FOREIGN KEY (`route_id`) REFERENCES `route` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `travelbus`
--
ALTER TABLE `travelbus`
  ADD CONSTRAINT `travelbus_ibfk_1` FOREIGN KEY (`route_id`) REFERENCES `route` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

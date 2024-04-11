-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2024 at 02:56 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_antrian`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_antrian`
--

CREATE TABLE `data_antrian` (
  `id` int(11) NOT NULL,
  `id_pasien` int(11) DEFAULT NULL,
  `nomor_antrian` int(11) DEFAULT NULL,
  `waktu_kedatangan` timestamp NOT NULL DEFAULT current_timestamp(),
  `jenis_transaksi` enum('Pendaftaran','Konsultasi','Pemeriksaan','Resep') DEFAULT NULL,
  `keterangan` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_antrian`
--

INSERT INTO `data_antrian` (`id`, `id_pasien`, `nomor_antrian`, `waktu_kedatangan`, `jenis_transaksi`, `keterangan`) VALUES
(1, 1, 1, '2024-04-07 02:53:22', 'Pendaftaran', 'Daftar pasien'),
(2, 2, 2, '2024-04-07 13:14:54', 'Resep', 'Ambil Resep');

-- --------------------------------------------------------

--
-- Table structure for table `data_pasien`
--

CREATE TABLE `data_pasien` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `usia` varchar(5) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `tgl_lahir` date DEFAULT NULL,
  `no_tlp` varchar(15) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_pasien`
--

INSERT INTO `data_pasien` (`id`, `nama`, `usia`, `alamat`, `tgl_lahir`, `no_tlp`, `created_at`, `updated_at`) VALUES
(1, 'Adjie', '23', 'Jimbaran', '2000-10-29', '081236764846', '2024-04-07 09:48:36', '2024-04-07 18:12:54'),
(2, 'Anggita', '22', 'Mengwi', '0000-00-00', '81234567891', '2024-04-07 18:51:08', '2024-04-07 19:51:05'),
(5, 'Adis', '21', 'Jimbaran', '0000-00-00', '81234567890', '2024-04-07 21:30:10', '2024-04-07 21:30:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_antrian`
--
ALTER TABLE `data_antrian`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pasien` (`id_pasien`);

--
-- Indexes for table `data_pasien`
--
ALTER TABLE `data_pasien`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_name_unique` (`nama`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_antrian`
--
ALTER TABLE `data_antrian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `data_pasien`
--
ALTER TABLE `data_pasien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `data_antrian`
--
ALTER TABLE `data_antrian`
  ADD CONSTRAINT `data_antrian_ibfk_1` FOREIGN KEY (`id_pasien`) REFERENCES `data_pasien` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaBars, FaArrowLeft } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const closeDropdown = (e) => {
    if (!e.target.closest('#dropdownButton') && !e.target.closest('#dropdownMenu')) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold text-green-600">Healthy Life</div>
        <nav className="flex space-x-6 items-center">
          <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
          <div className="relative">
            <button
              id="dropdownButton"
              className="text-gray-600 flex items-center space-x-1"
              onClick={toggleDropdown}
            >
              <span>Fitur</span>
              <FaChevronDown />
            </button>
            {dropdownOpen && (
              <div id="dropdownMenu" className="absolute bg-white shadow-lg rounded-lg w-48 mt-2 z-10">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Pelacak Jam Tidur</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Pelacak Langkah</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Resep Makanan</a>
                <a href="catatankesehatan.html" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Catatan Sehat</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Aktivitas Fisik</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Monitor Kesehatan</a>
              </div>
            )}
          </div>
          <a href="#" className="text-gray-600 hover:text-green-600">Artikel</a>
          <a href="#" className="text-gray-600 hover:text-green-600">Pusat Bantuan</a>
        </nav>
        <div className="text-gray-600 md:hidden">
          <FaBars className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

const Card = ({ imgSrc, title, link }) => (
  <div className="card bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all ease-in-out duration-300">
    <img alt={title} className="w-full rounded-lg shadow-md mb-4" src={imgSrc} />
    <Link to={link} className="bg-green-700 text-white py-2 px-4 rounded-full block text-center w-full">
      {title}
    </Link>
  </div>
);

const MainContent = () => (
  <main className="container mx-auto px-4 py-8">
    <div className="flex justify-start mb-4">
      <button className="text-green-600 text-2xl">
        <FaArrowLeft />
      </button>
    </div>
    <h1 className="text-center text-3xl font-bold text-green-700 mb-8">
      Resep Makanan Sehat
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        imgSrc="https://storage.googleapis.com/a1aa/image/AtiTDXgoT4YFIFFLSCJpkeimbv5a2hv877YNt6BzW28y5H5JA.jpg"
        title="Sarapan"
        link="/halaman2"  // Link to halaman2
      />
      <Card
        imgSrc="https://storage.googleapis.com/a1aa/image/ieiqRwgqQhSJNSueNcAPvJiXhFA84xlNEbG4fTAtSkGHnfIPB.jpg"
        title="Makan Siang"
        link="/halaman3"  // You can create similar pages for Makan Siang
      />
      <Card
        imgSrc="https://storage.googleapis.com/a1aa/image/G2QE5vY9ZFaxK9g0iyrzINTePRffRsW2Dw0FtFsv0gYDnfIPB.jpg"
        title="Makan Malam"
        link="/halaman4"  // You can create similar pages for Makan Malam
      />
    </div>
  </main>
);

const Footer = () => (
  <footer className="bg-white py-6 mt-12 shadow-inner">
    <div className="container mx-auto px-4 text-center">
      <p className="text-gray-600">© 2024 Healthy Life. All rights reserved.</p>
    </div>
  </footer>
);

const Halaman2 = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-green-700">Halaman Sarapan</h2>
    <p>Content for Sarapan page...</p>
  </div>
);

const Halaman3 = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-green-700">Halaman Makan Siang</h2>
    <p>Content for Makan Siang page...</p>
  </div>
);

const Halaman4 = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-green-700">Halaman Makan Malam</h2>
    <p>Content for Makan Malam page...</p>
  </div>
);

const App = () => (
  <Router>
    <div className="bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/halaman2" element={<Halaman2 />} />
        <Route path="/halaman3" element={<Halaman3 />} />
        <Route path="/halaman4" element={<Halaman4 />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;

import React, { useState } from 'react';

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Close dropdown if clicked outside
  const closeDropdown = (event) => {
    if (!event.target.closest('#dropdownButton') && !event.target.closest('#dropdownMenu')) {
      setDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-xl font-bold text-green-700">
            Healthy Life
          </div>
          <nav className="flex space-x-4 relative items-center">
            <a className="text-green-700 font-semibold" href="halaman1.html">Home</a>

            {/* Dropdown Button */}
            <div className="relative">
              <button 
                id="dropdownButton" 
                className="text-gray-700 font-semibold flex items-center" 
                onClick={toggleDropdown}>
                Fitur <i className="fas fa-caret-down ml-1"></i>
              </button>
              {/* Dropdown Menu */}
              {dropdownVisible && (
                <div 
                  id="dropdownMenu" 
                  className="absolute bg-white shadow-lg rounded-lg w-40 mt-2 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600">Pelacak Jam Tidur</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600">Pelacak Langkah</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600">Resep Makanan</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600">Catatan Sehat</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600">Aktivitas Fisik</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600">Monitor Kesehatan</a>
                </div>
              )}
            </div>

            <a className="text-gray-700" href="#">Artikel</a>
            <a className="text-gray-700" href="#">Pusat Bantuan</a>
          </nav>
          <div className="text-gray-700">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-6">
        <div className="flex items-center mb-4">
          {/* Back Button */}
          <button className="text-green-600 text-2xl mr-4" onClick={() => window.location.href='halaman1.html'}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <h1 className="text-3xl font-bold text-green-700">
            Rekomendasi Sarapan
          </h1>
        </div>

        <div className="space-y-4">
          {/* Sandwich Card */}
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <img alt="Sandwich telur keju" className="w-24 h-24 rounded-lg mr-4" height="100" src="https://storage.googleapis.com/a1aa/image/nEcNjvYSr95JJV8nIyfuxavNgAulXy9Ui9qHf4Pp389W6PyTA.jpg" width="100"/>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-green-700">
                Sandwich telur keju
              </h2>
              <p className="text-gray-700 text-sm">
                4 lembar roti tawar | 2 butir telur | 4 buah tomat (iris tipis) | 1 buah timun | 100 gram selada | 50 ml mayones | 100 ml margarin | 50 gram keju cheddar | 1 sdt garam | 1 sdt lada | 1 sdt gula pasir | ...
              </p>
              <button className="bg-green-700 text-white px-4 py-2 rounded mt-2" onClick={() => window.location.href='sandwichkeju.html'}>
                Klik Disini
              </button>
            </div>
            <div className="text-gray-700">
              <i className="fas fa-plus-circle"></i>
            </div>
          </div>

          {/* Potato Wedges Card */}
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <img alt="Potato wedges" className="w-24 h-24 rounded-lg mr-4" height="100" src="https://storage.googleapis.com/a1aa/image/akm8xVTforVyMaUcfZ5wcrFI6mbTqoF6aEewglsShZ0X8fIPB.jpg" width="100"/>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-green-700">
                Potato wedges
              </h2>
              <p className="text-gray-700 text-sm">
                2 buah kentang | 2 sdm minyak | 1 sdt garam | 1 sdt lada | 1 sdt paprika bubuk | 1 sdt bawang putih bubuk | 1 sdt bawang bombay bubuk | 1 sdt oregano | 1 sdt basil | 1 sdt parsley | ...
              </p>
              <button className="bg-green-700 text-white px-4 py-2 rounded mt-2" onClick={() => window.location.href='potatowedges.html'}>
                Klik Disini
              </button>
            </div>
            <div className="text-gray-700">
              <i className="fas fa-plus-circle"></i>
            </div>
          </div>

          {/* Salad Sayur Card */}
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <img alt="Salad sayur" className="w-24 h-24 rounded-lg mr-4" height="100" src="https://storage.googleapis.com/a1aa/image/Kny0txkViQJmMdySZp5bZTzATkE7kV0K1aw5ddUxFecGfPyTA.jpg" width="100"/>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-green-700">
                Salad sayur
              </h2>
              <p className="text-gray-700 text-sm">
                1 buah wortel | 2 buah tomat | 2 buah timun | 1 buah paprika | 1 buah bawang bombay | 100 gram selada | 50 ml mayones | 1 sdt garam | 1 sdt lada | 1 sdt gula pasir | ...
              </p>
              <button className="bg-green-700 text-white px-4 py-2 rounded mt-2" onClick={() => window.location.href='saladsayur.html'}>
                Klik Disini
              </button>
            </div>
            <div className="text-gray-700">
              <i className="fas fa-plus-circle"></i>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

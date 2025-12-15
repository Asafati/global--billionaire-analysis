import React from 'react';

const Navbar = ({ toggleSidebar }) => (
  <nav style={{
    height: '60px',
    backgroundColor: '#4b6cb7',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }}>
    <h1 style={{ margin: 0, fontSize: '1.5rem', flex: 1 }}>Dasbor Kekayaan Miliarder Global</h1>
    <button onClick={toggleSidebar} className="md:hidden bg-gray-200 p-2 rounded">☰</button>
  </nav>
);

export default Navbar;

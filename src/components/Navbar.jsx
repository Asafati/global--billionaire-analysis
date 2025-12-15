import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Global Billionaire Wealth Analysis</h1>
    </nav>
  );
};

const styles = {
  navbar: {
    height: '60px',
    backgroundColor: '#4b6cb7',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  title: {
    margin: 0,
    fontSize: '1.5rem'
  }
};

export default Navbar;

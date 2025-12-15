import React from 'react';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>Dashboard</li>
        <li style={styles.menuItem}>Analytics</li>
        <li style={styles.menuItem}>Reports</li>
        <li style={styles.menuItem}>Settings</li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#f0f2f5',
    height: 'calc(100vh - 60px)',
    padding: '20px',
    boxSizing: 'border-box'
  },
  menu: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  menuItem: {
    padding: '10px 0',
    cursor: 'pointer',
    color: '#333'
  }
};

export default Sidebar;

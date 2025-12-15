import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.menu}>
        <li style={styles.menuItem}><Link to="/" style={styles.link}>Dashboard</Link></li>
        <li style={styles.menuItem}><Link to="/analytics" style={styles.link}>Analytics</Link></li>
        <li style={styles.menuItem}><Link to="/reports" style={styles.link}>Reports</Link></li>
        <li style={styles.menuItem}><Link to="/settings" style={styles.link}>Settings</Link></li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '250px', // ubah dari 200px ke 250px
    backgroundColor: '#f0f2f5',
    height: 'calc(100vh - 60px)',
    padding: '20px',
    boxSizing: 'border-box',
  },

  menu: { listStyle: 'none', padding: 0, margin: 0 },
  menuItem: { padding: '10px 0' },
  link: { textDecoration: 'none', color: 'inherit' }
};

export default Sidebar;

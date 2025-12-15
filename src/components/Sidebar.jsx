import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="p-4">
    <h2 className="text-lg font-semibold mb-4">Menu</h2>
    <ul className="space-y-2">
      <li><Link to="/" className="text-white hover:bg-gray-700 p-2 rounded">Dashboard</Link></li>
      <li><Link to="/analytics" className="text-white hover:bg-gray-700 p-2 rounded">Analytics</Link></li>
      <li><Link to="/reports" className="text-white hover:bg-gray-700 p-2 rounded">Reports</Link></li>
      <li><Link to="/settings" className="text-white hover:bg-gray-700 p-2 rounded">Settings</Link></li>
    </ul>
  </div>
);

export default Sidebar;

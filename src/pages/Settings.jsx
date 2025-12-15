import React from 'react';
import Layout from '../components/Layout';  // Menggunakan Layout yang baru
import Sidebar from '../components/Sidebar'; // Menggunakan Sidebar yang baru
import Navbar from '../components/Navbar';  // Menggunakan Navbar yang baru

const Settings = () => (
  <Layout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p>Ini halaman Settings. Kontennya bisa ditambah nanti.</p>
    </div>
  </Layout>
);

export default Settings;

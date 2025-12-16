import React from 'react';
import Layout from '../components/Layout';  // Menggunakan Layout yang baru
import Sidebar from '../components/Sidebar'; // Menggunakan Sidebar yang baru
import Navbar from '../components/Navbar';  // Menggunakan Navbar yang baru

const Settings = () => (
  <Layout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pengaturan</h1>
      <p>Ini adalah halaman Pengaturan. Kontennya dapat ditambahkan nanti.</p>
    </div>
  </Layout>
);

export default Settings;

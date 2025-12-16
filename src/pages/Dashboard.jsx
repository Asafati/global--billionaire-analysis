import React, { useState } from 'react';
import Layout from '../components/Layout'; // Pastikan path sudah benar
import { jsPDF } from 'jspdf';

// Data dengan gambar dan informasi tambahan (Bahasa Indonesia)
const billionaires = [
  {
    id: 1,
    name: 'Elon Musk',
    netWorth: 250, // dalam miliar USD
    country: 'Amerika Serikat',
    industry: 'Teknologi',
    image: 'link-to-elon-image.jpg', // Ganti dengan URL gambar Elon
  },
  {
    id: 2,
    name: 'Prajogo Pangestu',
    netWorth: 36, // dalam miliar USD
    country: 'Indonesia',
    industry: 'Energi',
    image: 'link-to-prajogo-image.jpg', // Ganti dengan URL gambar Prajogo
  },
  // Tambahkan lebih banyak data di sini...
];

const Dashboard = () => {
  const [search, setSearch] = useState('');

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Laporan Kekayaan Miliarder', 20, 20);
    let y = 30;

    billionaires.forEach(b => {
      doc.text(
        `${b.name} - USD ${b.netWorth} Miliar - ${b.country} - ${b.industry}`,
        20,
        y
      );
      y += 10;
    });

    doc.save('laporan-miliarder.pdf');
  };

  // Filter data berdasarkan pencarian nama
  const filteredData = billionaires.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="p-6 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
          Dasbor Kekayaan Miliarder
        </h1>

        {/* Filter */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Cari berdasarkan nama"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border p-2 rounded flex-1"
          />
        </div>

        {/* Export PDF */}
        <div className="mb-6">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={exportPDF}
          >
            Ekspor ke PDF
          </button>
        </div>

        {/* Tabel Miliarder */}
        <h2 className="text-xl font-semibold mb-2">Daftar Miliarder</h2>
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 rounded shadow">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="p-3 border-b">Gambar</th>
              <th className="p-3 border-b">Nama</th>
              <th className="p-3 border-b">Kekayaan Bersih</th>
              <th className="p-3 border-b">Negara</th>
              <th className="p-3 border-b">Industri</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(b => (
              <tr key={b.id}>
                <td className="p-3 border-b">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="p-3 border-b">{b.name}</td>
                <td className="p-3 border-b">
                  USD {b.netWorth} Miliar
                </td>
                <td className="p-3 border-b">{b.country}</td>
                <td className="p-3 border-b">{b.industry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Dashboard;

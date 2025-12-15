import React from 'react';
import Layout from '../components/Layout';  // Menggunakan Layout yang baru
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Data analitik untuk miliarder (berdasarkan data yang telah Anda kumpulkan)
const billionaireData = [
  { name: 'Elon Musk', netWorth: 250, industry: 'Technology', country: 'USA' },
  { name: 'Prajogo Pangestu', netWorth: 36, industry: 'Energy', country: 'Indonesia' },
  { name: 'Marinus Gea', netWorth: 0.02, industry: 'Politics', country: 'Indonesia' }, // Data contoh untuk Marinus Gea
];

// Data chart untuk analitik performa
const performanceData = [
  { name: 'Q1', value: 120 },
  { name: 'Q2', value: 200 },
  { name: 'Q3', value: 150 },
  { name: 'Q4', value: 250 },
];

const Analytics = () => {
  // Menghitung total kekayaan miliarder
  const totalNetWorth = billionaireData.reduce((acc, curr) => acc + curr.netWorth, 0);

  // Metrik analitik
  const totalBillionaires = billionaireData.length;
  const averageNetWorth = totalNetWorth / totalBillionaires;

  return (
    <Layout>
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Judul */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
          Analytics Dashboard
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
            <h2 className="text-lg font-semibold">Total Billionaires</h2>
            <p className="text-3xl font-bold mt-2">{totalBillionaires}</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
            <h2 className="text-lg font-semibold">Total Net Worth</h2>
            <p className="text-3xl font-bold mt-2">${totalNetWorth.toLocaleString()} Billion</p>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
            <h2 className="text-lg font-semibold">Average Net Worth</h2>
            <p className="text-3xl font-bold mt-2">${averageNetWorth.toLocaleString()} Billion</p>
          </div>
        </div>

        {/* Grafik Performa Kuartal */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Quarterly Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Visualisasi Daftar Miliarder */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Billionaires Overview</h2>
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 rounded shadow">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Net Worth</th>
                <th className="p-3 border-b">Industry</th>
                <th className="p-3 border-b">Country</th>
              </tr>
            </thead>
            <tbody>
              {billionaireData.map((b, index) => (
                <tr key={index}>
                  <td className="p-3 border-b">{b.name}</td>
                  <td className="p-3 border-b">${b.netWorth}B</td>
                  <td className="p-3 border-b">{b.industry}</td>
                  <td className="p-3 border-b">{b.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Insights */}
        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-inner">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Insights</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Kekayaan total miliarder mencapai lebih dari $350 miliar.</li>
            <li>Industri teknologi (seperti Elon Musk) mendominasi kekayaan miliarder terbesar.</li>
            <li>Industri energi (seperti Prajogo Pangestu) menunjukkan peningkatan signifikan dalam beberapa tahun terakhir.</li>
            <li>Indonesia memiliki miliarder yang semakin naik dalam peringkat global (Prajogo Pangestu, Marinus Gea).</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;

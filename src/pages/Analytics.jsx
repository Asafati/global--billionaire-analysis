import React from 'react';
import Layout from '../components/Layout'; // Menggunakan Layout
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

// Data analitik miliarder (Bahasa Indonesia)
const billionaireData = [
  {
    name: 'Elon Musk',
    netWorth: 250,
    industry: 'Teknologi',
    country: 'Amerika Serikat',
  },
  {
    name: 'Prajogo Pangestu',
    netWorth: 36,
    industry: 'Energi',
    country: 'Indonesia',
  },
  {
    name: 'Marinus Gea',
    netWorth: 0.02,
    industry: 'Politik',
    country: 'Indonesia',
  }, // Data contoh
];

// Data grafik performa
const performanceData = [
  { name: 'Kuartal 1', value: 120 },
  { name: 'Kuartal 2', value: 200 },
  { name: 'Kuartal 3', value: 150 },
  { name: 'Kuartal 4', value: 250 },
];

const Analytics = () => {
  // Total kekayaan
  const totalNetWorth = billionaireData.reduce(
    (acc, curr) => acc + curr.netWorth,
    0
  );

  // Metrik analitik
  const totalBillionaires = billionaireData.length;
  const averageNetWorth = totalNetWorth / totalBillionaires;

  return (
    <Layout>
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Judul */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
          Dasbor Analitik
        </h1>

        {/* Kartu Ringkasan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
            <h2 className="text-lg font-semibold">Total Miliarder</h2>
            <p className="text-3xl font-bold mt-2">{totalBillionaires}</p>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
            <h2 className="text-lg font-semibold">Total Kekayaan Bersih</h2>
            <p className="text-3xl font-bold mt-2">
              USD {totalNetWorth.toLocaleString()} Miliar
            </p>
          </div>

          <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
            <h2 className="text-lg font-semibold">Rata-rata Kekayaan Bersih</h2>
            <p className="text-3xl font-bold mt-2">
              USD {averageNetWorth.toLocaleString()} Miliar
            </p>
          </div>
        </div>

        {/* Grafik Performa Kuartalan */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Performa Kuartalan
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tabel Ringkasan Miliarder */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Ringkasan Miliarder
          </h2>
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 rounded shadow">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="p-3 border-b">Nama</th>
                <th className="p-3 border-b">Kekayaan Bersih</th>
                <th className="p-3 border-b">Industri</th>
                <th className="p-3 border-b">Negara</th>
              </tr>
            </thead>
            <tbody>
              {billionaireData.map((b, index) => (
                <tr key={index}>
                  <td className="p-3 border-b">{b.name}</td>
                  <td className="p-3 border-b">
                    USD {b.netWorth} Miliar
                  </td>
                  <td className="p-3 border-b">{b.industry}</td>
                  <td className="p-3 border-b">{b.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Insight */}
        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-inner">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Insight Utama
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Total kekayaan miliarder mencapai ratusan miliar dolar AS.</li>
            <li>
              Industri teknologi masih mendominasi kekayaan miliarder terbesar
              (contoh: Elon Musk).
            </li>
            <li>
              Industri energi menunjukkan pertumbuhan signifikan dalam beberapa
              tahun terakhir (contoh: Prajogo Pangestu).
            </li>
            <li>
              Indonesia memiliki tokoh berpengaruh yang semakin diperhitungkan
              di tingkat nasional dan global.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;

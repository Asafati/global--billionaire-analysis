import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";
import { filterBillionaires, getCountries, getIndustries } from "../services/billionaireService";
import { jsPDF } from "jspdf";

const Dashboard = () => {
  const [country, setCountry] = useState('');
  const [industry, setIndustry] = useState('');
  const [search, setSearch] = useState('');
  const [netWorthFilter, setNetWorthFilter] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'netWorth', direction: 'desc' });
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  let data = filterBillionaires(country, industry).filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  if(netWorthFilter === '>50') data = data.filter(b => b.netWorth > 50);
  if(netWorthFilter === '10-50') data = data.filter(b => b.netWorth >= 10 && b.netWorth <= 50);
  if(netWorthFilter === '<10') data = data.filter(b => b.netWorth < 10);

  if(sortConfig.key) {
    data.sort((a,b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if(aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if(aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = 'asc';
    if(sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  const exportCSV = () => {
    const header = ['Name', 'Net Worth', 'Country', 'Industry'];
    const rows = data.map(b => [b.name, b.netWorth, b.country, b.industry]);
    const csvContent = [header, ...rows].map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'billionaires.csv';
    link.click();
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Billionaire Wealth Report', 20, 20);
    let y = 30;
    data.forEach(b => {
      doc.text(`${b.name} - $${b.netWorth.toLocaleString()}B - ${b.country} - ${b.industry}`, 20, y);
      y += 10;
    });
    doc.save('billionaires.pdf');
  };

  const countries = getCountries();
  const industries = getIndustries();
  const topBillionaires = [...data].sort((a,b) => b.netWorth - a.netWorth).slice(0,5).map(b => b.id);

  const totalBillionaires = data.length;
  const avgNetWorth = totalBillionaires > 0 ? Math.round(data.reduce((sum,b) => sum + b.netWorth,0)/totalBillionaires) : 0;
  const maxNetWorth = totalBillionaires > 0 ? Math.max(...data.map(b => b.netWorth)) : 0;

  return (
    <div className={darkMode ? "dark flex flex-col h-screen" : "flex flex-col h-screen"}>
      <Navbar />
      <div className="md:hidden p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-pointer" onClick={() => setSidebarOpen(!isSidebarOpen)}>
        ☰
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`} />
        <main className="flex-1 p-6 overflow-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="flex justify-end mb-4">
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
                    onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-blue-100 dark:bg-blue-700 p-4 rounded shadow flex-1 text-center">
              Total Billionaires: {totalBillionaires}
            </div>
            <div className="bg-green-100 dark:bg-green-700 p-4 rounded shadow flex-1 text-center">
              Average Net Worth: ${avgNetWorth.toLocaleString()}B
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-700 p-4 rounded shadow flex-1 text-center">
              Top Net Worth: ${maxNetWorth.toLocaleString()}B
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex gap-4 flex-wrap">
              <select className="border p-2 rounded" value={country} onChange={e => setCountry(e.target.value)}>
                <option value="">All Countries</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select className="border p-2 rounded" value={industry} onChange={e => setIndustry(e.target.value)}>
                <option value="">All Industries</option>
                {industries.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
              <select className="border p-2 rounded" value={netWorthFilter} onChange={e => setNetWorthFilter(e.target.value)}>
                <option value="">All Net Worth</option>
                <option value=">50">{'> $50B'}</option>
                <option value="10-50">$10B - $50B</option>
                <option value="<10">{'< $10B'}</option>
              </select>
            </div>
            <input type="text" placeholder="Search by name" value={search} onChange={e => setSearch(e.target.value)}
                   className="border p-2 rounded flex-1 md:flex-none"/>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={exportCSV}>Export CSV</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={exportPDF}>Export PDF</button>
          </div>
          <div className="mb-6">
            <Chart data={data} />
          </div>
          <h2 className="text-xl font-semibold mb-2">List of Billionaires</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 rounded shadow">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="text-left p-3 border-b cursor-pointer" onClick={() => requestSort('name')}>Name</th>
                  <th className="text-left p-3 border-b cursor-pointer" onClick={() => requestSort('netWorth')}>Net Worth</th>
                  <th className="text-left p-3 border-b cursor-pointer" onClick={() => requestSort('country')}>Country</th>
                  <th className="text-left p-3 border-b cursor-pointer" onClick={() => requestSort('industry')}>Industry</th>
                </tr>
              </thead>
              <tbody>
                {data.map(b => (
                  <tr key={b.id} className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${topBillionaires.includes(b.id) ? 'bg-yellow-200 dark:bg-yellow-600 font-bold' : ''}`}>
                    <td className="p-3 border-b">{b.name}</td>
                    <td className="p-3 border-b">${b.netWorth.toLocaleString()}</td>
                    <td className="p-3 border-b">{b.country}</td>
                    <td className="p-3 border-b">{b.industry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

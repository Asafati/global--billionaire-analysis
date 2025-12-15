import React, { useState } from "react";
import Navbar from "../components/Navbar";  // Navbar yang sudah disesuaikan
import Sidebar from "../components/Sidebar"; // Sidebar yang sudah disesuaikan

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Gaya untuk root div, mengaktifkan dark mode ketika darkMode = true
  const rootClass = darkMode ? "dark flex flex-col h-screen" : "flex flex-col h-screen";

  return (
    <div className={rootClass}>
      {/* Navbar */}
      <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      {/* Mobile sidebar toggle */}
      <div
        className="md:hidden p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-pointer"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </div>

      {/* Main layout structure */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`transition-all bg-gray-800 text-white md:w-64 w-full md:block ${isSidebarOpen ? "block" : "hidden"}`}
          style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
        >
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {/* Dark mode toggle */}
          <div className="flex justify-end mb-4">
            <button
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Main content children */}
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;

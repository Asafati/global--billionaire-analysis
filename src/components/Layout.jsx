import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} h-screen overflow-hidden`}>
      
      {/* NAVBAR — FIXED */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      </header>

      <div className="flex pt-14 h-full">
        
        {/* SIDEBAR — FIXED */}
        <aside
          className={`fixed top-14 left-0 h-[calc(100vh-3.5rem)]
          bg-gray-800 text-white w-64
          transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 z-40`}
        >
          <Sidebar />
        </aside>

        {/* MAIN CONTENT — SCROLLABLE */}
        <main
          className="
            flex-1 ml-0 md:ml-64
            mt-14
            overflow-y-auto
            bg-gray-50 dark:bg-gray-900
            text-gray-900 dark:text-gray-100
            p-6
          "
        >
          {/* Dark mode toggle */}
          <div className="flex justify-end mb-4">
            <button
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Mode Terang" : "Mode Gelap"}
            </button>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

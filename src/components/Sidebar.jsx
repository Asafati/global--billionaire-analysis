import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Settings
} from "lucide-react";

const menu = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Reports", path: "/reports", icon: FileText },
  { name: "Settings", path: "/settings", icon: Settings }
];

const Sidebar = () => {
  return (
    <aside className="h-full p-4">
      
      {/* Brand
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-wide">Admin Panel</h2>
        <p className="text-xs text-gray-400">Dashboard Profesional</p>
      </div>
        */}
      {/* Menu */}
      <nav className="space-y-1">
        {menu.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `
              flex items-center gap-3 px-3 py-2 rounded-lg text-sm
              transition
              ${
                isActive
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            `
            }
          >
            <Icon size={18} />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

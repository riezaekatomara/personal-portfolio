"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { GraduationCap, Users, BookOpen, BarChart3 } from "lucide-react";

const menu = [
  {
    label: "Mahasiswa",
    href: "/dashboard/mahasiswa",
    icon: Users,
  },
  {
    label: "Mata Kuliah",
    href: "/dashboard/mata-kuliah",
    icon: BookOpen,
  },
  {
    label: "Nilai",
    href: "/dashboard/nilai",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 shadow-xl">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Siakad</h1>
              <p className="text-blue-200 text-sm">Dashboard</p>
            </div>
          </div>
          <div className="w-full h-px bg-blue-700"></div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          <p className="text-blue-100 text-xs uppercase tracking-wide font-semibold mb-4 px-3">
            Menu Utama
          </p>
          {menu.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group border",
                  isActive
                    ? "bg-white text-blue-900 shadow-lg transform scale-105 border-white"
                    : "text-white bg-blue-800/30 border-blue-600/20 hover:bg-white/20 hover:border-white/30 hover:transform hover:translate-x-1 backdrop-blur-sm"
                )}
              >
                <IconComponent
                  className={clsx(
                    "w-5 h-5 drop-shadow-sm",
                    isActive ? "text-blue-900" : "text-white"
                  )}
                />
                <span
                  className={clsx(
                    "font-medium drop-shadow-sm",
                    isActive
                      ? "font-semibold text-blue-900"
                      : "text-white font-semibold"
                  )}
                >
                  {item.label}
                </span>
                {isActive && (
                  <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer Info */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-blue-800 rounded-lg p-4 border border-blue-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Admin</p>
                <p className="text-blue-300 text-xs">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

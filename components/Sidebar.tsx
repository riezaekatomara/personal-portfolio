"use client";

import { usePathname } from "next/navigation";
import { GraduationCap, Users, BookOpen, BarChart3, X } from "lucide-react";
import { useEffect } from "react";

const menu = [
  { label: "Mahasiswa", href: "/dashboard/mahasiswa", icon: Users },
  { label: "Mata Kuliah", href: "/dashboard/mata-kuliah", icon: BookOpen },
  { label: "Nilai", href: "/dashboard/nilai", icon: BarChart3 },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export default function Sidebar({
  isOpen = true,
  onClose,
  isMobile = false,
}: SidebarProps) {
  const pathname = usePathname();

  // Auto-close sidebar saat route berubah di mobile
  useEffect(() => {
    if (isMobile && isOpen && onClose) {
      onClose();
    }
  }, [pathname, isMobile, isOpen, onClose]);

  // Cegah scroll saat sidebar terbuka di mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobile, isOpen]);

  const sidebarContent = (
    <div className="h-full flex flex-col">
      <div className="flex-1 p-4 sm:p-6">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold text-white">
                  Siakad
                </h1>
                <p className="text-blue-200 text-xs sm:text-sm">Dashboard</p>
              </div>
            </div>

            {isMobile && onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-blue-800 transition-colors"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            )}
          </div>
          <div className="w-full h-px bg-blue-700"></div>
        </div>

        <nav className="space-y-2">
          <p className="text-blue-100 text-xs uppercase tracking-wide font-semibold mb-4 px-3">
            Menu Utama
          </p>
          {menu.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-200 group border ${
                  isActive
                    ? "bg-white text-blue-900 shadow-lg scale-105 border-white"
                    : "text-white bg-blue-800/30 border-blue-600/20 hover:bg-white/20 hover:border-white/30 hover:translate-x-1 backdrop-blur-sm"
                }`}
              >
                <IconComponent
                  className={`w-4 h-4 sm:w-5 sm:h-5 drop-shadow-sm ${
                    isActive ? "text-blue-900" : "text-white"
                  }`}
                />
                <span
                  className={`font-medium drop-shadow-sm text-sm sm:text-base ${
                    isActive
                      ? "font-semibold text-blue-900"
                      : "text-white font-semibold"
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="p-4 sm:p-6">
        <div className="bg-blue-800 rounded-lg p-3 sm:p-4 border border-blue-700">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm font-bold">A</span>
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-medium">Admin</p>
              <p className="text-blue-300 text-xs">Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={onClose}
            role="presentation"
          />
        )}
        <aside
          className={`fixed top-0 left-0 z-50 w-64 h-full bg-gradient-to-b from-blue-900 to-blue-800 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-hidden={!isOpen}
        >
          {sidebarContent}
        </aside>
      </>
    );
  }

  return (
    <aside
      className={`fixed top-0 left-0 z-50 w-64 h-full bg-gradient-to-b from-blue-900 to-blue-800 shadow-xl transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {sidebarContent}
    </aside>
  );
}

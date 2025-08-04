"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/../../components/Sidebar"; // pastikan path sesuai
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (!isMobile) setIsSidebarOpen(false); // Tutup sidebar saat resize ke desktop
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  if (!isMounted) return null;

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar desktop */}
      <div className="hidden lg:block w-64 fixed left-0 top-0 h-full z-30">
        <Sidebar />
      </div>

      {/* Sidebar mobile */}
      {isMobile && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          isMobile={true}
        />
      )}

      {/* Konten utama */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 shadow-sm z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              {isMobile && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Toggle sidebar"
                >
                  <Menu className="w-5 h-5 text-gray-600" />
                </button>
              )}
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                  Siakad Dashboard
                </h1>
                <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">
                  Sistem Informasi Akademik
                </p>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              {new Date().toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </header>

        {/* Konten halaman */}
        <main className="min-h-screen bg-gray-50">
          <div className="p-4 sm:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

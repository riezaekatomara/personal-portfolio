"use client";

import { motion } from "framer-motion";
import { Book, Users, FileText, Home, ArrowLeft, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Sidebar from "@/../../components/Sidebar"; // Sesuaikan path

const modules = [
  {
    title: "Manajemen Mahasiswa",
    href: "/dashboard/mahasiswa",
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
    description: "Tambah, edit, dan kelola data mahasiswa kampus.",
  },
  {
    title: "Manajemen Mata Kuliah",
    href: "/dashboard/mata-kuliah",
    icon: <Book className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
    description: "Atur dan dokumentasikan data mata kuliah.",
  },
  {
    title: "Manajemen Nilai",
    href: "/dashboard/nilai",
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
    description: "Input, ekspor, dan analisa nilai akademik mahasiswa.",
  },
];

export default function DashboardHomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi ukuran layar
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative">
      {/* Header Section - Responsive */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-30">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Hamburger Menu (Mobile Only) */}
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-blue-50 transition-colors lg:hidden"
                aria-label="Toggle sidebar"
                aria-expanded={isSidebarOpen}
              >
                <Menu size={20} className="text-blue-600" />
              </button>

              {/* Back to Portfolio Link */}
              <a
                href="/"
                className="flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                  ke Web Profil Rieza
                </span>
                <span className="text-xs font-medium sm:hidden">
                  ke Web Profil Rieza
                </span>
              </a>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-gray-600">
                <span className="hidden sm:inline">Dashboard </span>Active
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMobile && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          isMobile={true}
        />
      )}

      {/* Main Content - Responsive */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.section
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              🎓 Dashboard Siakad
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-4 lg:max-w-2xl lg:mx-auto">
              Sistem Informasi Akademik untuk mengelola data mahasiswa, mata
              kuliah, dan nilai dengan interface yang modern dan user-friendly.
            </p>
          </div>

          {/* Info Banner */}
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200 mb-6 sm:mb-8">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Home className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-blue-800 text-sm sm:text-base mb-2">
                  Demo Dashboard
                </h3>
                <p className="text-blue-700 text-xs sm:text-sm leading-relaxed">
                  Ini adalah demo dashboard Siakad yang menunjukkan kemampuan
                  dalam membangun sistem informasi akademik. Semua fitur
                  berfungsi dengan data sample untuk keperluan demo.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Modules Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {modules.map((modul, index) => (
            <motion.article
              key={modul.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href={modul.href} className="block h-full">
                <div className="bg-white hover:shadow-xl transition-all duration-300 border hover:border-blue-400 h-full group rounded-xl p-4 sm:p-6">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors flex-shrink-0">
                      {modul.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                        {modul.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    {modul.description}
                  </p>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Ready to use</span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </section>

        {/* Features Section */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">
              ✨ Fitur Utama
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
              <li>• CRUD operations untuk semua entitas</li>
              <li>• Real-time data validation</li>
              <li>• Export data ke berbagai format</li>
              <li>• Responsive design untuk semua device</li>
              <li>• Modern UI dengan Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">
              🛠️ Tech Stack
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Quick Stats */}
        <motion.section
          className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center p-3 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl border border-gray-200">
            <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
              3
            </div>
            <div className="text-xs text-gray-600">Modules</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl border border-gray-200">
            <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">
              100%
            </div>
            <div className="text-xs text-gray-600">Functional</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl border border-gray-200">
            <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">
              Demo
            </div>
            <div className="text-xs text-gray-600">Mode</div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Dashboard ini dibuat sebagai bagian dari portfolio untuk
            mendemonstrasikan kemampuan pengembangan web
          </p>
        </motion.footer>
      </main>
    </div>
  );
}

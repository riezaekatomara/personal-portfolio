"use client";

import { Card, CardContent } from "@/../../components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Book, Users, FileText, Home, ArrowLeft } from "lucide-react";

const modules = [
  {
    title: "Manajemen Mahasiswa",
    href: "/dashboard/mahasiswa",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    description: "Tambah, edit, dan kelola data mahasiswa kampus.",
  },
  {
    title: "Manajemen Mata Kuliah",
    href: "/dashboard/mata-kuliah",
    icon: <Book className="w-6 h-6 text-green-600" />,
    description: "Atur dan dokumentasikan data mata kuliah.",
  },
  {
    title: "Manajemen Nilai",
    href: "/dashboard/nilai",
    icon: <FileText className="w-6 h-6 text-purple-600" />,
    description: "Input, ekspor, dan analisa nilai akademik mahasiswa.",
  },
];

export default function DashboardHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">
                  Kembali ke Portfolio
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Dashboard Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-10 px-4">
        {/* Welcome Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              🎓 Dashboard Siakad
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Sistem Informasi Akademik untuk mengelola data mahasiswa, mata
              kuliah, dan nilai dengan interface yang modern dan user-friendly.
            </p>
          </div>

          {/* Info Banner */}
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 border border-blue-200 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold text-blue-800">Demo Dashboard</h3>
            </div>
            <p className="text-blue-700 text-sm">
              Ini adalah demo dashboard Siakad yang menunjukkan kemampuan dalam
              membangun sistem informasi akademik. Semua fitur berfungsi dengan
              data sample untuk keperluan demo.
            </p>
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((modul, index) => (
            <motion.div
              key={modul.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={modul.href}>
                <Card className="hover:shadow-xl transition-all duration-300 border hover:border-blue-400 h-full group hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                        {modul.icon}
                      </div>
                      <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {modul.title}
                      </h2>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {modul.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-500">
                        Ready to use
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4">✨ Fitur Utama</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• CRUD operations untuk semua entitas</li>
              <li>• Real-time data validation</li>
              <li>• Export data ke berbagai format</li>
              <li>• Responsive design untuk semua device</li>
              <li>• Modern UI dengan Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4">🛠️ Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center p-4 bg-white/50 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
            <div className="text-xs text-gray-600">Modules</div>
          </div>
          <div className="text-center p-4 bg-white/50 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
            <div className="text-xs text-gray-600">Functional</div>
          </div>
          <div className="text-center p-4 bg-white/50 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-purple-600 mb-1">Demo</div>
            <div className="text-xs text-gray-600">Mode</div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-gray-500">
            Dashboard ini dibuat sebagai bagian dari portfolio untuk
            mendemonstrasikan kemampuan pengembangan web
          </p>
        </motion.div>
      </div>
    </div>
  );
}

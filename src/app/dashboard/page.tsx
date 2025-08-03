"use client";

import { Card, CardContent } from "@/../../components/ui/card";
import Link from "next/link";
import { motion } from "@/../../lib/motion";
import { Book, Users, FileText } from "lucide-react";

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
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-blue-800">
          🎓 Selamat Datang!
        </h1>
        <p className="text-gray-600">
          Silakan pilih modul di bawah ini untuk mulai mengelola data kampus.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((modul, index) => (
          <motion.div
            key={modul.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={modul.href}>
              <Card className="hover:shadow-lg transition-shadow border hover:border-blue-400 h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    {modul.icon}
                    <h2 className="text-lg font-semibold text-gray-800">
                      {modul.title}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-500">{modul.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

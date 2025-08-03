"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Code, Rocket } from "lucide-react";

export default function LanyardCard() {
  return (
    <motion.div
      className="w-64 h-96 bg-white shadow-xl rounded-xl p-6 flex flex-col items-center justify-center border-2 border-blue-600 relative"
      initial={{ y: 0 }}
      animate={{ y: [0, -2, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.05, rotate: 1 }}
    >
      {/* Titik gantungan */}
      <div className="absolute -top-4 w-4 h-4 bg-blue-600 rounded-full shadow-md"></div>

      {/* Foto Profil */}
      <Image
        src="/foto.jpg"
        width={100}
        height={100}
        alt="Foto Profil"
        className="rounded-full border-4 border-blue-600"
        priority
      />

      {/* Nama */}
      <h2 className="text-lg font-bold mt-4 text-center">Rieza Eka Tomara</h2>

      {/* Posisi */}
      <p className="text-sm text-gray-600 text-center">
        IT Administrator | Fullstack Web Developer
      </p>

      {/* Skills */}
      <div className="mt-4 text-xs text-gray-500 text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <GraduationCap size={14} className="text-blue-600" />
          <span>Sarjana Sistem Informasi</span>
        </div>

        {/* Skills dipecah jadi beberapa baris */}
        <div className="flex items-start justify-center gap-2">
          <Code size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
          <div className="text-center leading-tight">
            <div>TypeScript • React • Next.js</div>
            <div>Tailwind • Supabase</div>
            <div>PostgreSQL</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Rocket size={14} className="text-purple-600" />
          <span>Siakad Dashboard</span>
        </div>
      </div>
    </motion.div>
  );
}

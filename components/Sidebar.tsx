"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const menu = [
  { label: "Mahasiswa", href: "/dashboard/mahasiswa" },
  { label: "Mata Kuliah", href: "/dashboard/mata-kuliah" },
  { label: "Nilai", href: "/dashboard/nilai" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r p-4">
      <h1 className="text-xl font-bold mb-6">📘 SIAKAD Dashboard</h1>
      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "px-3 py-2 rounded hover:bg-blue-100",
              pathname === item.href ? "bg-blue-200 font-semibold" : ""
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

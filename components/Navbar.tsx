"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Briefcase, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.nav
        className="glass fixed top-0 left-0 right-0 z-50 h-16 shadow-xl border-b border-white/10 backdrop-blur-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <Link href="/" className="no-underline group">
              <motion.h1
                className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent hover:from-blue-700 hover:via-cyan-600 hover:to-teal-600 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                Rieza Eka Tomara
              </motion.h1>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive =
                path === item.href ||
                (item.href !== "/" && path.includes(item.href));

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 no-underline group relative overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-lg shadow-blue-500/30 border border-white/20"
                        : "text-gray-700 hover:text-blue-600 hover:bg-white/70 hover:shadow-lg"
                    }`}
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className={isActive ? "text-white" : ""}
                    >
                      <Icon size={14} />
                    </motion.div>
                    <span
                      className={isActive ? "text-white font-semibold" : ""}
                    >
                      {item.label}
                    </span>
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-white/70 transition-all duration-300"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed top-0 left-0 right-0 z-40 glass backdrop-blur-2xl border-b border-white/10 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isMenuOpen ? 0 : -100,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container mx-auto px-6 pt-20 pb-6">
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive =
                path === item.href ||
                (item.href !== "/" && path.includes(item.href));

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all duration-300 no-underline ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg border border-white/20"
                        : "text-gray-700 hover:text-blue-600 hover:bg-white/70"
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-white" : ""} />
                    <span
                      className={isActive ? "text-white font-semibold" : ""}
                    >
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}

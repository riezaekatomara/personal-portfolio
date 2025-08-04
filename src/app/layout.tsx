import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/../../components/Navbar";
import Footer from "@/../../components/Footer";

export const metadata = {
  title: "Portfolio - Rieza Eka Tomara",
  description:
    "Personal portfolio & project showcase - IT Administrator & Fullstack Web Developer",
  keywords:
    "portfolio, web developer, fullstack, react, next.js, typescript, sistem informasi",
  authors: [{ name: "Rieza Eka Tomara" }],
  creator: "Rieza Eka Tomara",
  openGraph: {
    title: "Portfolio - Rieza Eka Tomara",
    description:
      "Personal portfolio & project showcase - IT Administrator & Fullstack Web Developer",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Rieza Eka Tomara",
    description:
      "Personal portfolio & project showcase - IT Administrator & Fullstack Web Developer",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-inter bg-gradient-to-br from-slate-50 via-blue-50/20 to-cyan-50/30 text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
        {/* Background Pattern */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-white to-cyan-50/30" />

          {/* Floating gradient orbs */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-3/4 -right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Main layout */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-1">
            <div className="relative">
              {/* Content wrapper with improved spacing */}
              <div className="min-h-screen">{children}</div>
            </div>
          </main>

          <Footer />
        </div>

        {/* Scroll indicator */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <div className="flex flex-col space-y-2">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full opacity-60" />
            <div className="w-1 h-4 bg-slate-300 rounded-full" />
            <div className="w-1 h-4 bg-slate-300 rounded-full" />
          </div>
        </div>
      </body>
    </html>
  );
}

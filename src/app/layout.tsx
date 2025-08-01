import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SIAKAD Dashboard",
  description: "Sistem Informasi Akademik Mahasiswa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {/* Toaster untuk notifikasi global */}
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        {children}
      </body>
    </html>
  );
}

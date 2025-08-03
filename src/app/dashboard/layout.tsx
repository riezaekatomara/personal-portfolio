import Sidebar from "@/../../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Fixed positioning with proper top offset */}
      <div className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)]">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 pt-16">
        {/* Header Bar - Sticky, positioned below navbar */}
        <div className="sticky top-16 bg-white border-b border-gray-200 px-6 py-4 shadow-sm z-30">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Siakad Dashboard
              </h2>
              <p className="text-gray-600 text-sm">Sistem Informasi Akademik</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                {new Date().toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="min-h-screen bg-gray-50">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

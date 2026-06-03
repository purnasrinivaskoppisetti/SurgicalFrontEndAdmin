import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function ProtectedLayout({ children }) {
  return (
    <div className="bg-gray-50">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-[280px] z-40 overflow-hidden">
        <Sidebar />
      </div>

      {/* Fixed Header */}
      <div className="fixed top-0 left-[280px] right-0 z-30">
        <Header />
      </div>

      {/* Page Content */}
      <main className="ml-[280px] pt-[69px] min-h-screen">
        {children}
      </main>
    </div>
  );
}
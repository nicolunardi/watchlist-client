import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex flex-1 flex-col h-full">
            <Topbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

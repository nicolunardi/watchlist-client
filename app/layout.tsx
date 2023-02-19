import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/Topbar";
import "./globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`h-screen ${poppins.className}`}>
        <div className="flex h-full">
          <Sidebar />
          <main className="flex flex-1 flex-col h-full bg-primary-500 text-primary-100">
            <Topbar />
            <div className="flex-1 bg-blueAccent-800 p-10">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

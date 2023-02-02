"use client";
import "./globals.css";
import { Poppins } from "@next/font/google";
import Providers from "./Providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`app ${poppins.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

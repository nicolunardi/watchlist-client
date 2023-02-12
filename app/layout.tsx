"use client";

import "./globals.css";
import { Poppins } from "@next/font/google";
import Providers from "../providers/Providers";
import Content from "./Content";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className={`app ${poppins.className}`}>
        <Providers><Content>{children}</Content></Providers>
      </body>
    </html>
  );
}

export default RootLayout

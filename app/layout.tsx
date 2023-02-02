"use client";
import "./globals.css";
import { Poppins } from "@next/font/google";
import { ColorModeContext, useMode } from "../themes/Themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, colorMode] = useMode();
  return (
    <html lang="en">
      <head />
      <body className={`app ${poppins.className}`}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <Sidebar></Sidebar>
              <main className="content">
                <Topbar></Topbar>
                {children}
              </main>
            </CssBaseline>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}

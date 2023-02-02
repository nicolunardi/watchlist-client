import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../themes/Themes";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [theme, colorMode] = useMode();
  return (
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
  );
};

export default Providers;

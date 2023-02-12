import { tokens } from "@/themes/Themes";
import { Box, useTheme } from "@mui/material";

const Content = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{m: 4, p: 4, backgroundColor: colors.primary[400], height: 100, flexGrow: 1, borderRadius: 2}}>{children}</Box>
  )
}

export default Content;

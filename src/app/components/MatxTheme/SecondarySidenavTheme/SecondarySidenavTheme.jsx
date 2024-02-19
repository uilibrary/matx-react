import { ThemeProvider } from "@mui/material";

export default function SecondarySidenavTheme({ theme, children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

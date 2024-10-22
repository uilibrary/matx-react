import { ThemeProvider } from "@mui/material/styles";

export default function SecondarySidenavTheme({ theme, children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import useSettings from "app/hooks/useSettings";

export default function MatxTheme({ children }) {
  const { settings } = useSettings();
  let activeTheme = { ...settings.themes[settings.activeTheme] };

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

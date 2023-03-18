import { ThemeProvider } from '@mui/material';

const SecondarySidenavTheme = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default SecondarySidenavTheme;

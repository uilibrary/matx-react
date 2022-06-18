import { ThemeProvider } from '@mui/material';

const SecondarySidenavTheme = ({ theme, classes, children, open }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default SecondarySidenavTheme;

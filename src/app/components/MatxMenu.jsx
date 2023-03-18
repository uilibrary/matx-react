import { Fragment, useState, Children } from 'react';
import { Menu, ThemeProvider, Box, styled } from '@mui/material';
import useSettings from 'app/hooks/useSettings';

const MenuButton = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  color: theme.palette.text.primary,
  '& div:hover': { backgroundColor: theme.palette.action.hover }
}));

const MatxMenu = (props) => {
  const { settings } = useSettings();
  const [anchorEl, setAnchorEl] = useState(null);

  const children = Children.toArray(props.children);
  let { shouldCloseOnItemClick = true, horizontalPosition = 'left' } = props;

  const handleClose = () => setAnchorEl(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);

  return (
    <Fragment>
      <MenuButton onClick={handleClick}>{props.menuButton}</MenuButton>
      <ThemeProvider theme={settings.themes[settings.activeTheme]}>
        <Menu
          elevation={8}
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: horizontalPosition }}
          transformOrigin={{ vertical: 'top', horizontal: horizontalPosition }}
        >
          {children.map((child, index) => (
            <div onClick={shouldCloseOnItemClick ? handleClose : () => {}} key={index}>
              {child}
            </div>
          ))}
        </Menu>
      </ThemeProvider>
    </Fragment>
  );
};

export default MatxMenu;

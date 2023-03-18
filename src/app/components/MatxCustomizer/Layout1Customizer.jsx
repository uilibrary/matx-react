import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Icon,
  Paper,
  Radio,
  RadioGroup,
  styled,
  Switch,
  Tooltip
} from '@mui/material';
import { get } from 'lodash';
import { Fragment } from 'react';
import BadgeSelected from './BadgeSelected';
import { themeColors, themeShadows } from '../MatxTheme/themeColors';
import { mainSidebarThemes, topbarThemes } from './customizerOptions';

const sidebarBG = [
  '/assets/images/sidebar/sidebar-bg-dark.jpg',
  '/assets/images/sidebar/sidebar-bg-light.jpg'
];

const ThemeName = styled('div')(({ theme }) => ({
  marginBottom: '16px',
  color: theme.palette.text.secondary
}));

const ToolbarContainer = styled('div')({
  margin: '8px',
  display: 'flex',
  flexWrap: 'wrap'
});

const ToolbarContent = styled('div')(({ color }) => ({
  width: 40,
  height: 40,
  margin: '8px',
  cursor: 'pointer',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: themeShadows[3],
  background: themeColors[color].palette.primary.main
}));

const IMG = styled('img')({
  width: '100%',
  maxHeight: 152,
  display: 'block'
});

const Layout1Customizer = ({ settings, handleChange, handleControlChange }) => {
  return (
    <Fragment>
      <Box mb="16px" mx="12px">
        <ThemeName>Sidebar theme</ThemeName>
        <ToolbarContainer>
          {mainSidebarThemes.map((color, i) => (
            <Tooltip key={i} title={color} placement="top">
              <ToolbarContent
                color={color}
                onClick={() => handleChange('layout1Settings.leftSidebar.theme', color)}
              >
                {settings.layout1Settings.leftSidebar.theme === color && <Icon>done</Icon>}
                <div className={settings.themes[color].palette.type}></div>
              </ToolbarContent>
            </Tooltip>
          ))}
        </ToolbarContainer>
      </Box>

      <Box mb="32px" mx="12px">
        <ThemeName>Sidebar theme</ThemeName>
        <ToolbarContainer>
          {topbarThemes.map((color, i) => (
            <Tooltip key={i} title={color} placement="top">
              <ToolbarContent
                color={color}
                onClick={() => handleChange('layout1Settings.topbar.theme', color)}
              >
                {settings.layout1Settings.topbar.theme === color && <Icon>done</Icon>}
                <div className={settings.themes[color].palette.type}></div>
              </ToolbarContent>
            </Tooltip>
          ))}
        </ToolbarContainer>
      </Box>

      <Box mb="18px" mx="12px">
        <FormControl component="fieldset">
          <FormLabel component="legend">Sidebar mode</FormLabel>
          <RadioGroup
            aria-label="Sidebar"
            name="leftSidebar"
            value={settings.layout1Settings.leftSidebar.mode}
            onChange={handleControlChange('layout1Settings.leftSidebar.mode')}
          >
            <FormControlLabel value="full" control={<Radio />} label="Full" />
            <FormControlLabel value="close" control={<Radio />} label="Close" />
            <FormControlLabel value="compact" control={<Radio />} label="Compact" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box mb="32px" mx="12px">
        <ThemeName sx={{ mb: 4 }}>Sidebar background image</ThemeName>
        <div>
          <Grid container spacing={3}>
            {sidebarBG.map((bg, i) => (
              <Grid item xs={4} key={i}>
                <BadgeSelected
                  color="primary"
                  badgeContent={<Icon>done</Icon>}
                  invisible={settings.layout1Settings.leftSidebar.bgImgURL !== bg}
                  sx={{ width: '100%', height: '100%', cursor: 'pointer' }}
                >
                  <Paper onClick={() => handleChange('layout1Settings.leftSidebar.bgImgURL', bg)}>
                    <IMG src={bg} alt="" />
                  </Paper>
                </BadgeSelected>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>

      <Box mb="24px" mx="12px">
        <FormControl component="fieldset">
          <FormLabel component="legend">Topbar</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={get(settings.layout1Settings.topbar, 'show')}
                  onChange={handleControlChange('layout1Settings.topbar.show')}
                />
              }
              label="Show"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={get(settings.layout1Settings.topbar, 'fixed')}
                  onChange={handleControlChange('layout1Settings.topbar.fixed')}
                />
              }
              label="Fixed"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default Layout1Customizer;

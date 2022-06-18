import { Icon, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { topBarHeight } from 'app/utils/constant';
import React, { useState } from 'react';

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 9,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: topBarHeight,
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  '&::placeholder': {
    color: theme.palette.text.primary,
  },
}));

const SearchInput = styled('input')(({ theme }) => ({
  width: '100%',
  border: 'none',
  outline: 'none',
  fontSize: '1rem',
  paddingLeft: '20px',
  height: 'calc(100% - 5px)',
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  '&::placeholder': { color: theme.palette.text.primary },
}));

const MatxSearchBox = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const { palette } = useTheme();
  const textColor = palette.text.primary;

  return (
    <React.Fragment>
      {!open && (
        <IconButton onClick={toggle}>
          <Icon sx={{ color: textColor }}>search</Icon>
        </IconButton>
      )}

      {open && (
        <SearchContainer>
          <SearchInput type="text" placeholder="Search here..." autoFocus />
          <IconButton onClick={toggle} sx={{ mx: 2, verticalAlign: 'middle' }}>
            <Icon sx={{ color: textColor }}>close</Icon>
          </IconButton>
        </SearchContainer>
      )}
    </React.Fragment>
  );
};

export default MatxSearchBox;

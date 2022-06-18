import { styled } from '@mui/material';

const Content = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  position: 'relative',
}));

const MatxSidenavContent = ({ children }) => {
  return <Content>{children}</Content>;
};

export default MatxSidenavContent;

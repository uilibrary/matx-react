import { styled } from '@mui/material';
import { topBarHeight } from 'app/utils/constant';
import clsx from 'clsx';
import { cloneElement, useState } from 'react';

const PopupRoot = styled('div')(({ theme }) => ({
  '& .popupOpen': {
    top: topBarHeight + 16,
    [theme.breakpoints.down('sm')]: { bottom: 0 },
  },
  '& .closeIcon': {
    position: 'absolute',
    top: 6,
    right: 6,
  },
}));

const Popup = styled('div')(({ theme }) => ({
  position: 'fixed',
  right: theme.spacing(2),
  bottom: theme.spacing(2),
  top: '100vh',
  transition: 'top 250ms ease-in-out',
  boxShadow: theme.shadows[6],
  borderRadius: 6,
  zIndex: 99999,
  width: 360,
  overflow: 'hidden',
  '@media only screen and (max-width: 450px)': {
    width: 'calc(100% - 32px)',
    left: theme.spacing(2),
  },
}));

const ChatHead = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  const togglePopup = async () => {
    setOpen((open) => !open);
  };

  return (
    <PopupRoot>
      {cloneElement(icon, { onClick: togglePopup })}
      <Popup className={clsx({ popupOpen: open })}>
        {open ? cloneElement(children, { togglePopup }) : null}
      </Popup>
    </PopupRoot>
  );
};

export default ChatHead;

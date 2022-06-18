import { Badge, Button, Drawer, Icon, IconButton, ThemeProvider } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import useAuth from 'app/hooks/useAuth';
import useSettings from 'app/hooks/useSettings';
import {
  deleteProductFromCart,
  getCartList,
  updateCartAmount,
} from 'app/redux/actions/EcommerceActions';
import { sideNavWidth, topBarHeight } from 'app/utils/constant';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { themeShadows } from './MatxTheme/themeColors';
import { H6, Small } from './Typography';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '& span': {
    color: theme.palette.text.primary,
  },
  '& #disable': {
    color: theme.palette.text.disabled,
  },
}));

const MiniCart = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  width: sideNavWidth,
}));

const CartBox = styled('div')(() => ({
  padding: '4px',
  paddingLeft: '16px',
  display: 'flex',
  alignItems: 'center',
  boxShadow: themeShadows[6],
  height: topBarHeight,
  '& h5': {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: '16px',
    fontWeight: '500',
  },
}));

const ProductBox = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 8px',
  transition: 'background 300ms ease',
  '&:hover': {
    background: 'rgba(0,0,0,0.01)',
  },
}));

const IMG = styled('img')(() => ({
  width: 48,
}));

const ProductDetails = styled('div')(() => ({
  marginRight: '8',
  textAlign: 'center',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  '& h6': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    width: 120,
    marginBottom: '4px',
  },
}));

let cartListLoaded = false;

function ShoppingCart({ container }) {
  const [totalCost, setTotalCost] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cartList } = useSelector((state) => state.ecommerce);
  const { settings } = useSettings();
  const theme = useTheme();
  const secondary = theme.palette.text.secondary;

  if (!cartListLoaded) {
    dispatch(getCartList(user.id));
    cartListLoaded = true;
  }

  const handleDrawerToggle = () => {
    setPanelOpen(!panelOpen);
  };

  const handleCheckoutClick = () => {
    if (totalCost > 0) {
      navigate('/ecommerce/checkout');
      setPanelOpen(false);
    }
  };

  useEffect(() => {
    let total = 0;

    cartList.forEach((product) => {
      total += product.price * product.amount;
    });
    setTotalCost(total);
  }, [cartList]);

  const { palette } = useTheme();
  const textColor = palette.text.primary;

  return (
    <Fragment>
      <IconButton onClick={handleDrawerToggle}>
        <Badge color="secondary" badgeContent={cartList.length}>
          <Icon sx={{ color: textColor }}>shopping_cart</Icon>
        </Badge>
      </IconButton>

      <ThemeProvider theme={settings.themes[settings.activeTheme]}>
        <Drawer
          container={container}
          variant="temporary"
          anchor={'right'}
          open={panelOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <MiniCart>
            <CartBox>
              <Icon color="primary">shopping_cart</Icon>
              <h5>Cart</h5>
            </CartBox>

            <Box flexGrow={1} overflow="auto">
              {cartList.map((product) => (
                <ProductBox key={product.id}>
                  <Box mr="4px" display="flex" flexDirection="column">
                    <StyledIconButton
                      size="small"
                      onClick={() =>
                        dispatch(updateCartAmount(user.id, product.id, product.amount + 1))
                      }
                    >
                      <Icon sx={{ cursor: 'pinter' }}>keyboard_arrow_up</Icon>
                    </StyledIconButton>
                    <StyledIconButton
                      disabled={!(product.amount - 1)}
                      size="small"
                      onClick={() =>
                        dispatch(updateCartAmount(user.id, product.id, product.amount - 1))
                      }
                    >
                      <Icon id={!(product.amount - 1) && 'disable'}>keyboard_arrow_down</Icon>
                    </StyledIconButton>
                  </Box>
                  <Box mr={1}>
                    <IMG src={product.imgUrl} alt={product.title} />
                  </Box>
                  <ProductDetails>
                    <H6>{product.title}</H6>
                    <Small sx={{ color: secondary }}>
                      ${product.price} x {product.amount}
                    </Small>
                  </ProductDetails>
                  <StyledIconButton
                    size="small"
                    onClick={() => dispatch(deleteProductFromCart(user.userId, product.id))}
                  >
                    <Icon fontSize="small">clear</Icon>
                  </StyledIconButton>
                </ProductBox>
              ))}
            </Box>

            <Button
              sx={{ width: '100%', borderRadius: 0 }}
              variant="contained"
              color="primary"
              onClick={handleCheckoutClick}
            >
              Checkout (${totalCost.toFixed(2)})
            </Button>
          </MiniCart>
        </Drawer>
      </ThemeProvider>
    </Fragment>
  );
}

export default ShoppingCart;

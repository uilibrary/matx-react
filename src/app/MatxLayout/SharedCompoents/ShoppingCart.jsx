import React from "react";
import {
  Icon,
  Badge,
  MuiThemeProvider,
  IconButton,
  Drawer
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  getCartList,
  deleteProductFromCart,
  updateCartAmount
} from "app/redux/actions/EcommerceActions";

let cartListLoaded = false;

function ShoppingCart(props) {
  const {
    container,
    theme,
    settings,
    cartList = [],
    getCartList,
    deleteProductFromCart,
    updateCartAmount,
    user
  } = props;

  const [panelOpen, setPanelOpen] = React.useState(false);

  if (!cartListLoaded) {
    getCartList(user.userId);
    cartListLoaded = true;
  }

  function handleDrawerToggle() {
    setPanelOpen(!panelOpen);
  }

  const parentThemePalette = theme.palette;

  return (
    <MuiThemeProvider theme={settings.themes[settings.activeTheme]}>
      <IconButton
        onClick={handleDrawerToggle}
        style={{
          color:
            parentThemePalette.type === "light"
              ? parentThemePalette.text.secondary
              : parentThemePalette.text.primary
        }}
      >
        <Badge color="secondary" badgeContent={cartList.length}>
          <Icon>shopping_cart</Icon>
        </Badge>
      </IconButton>

      <Drawer
        container={container}
        variant="temporary"
        anchor={"right"}
        open={panelOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
      >
        <div className="mini-cart">
          <div className="cart__topbar flex flex-middle p-16 mb-24">
            <Icon color="primary">shopping_cart</Icon>
            <h5 className="ml-8 my-0 font-weight-500">Cart</h5>
          </div>

          {cartList.map(product => (
            <div
              key={product.id}
              className="mini-cart__item flex flex-middle flex-space-between py-16 px-8"
            >
              <div className="flex flex-column mr-8">
                <IconButton
                  size="small"
                  onClick={() =>
                    updateCartAmount(
                      user.userId,
                      product.id,
                      product.amount + 1
                    )
                  }
                >
                  <Icon className="cursor-pointer">keyboard_arrow_up</Icon>
                </IconButton>
                <IconButton
                  disabled={!(product.amount - 1)}
                  size="small"
                  onClick={() =>
                    updateCartAmount(
                      user.userId,
                      product.id,
                      product.amount - 1
                    )
                  }
                >
                  <Icon className="cursor-pointer">keyboard_arrow_down</Icon>
                </IconButton>
              </div>
              <div className="mr-8">
                <img src={product.imgUrl} alt={product.title} />
              </div>
              <div className="mr-8 text-center">
                <h6 className="m-0 mb-4">{product.title}</h6>
                <small className="text-muted">
                  ${product.price} x {product.amount}
                </small>
              </div>
              <IconButton
                size="small"
                onClick={() => deleteProductFromCart(user.userId, product.id)}
              >
                <Icon fontSize="small">clear</Icon>
              </IconButton>
            </div>
          ))}
        </div>
      </Drawer>
    </MuiThemeProvider>
  );
}

ShoppingCart.propTypes = {
  settings: PropTypes.object.isRequired,
  cartList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  settings: state.layout.settings,
  getCartList: PropTypes.func.isRequired,
  deleteProductFromCart: PropTypes.func.isRequired,
  updateCartAmount: PropTypes.func.isRequired,
  cartList: state.ecommerce.cartList,
  user: state.user
});

export default withStyles({}, { withTheme: true })(
  connect(
    mapStateToProps,
    { getCartList, deleteProductFromCart, updateCartAmount }
  )(ShoppingCart)
);

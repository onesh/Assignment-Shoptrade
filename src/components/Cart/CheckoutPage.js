import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { Alert } from "react-bootstrap";
import { removeFromCart, updateProductCount } from "../../actions/cartActions";

function CheckoutPage(props) {
  const { cartItems, removeFromCart, updateProductCount } = props;
  debugger;

  const headingStyle = {
    textAlign: "center",
    margin: "50px",
  };

  return (
    <div>
      <h1 style={headingStyle}> Shopping Cart</h1>
      <br />
      {cartItems.length === 0 ? (
        <Alert variant="secondary">Basket is empty</Alert>
      ) : (
        <div>
          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            You have {cartItems.reduce((a, c) => a + Number(c.count), 0)} items
            in the basket. <i className="fa fa-2x fa-shopping-cart"></i>
          </div>
          <CartItems
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateProductCount={updateProductCount}
          />
        </div>
      )}

      <br />
      <div style={{ textAlign: "right", margin: "20px" }}>
        <Link
          to="/"
          className="btn btn-secondary"
          style={{ marginTop: "20px" }}
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { removeFromCart, updateProductCount })(
  CheckoutPage
);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

class ShoppingCart extends Component {
  render() {
    const cartItems = this.props.cartItems;

    return (
      <div>
        <Link to="/checkout">
          <i className="fa fa-3x fa-shopping-cart"></i>
          <Badge variant="light">
            {cartItems.reduce((a, c) => a + Number(c.count), 0)}
          </Badge>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps)(ShoppingCart);

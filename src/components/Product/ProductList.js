import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { fetchProducts } from "../../actions/productActions";
import Product from "./Product";
import { CardColumns } from "react-bootstrap";
import "../../productGrid.scss";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchProductsAction();
  }
  render() {
    const { addToCartAction, cartItems } = this.props;
    return (
      <CardColumns style={{ marginTop: "100px" }}>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            className="product-option"
            addToCart={addToCartAction}
            cartItems={cartItems}
          />
        ))}
      </CardColumns>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProductsAction: () => dispatch(fetchProducts()),
  addToCartAction: (items, product) => dispatch(addToCart(items, product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

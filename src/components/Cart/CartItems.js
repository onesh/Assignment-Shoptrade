import React from "react";
import { Table } from "react-bootstrap";
import CartItem from "./CartItem";

function CartItems(props) {
  const { cartItems, removeFromCart, updateProductCount } = props;
  function handleProductDelete(product) {
    removeFromCart(cartItems, product);
  }

  function setProductCount(product, count) {
    updateProductCount(cartItems, product, count);
  }
  return (
    <div>
      <Table striped hover>
        <thead>
          <tr>
            <th></th>
            <th>Vendor</th>
            <th>Name</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleProductDelete={handleProductDelete}
              setProductCount={setProductCount}
            />
          ))}
        </tbody>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>Total Price</th>
          <th>Rs. {cartItems.reduce((a, c) => a + c.price * c.count, 0)}</th>
        </tr>
      </Table>
    </div>
  );
}

export default CartItems;

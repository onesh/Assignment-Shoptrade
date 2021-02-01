import React from "react";

const CartItem = ({ product, handleProductDelete, setProductCount }) => {
  const imgIcon = {
    height: "150px",
    width: "120px",
  };

  function updateCount(e) {
    setProductCount(product, e.target.value);
  }

  return (
    <tr>
      <td>
        <img src={product.image_src} style={imgIcon} alt="product-img"></img>
      </td>
      <td>{product.vendor}</td>
      <td>{product.name}</td>
      <td>{product.selectedOption}</td>
      <td>
        <input type="text" onChange={updateCount} value={product.count} />{" "}
      </td>
      <td>{product.price}</td>
      <button
        style={{ float: "center", marginTop: "50px" }}
        className="btn btn-danger btn-xs"
        onClick={(e) => handleProductDelete(product)}
      >
        X
      </button>
    </tr>
  );
};

export default CartItem;

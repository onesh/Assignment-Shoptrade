import React from "react";
import { connect } from "react-redux";
import { filterProducts } from "../../actions/productActions";
import { Button } from "react-bootstrap";

function Filter(props) {
  const { products, filterProducts } = props;

  let uniqueTags = [...new Set(products.map((item) => item.tag))];

  const filterButtonStyle = {
    borderRadius: "30px",
    borderColor: "darkgray",
    margin: "5px",
  };

  return (
    <div style={{ margin: "10px" }}>
      <Button
        variant="outline-secondary"
        value=""
        style={filterButtonStyle}
        onClick={(event) => {
          filterProducts(products, event.target.value);
        }}
      >
        All Products
      </Button>

      {uniqueTags.map((tag) => (
        <Button
          variant="outline-secondary"
          id={tag}
          key={tag}
          value={tag}
          style={filterButtonStyle}
          onClick={(event) => {
            filterProducts(products, event.target.value);
          }}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  tag: state.products.tag,
});
export default connect(mapStateToProps, { filterProducts })(Filter);

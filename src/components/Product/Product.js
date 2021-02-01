import React from "react";

import { Card, Button } from "react-bootstrap";
import ProductOptions from "./ProductOptions.js";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      showVariants: false,
      showAddToCartOption: false,
    };
  }

  handleOptionClick = (value) => {
    const selectedOptionId = this.props.product.options
      .filter((x) => x.value === value)
      .map((x) => x.id)
      .toString();
    this.setState({
      selectedOption: value,
      showAddToCartOption: true,
      selectedOptionId: selectedOptionId,
    });
  };

  handleAddToCart = (product) => {
    if (this.state.selectedOption === "") {
      alert("Please select a size");
    } else {
      const productClone = JSON.parse(JSON.stringify(product));
      productClone.selectedOption = this.state.selectedOption;
      productClone.selectedOptionId = this.state.selectedOptionId;
      this.props.addToCart(this.props.cartItems, productClone);
      alert("Product Added to Cart");
    }
  };

  render() {
    const { product } = this.props;

    return (
      <Card
        style={{ width: "18em" }}
        onMouseEnter={() => this.setState({ showVariants: true })}
        onMouseLeave={() =>
          this.setState({ showVariants: false, showAddToCartOption: false })
        }
      >
        <Card.Img variant="top" src={this.props.product.image_src} />
        <Card.Body>
          {!this.state.showVariants && (
            <div>
              {" "}
              <Card.Title>{this.props.product.vendor}</Card.Title>
              <Card.Text style={{ height: "50px" }}>
                {this.props.product.name}
              </Card.Text>
            </div>
          )}

          {this.state.showVariants && (
            <ProductOptions
              options={this.props.product.options}
              handleOptionClick={this.handleOptionClick}
            />
          )}

          {this.state.showAddToCartOption && (
            <Button
              variant="secondary"
              onClick={() => this.handleAddToCart(product)}
              style={{ width: "-webkit-fill-available", marginTop: "15px" }}
            >
              Add to Cart
            </Button>
          )}

          <Card.Title style={{ marginTop: "15px" }}>
            {" "}
            Rs. {this.props.product.price}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;

import React from "react";
import Filter from "../Filter/Filter";
import ShoppingCart from "../Cart/ShoppingCart";
import { Navbar, Nav } from "react-bootstrap";

const ProductPageHeader = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand href="/">ShopTrade</Navbar.Brand>
        <Nav className="mr-auto">
          <Filter />
        </Nav>
        <Nav className="justify-content-end" style={{ marginRight: "120px" }}>
          <ShoppingCart />
        </Nav>
      </Navbar>
    </div>
  );
};

export default ProductPageHeader;

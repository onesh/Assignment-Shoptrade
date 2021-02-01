import React from "react";
import ProductList from "../Product/ProductList";
import ProductPageHeader from "../Product/ProductPageHeader";

const HomePage = () => (
  <div>
    <div>
      <ProductPageHeader />
      <ProductList />
    </div>
  </div>
);

export default HomePage;

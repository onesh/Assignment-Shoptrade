import React from "react";
import "../../product.css";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

function ProductOptions(props) {
  let { options, handleOptionClick } = props;

  function handleSelectedOption(value) {
    handleOptionClick(value); // pass any argument to the callback
  }

  return (
    <ToggleButtonGroup
      type="radio"
      name="options"
      onChange={handleSelectedOption}
      style={{ display: "block" }}
    >
      {options.map((option) => (
        <ToggleButton
          variant="outline-secondary"
          size="sm"
          id={option.id}
          key={option.id}
          value={option.value}
          className="btn-circle btn-sm"
          style={{ borderRadius: "50px", borderColor: "darkgray" }}
        >
          {option.value}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default ProductOptions;

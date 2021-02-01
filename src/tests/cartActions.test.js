import * as actions from "../actions/cartActions";
import * as types from "../actions/types";

describe("actions", () => {
  it("should create an action to add an item to cart", () => {
    const items = [];
    const itemtoAdd = { id: 1, name: "product 1" };
    const cartItems = [{ id: 1, name: "product 1", count: 1 }];
    debugger;
    const expectedAction = {
      type: types.ADD_TO_CART,
      payload: { cartItems },
    };

    const retnFunc = actions.addToCart(items, itemtoAdd);
    retnFunc((receivedAction) => {
      expect(receivedAction).toEqual(expectedAction);
    });
  });
});

describe("actions", () => {
  it("should create an action to delete an item from cart", () => {
    const itemtoDelete = { id: 2, name: "product 2", count: 1 };
    const items = [
      { id: 1, name: "product 1", count: 1 },
      { id: 2, name: "product 2", count: 1 },
    ];
    const cartItems = [{ id: 1, name: "product 1", count: 1 }];
    const expectedAction = {
      type: types.REMOVE_FROM_CART,
      payload: { cartItems },
    };

    const retnFunc = actions.removeFromCart(items, itemtoDelete);
    retnFunc((receivedAction) => {
      expect(receivedAction).toEqual(expectedAction);
    });
  });
});

describe("actions", () => {
  it("should create an action to update an item count", () => {
    const product = {
      id: 2,
      name: "product 2",
      count: 1,
      selectedOptionId: 102,
    };
    const cartItems = [
      { id: 1, name: "product 1", count: 1, selectedOptionId: 101 },
      { id: 2, name: "product 2", count: 2, selectedOptionId: 102 },
    ];
    const count = 2;
    const expectedAction = {
      type: types.UPDATE_PRODUCT_COUNT,
      payload: { cartItems },
    };

    const retnFunc = actions.updateProductCount(cartItems, product, count);
    retnFunc((receivedAction) => {
      expect(receivedAction).toEqual(expectedAction);
    });
  });
});

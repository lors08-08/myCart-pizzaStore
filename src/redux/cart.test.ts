import { CartState } from "./types";
import { loadCart, loadMenu } from "./actions";
import cart from "./cart";

let state: CartState;

beforeEach(() => {
  state = {
    loadingCart: false,
    addingItem: false,
    deletingItem: false,

    cartItems: [
      {
        name: "Peperoni",
        price: 350,
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCyEFr6ubZ-wSv2Dzj-lmtRngIQLIj5wh4WQ&usqp=CAU",
        quantity: 1,
        id: 1,
      },
    ],
  };
});

test("Cart items are loaded", () => {
  // @ts-ignore
  const newCartState = cart(state, loadCart());

  expect(newCartState.cartItems).toBe(state.cartItems);
});

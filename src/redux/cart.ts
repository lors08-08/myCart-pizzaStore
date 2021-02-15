import {
  cart_amount_start,
  cart_amount_succeed,
  cart_delete_start,
  cart_delete_succeed,
  cart_deleteAllItems,
  cart_load_start,
  cart_load_succeed,
  cart_order_start,
  cart_order_succeed,
  CartAction,
  CartItems,
  CartState,
} from "./types";

const initialState: CartState = {
  loadingCart: false,
  addingItem: false,
  deletingItem: false,

  cartItems: [],
};

function cart(state = initialState, action: CartAction): CartState {
  switch (action.type) {
    case cart_load_start:
      return {
        ...state,
        loadingCart: true,
      };
    case cart_load_succeed:
      return {
        ...state,
        loadingCart: false,
        cartItems: action.payload,
      };
    case cart_order_start:
      return {
        ...state,
        addingItem: true,
      };
    case cart_order_succeed:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        addingItem: false,
      };
    case cart_amount_start:
      return {
        ...state,
        addingItem: true,
      };
    case cart_amount_succeed:
      return {
        ...state,
        cartItems: state.cartItems.map((item: CartItems) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.amount,
            };
          }
          return item;
        }),
        addingItem: false,
      };
    case cart_delete_start:
      return {
        ...state,
        deletingItem: true,
      };
    case cart_delete_succeed:
      return {
        ...state,
        cartItems: state.cartItems?.filter(
          (item: any) => item.id !== action.payload
        ),
        deletingItem: false,
      };
    case cart_deleteAllItems:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
}

export default cart;

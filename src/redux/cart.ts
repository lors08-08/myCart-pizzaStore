import {
  cart_delete_start,
  cart_delete_succeed,
  cart_deleteAll_start,
  cart_deleteAll_succeed,
  cart_load_start,
  cart_load_succeed,
  cart_order_start,
  cart_order_succeed,
  CartAction,
  CartState,
} from "./types";


const initialState: CartState = {
  loadingCart: false,
  addingItem: false,
  deletingItem: false,

  cartItems: null,
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
        cartItems: [{ ...state.cartItems }, action.payload],
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
        cartItems: state.cartItems?.filter((item:any) => item.id !== action.payload),
        deletingItem: false,
      };
    case cart_deleteAll_start:
      return {
        ...state,
        deletingItem: true,
      };
    case cart_deleteAll_succeed:
      return {
        ...state,
        cartItems: state.cartItems.filter(() => false),
        deletingItem: false,
      };
    default:
      return state;
  }
}

export default cart;

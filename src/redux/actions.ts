import { ThunkAction } from "redux-thunk";
import { RootState } from "./index";
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
  menu_load_start,
  menu_load_succeed,
  MenuAction,
} from "./types";

export function loadCart(): ThunkAction<void, RootState, null, CartAction> {
  return (dispatch) => {
    dispatch({ type: cart_load_start });

    fetch("http://localhost:3010/cart")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: cart_load_succeed,
          payload: json,
        });
      });
  };
}

export function loadMenu(): ThunkAction<void, RootState, null, MenuAction> {
  return (dispatch) => {
    dispatch({ type: menu_load_start });

    fetch("http://localhost:3010/menu")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: menu_load_succeed,
          payload: json,
        });
      });
  };
}

export function addItem(
  name: string,
  price: number,
  src: string,
  quantity: number
): ThunkAction<void, RootState, null, CartAction> {
  return (dispatch) => {
    dispatch({ type: cart_order_start });
    fetch("http://localhost:3010/cart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        src,
        quantity,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: cart_order_succeed,
          payload: json,
        });
      });
  };
}

export function deleteItem(
  id: number
): ThunkAction<void, RootState, null, CartAction> {
  return (dispatch) => {
    dispatch({ type: cart_delete_start });
    fetch(`http://localhost:3010/cart/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: cart_delete_succeed,
          payload: id,
        });
      });
  };
}

export function deleteAllItems(): ThunkAction<
  void,
  RootState,
  null,
  CartAction
> {
  return (dispatch) => {
    dispatch({ type: cart_deleteAllItems });
  };
}

export function SetAmount(
  id: number,
  amount: number
): ThunkAction<void, RootState, null, CartAction> {
  return (dispatch) => {
    dispatch({ type: cart_amount_start });
    fetch(`http://localhost:3010/cart/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: amount,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: cart_amount_succeed,
          payload: { id, amount },
        });
      });
  };
}

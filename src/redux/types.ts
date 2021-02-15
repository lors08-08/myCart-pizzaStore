export const menu_load_start = "menu_load_start";
export const menu_load_succeed = "menu_load_succeed";

export const cart_load_start = "cart_load_start";
export const cart_load_succeed = "cart_load_succeed";

export const cart_order_start = "cart_order_start";
export const cart_order_succeed = "cart_order_succeed";

export const cart_amount_start = "cart_amount_start";
export const cart_amount_succeed = "cart_amount_succeed";

export const cart_delete_start = "cart_delete_start";
export const cart_delete_succeed = "cart_delete_succeed";

export const cart_deleteAllItems = "cart_deleteAllItems";

export interface MenuItems {
  id: number;
  name: string;
  price: number;
  src: string;
}

export interface MenuState {
  loadingMenu: boolean;
  menuItems: MenuItems[];
}

export interface PayloadAmount {
  id: number;
  amount: number;
}

interface GetMenuItemsStartAction {
  type: typeof menu_load_start;
}
interface GetMenuItemsSucceedAction {
  type: typeof menu_load_succeed;
  payload: MenuItems[];
}

export interface CartItems {
  id: number;
  name: string;
  price: number;
  src: string;
  quantity: number;
  length?: number;
}

export interface CartState {
  loadingCart: boolean;
  addingItem: boolean;
  deletingItem: boolean;

  cartItems: CartItems[];
}

interface GetCartItemsStartAction {
  type: typeof cart_load_start;
}
interface GetCartItemsSucceedAction {
  type: typeof cart_load_succeed;
  payload: CartItems[];
}

interface SetOrderStartAction {
  type: typeof cart_order_start;
}
interface SetOrderSucceedAction {
  type: typeof cart_order_succeed;
  payload: CartItems;
}

interface SetAmountStartAction {
  type: typeof cart_amount_start;
}
interface SetAmountSucceedAction {
  type: typeof cart_amount_succeed;
  payload: PayloadAmount;
}

interface SetDeleteStartAction {
  type: typeof cart_delete_start;
}
interface SetDeleteSucceedAction {
  type: typeof cart_delete_succeed;
  payload: CartItems | number;
}

interface SetDeleteAllItemsAction {
  type: typeof cart_deleteAllItems;
}

export type MenuAction = GetMenuItemsStartAction | GetMenuItemsSucceedAction;
export type CartAction =
  | GetCartItemsStartAction
  | GetCartItemsSucceedAction
  | SetOrderStartAction
  | SetOrderSucceedAction
  | SetAmountStartAction
  | SetAmountSucceedAction
  | SetDeleteStartAction
  | SetDeleteSucceedAction
  | SetDeleteAllItemsAction;

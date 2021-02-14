export const menu_load_start = "menu_load_start";
export const menu_load_succeed = "menu_load_succeed";

export const cart_load_start = "cart_load_start";
export const cart_load_succeed = "cart_load_succeed";

export const cart_order_start = "cart_order_start";
export const cart_order_succeed = "cart_order_succeed";

export const cart_delete_start = "cart_delete_start";
export const cart_delete_succeed = "cart_delete_succeed";

export const cart_deleteAll_start = "cart_deleteAll_start";
export const cart_deleteAll_succeed = "cart_deleteAll_succeed";

export interface MenuItems {
  id: number;
  name: string;
  price: number;
  src: string;
}

export interface MenuState {
  loadingMenu: boolean;
  menuItems: MenuItems | null;
}

interface GetMenuItemsStartAction {
  type: typeof menu_load_start;
}
interface GetMenuItemsSucceedAction {
  type: typeof menu_load_succeed;
  payload: MenuItems;
}

export interface CartItems {
  menuId: number;
  id: number;
}

export interface CartState {
  loadingCart: boolean;
  addingItem: boolean;
  deletingItem: boolean;

  cartItems: CartItems | null | any[];
}

interface GetCartItemsStartAction {
  type: typeof cart_load_start;
}
interface GetCartItemsSucceedAction {
  type: typeof cart_load_succeed;
  payload: CartItems;
}

interface SetOrderStartAction {
  type: typeof cart_order_start;
}
interface SetOrderSucceedAction {
  type: typeof cart_order_succeed;
  payload: CartItems;
}

interface SetDeleteStartAction {
  type: typeof cart_delete_start;
}
interface SetDeleteSucceedAction {
  type: typeof cart_delete_succeed;
  payload: CartItems;
}

interface SetDeleteAllStartAction {
  type: typeof cart_deleteAll_start;
}
interface SetDeleteAllSucceedAction {
  type: typeof cart_deleteAll_succeed;
  payload: CartItems;
}

export type MenuAction = GetMenuItemsStartAction | GetMenuItemsSucceedAction;
export type CartAction =
  | GetCartItemsStartAction
  | GetCartItemsSucceedAction
  | SetOrderStartAction
  | SetOrderSucceedAction
  | SetDeleteStartAction
  | SetDeleteSucceedAction
  | SetDeleteAllStartAction
  | SetDeleteAllSucceedAction;

import {
  menu_load_start,
  menu_load_succeed,
  MenuAction,
  MenuState,
} from "./types";

const initialState: MenuState = {
  loadingMenu: false,

  menuItems: null,
};

function menu(state = initialState, action: MenuAction): MenuState {
  switch (action.type) {
    case menu_load_start:
      return {
        ...state,
        loadingMenu: true,
      };
    case menu_load_succeed:
      return {
        ...state,
        loadingMenu: false,
        menuItems: action.payload,
      };
    default:
      return state;
  }
}

export default menu;

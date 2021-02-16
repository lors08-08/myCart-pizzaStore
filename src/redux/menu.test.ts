import { MenuState, MenuAction } from "./types";
import menu from "./menu";
import { loadMenu } from "./actions";

let state: MenuState;
beforeEach(() => {
  state = {
    loadingMenu: false,
    menuItems: [
      {
        id: 1,
        name: "Peperoni",
        price: 350,
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCyEFr6ubZ-wSv2Dzj-lmtRngIQLIj5wh4WQ&usqp=CAU",
      },
      {
        id: 2,
        name: "Buffalo Chicken",
        price: 380,
        src:
          "https://previews.123rf.com/images/mix3r/mix3r1411/mix3r141100271/33756050-vector-illustration-of-italian-pizza.jpg",
      },
    ],
  };
});

test("Menu items are loaded", () => {
  // @ts-ignore
  const newMenuState = menu(state, loadMenu());

  expect(newMenuState.menuItems).toHaveLength(2);
});

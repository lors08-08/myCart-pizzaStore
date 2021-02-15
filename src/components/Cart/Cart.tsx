import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Menu from "../Menu/Menu";

const Cart: React.FC = () => {
  const menu = useSelector((state: RootState) => state.menu.menuItems);
  const cart = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <Grid container>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <Header />
        <Body cartItems={cart} />
        <Footer cartItems={cart} />
        <Menu menu={menu} />
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};

export default Cart;

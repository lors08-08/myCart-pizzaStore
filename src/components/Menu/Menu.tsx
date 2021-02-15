import React from "react";
import { Backdrop, CircularProgress, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions";
import { MenuItems } from "../../redux/types";
import { RootState } from "../../redux";
import { useStyles } from "./styles";

interface MenuProps {
  menu: MenuItems[];
}

const Menu: React.FC<MenuProps> = ({ menu }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const addingItem = useSelector((state: RootState) => state.cart.addingItem);

  return (
    <Grid className={classes.wrapper} item container>
      <Grid item xs={12}>
        <h1>Также советуем:</h1>
      </Grid>
      {menu.map((item) => {
        return (
          <Grid
            key={item.id}
            className={classes.itemWrapper}
            item
            container
            xs={4}
          >
            <Grid item container justify={"flex-end"} xs={12}>
              <b
                onClick={() =>
                  dispatch(addItem(item.name, item.price, item.src, 1))
                }
                className={classes.add}
              >
                Добавить в корзину
              </b>
            </Grid>
            <Grid item container justify={"center"} xs={12}>
              <img alt="pizza" src={item.src} />
            </Grid>
            <Grid item container justify={"center"} xs={12}>
              <h2>{item.name}</h2>
            </Grid>
            <Grid item container justify={"center"} xs={12}>
              <b>{item.price}₽</b>
            </Grid>
          </Grid>
        );
      })}
      <Backdrop className={classes.backdrop} open={addingItem}>
        <CircularProgress color="secondary" />
      </Backdrop>
    </Grid>
  );
};

export default Menu;

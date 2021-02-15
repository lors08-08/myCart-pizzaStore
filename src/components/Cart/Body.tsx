import React from "react";
import { Backdrop, CircularProgress, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, SetAmount } from "../../redux/actions";
import { CartItems } from "../../redux/types";
import { RootState } from "../../redux";
import { useStyles } from "./styles";
import EmptyCart from "./EmptyCart";

interface CartProps {
  cartItems: CartItems[];
}

const Body: React.FC<CartProps> = ({ cartItems }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const deletingItem = useSelector(
    (state: RootState) => state.cart.deletingItem
  );

  const handleIncrement = (id: number, quantity: number) => {
    if (quantity < 99) {
      const incr = quantity + 1;
      dispatch(SetAmount(id, incr));
    } else {
      alert("Слишком много пицц!");
    }
  };
  const handleDecrement = (id: number, quantity: number) => {
    if (quantity > 1) {
      const decr = quantity - 1;
      dispatch(SetAmount(id, decr));
    } else {
      alert("В корзине должна быть хотя-бы одна пицца!");
    }
  };
  const handleDelete = (id: number) => {
    if (window.confirm("Вы уверены?")) {
      dispatch(deleteItem(id));
    }
  };

  if (!cartItems.length) {
    return <EmptyCart />;
  }
  return (
    <Grid spacing={3} className={classes.bodyWrapper} item container xs={12}>
      {cartItems.map((item: CartItems) => {
        return (
          <Grid
            key={item.id}
            container
            alignItems={"center"}
            className={classes.itemWrapper}
          >
            <Grid item xs={2}>
              <img alt="pizza" src={item.src} />
            </Grid>
            <Grid item container xs={4} justify={"center"}>
              <h1>{item.name}</h1>
            </Grid>
            <Grid
              item
              container
              xs={2}
              alignItems={"center"}
              justify={"center"}
            >
              <span onClick={() => handleDecrement(item.id, item.quantity)}>
                -
              </span>
              <span className={classes.amount}>{item.quantity}</span>{" "}
              <span onClick={() => handleIncrement(item.id, item.quantity)}>
                +
              </span>
            </Grid>
            <Grid item container xs={2} justify={"center"}>
              <h2>{item.price * item.quantity}₽</h2>
            </Grid>
            <Grid item container xs={2} justify={"center"}>
              <h1
                onClick={() => handleDelete(item.id)}
                className={classes.delete}
              >
                X
              </h1>
            </Grid>
          </Grid>
        );
      })}
      <Backdrop className={classes.backdrop} open={deletingItem}>
        <CircularProgress color="secondary" />
      </Backdrop>
    </Grid>
  );
};

export default Body;

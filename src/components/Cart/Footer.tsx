import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { CartItems } from "../../redux/types";
import OrderSucceed from "../OrderSucceed";

interface CartProps {
  cartItems: CartItems[];
}

const Footer: React.FC<CartProps> = ({ cartItems }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOrder = () => {
    if (cartItems.length >= 1) {
      setOpen(true);
    } else {
      alert("Выберите хотя-бы один товар:(");
    }
  };
  const classes = useStyles();
  return (
    <>
      <Grid
        item
        container
        className={classes.footerWrapper}
        justify={"space-between"}
        xs={12}
      >
        <Grid item container alignItems={"center"} xs={4}>
          <div className={classes.items}>
            Всего пицц: <span>{cartItems.length} шт</span>.
          </div>
        </Grid>
        <Grid item container justify={"flex-end"} alignItems={"center"} xs={4}>
          <div className={classes.priceTotal}>
            Сумма заказа:{" "}
            <span>
              {cartItems.reduce(
                (a: number, t: CartItems) => (a + t.price) * t.quantity,
                0
              )}{" "}
              ₽
            </span>
          </div>
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.footerWrapper}
        justify={"space-between"}
        xs={12}
      >
        <Grid item container alignItems={"center"} xs={4}>
          <button className={classes.btnBack}>Вернуться в каталог</button>
        </Grid>
        <Grid item container justify={"flex-end"} alignItems={"center"} xs={4}>
          <button className={classes.btnConfirm} onClick={handleOrder}>
            Оплатить сейчас
          </button>
        </Grid>
      </Grid>
      <OrderSucceed onClose={() => setOpen(false)} open={open} />
    </>
  );
};

export default Footer;

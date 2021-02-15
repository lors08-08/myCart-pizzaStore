import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface OrderProp {
  onClose: () => void;
  open: boolean;
}

const OrderSucceed: React.FC<OrderProp> = ({ onClose, open }) => {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Ваш заказ отправлен на готовку, вы его скоро получите!"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrderSucceed;

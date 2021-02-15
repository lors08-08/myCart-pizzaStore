import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  bodyWrapper: {
    maxHeight: "750px",
    minHeight: "350px",
    overflowY: "scroll",
  },
  itemWrapper: {
    marginTop: "50px",
    width: "100%",
    height: "120px",
    "& img": {
      width: "100%",
      height: "150px",
      paddingTop: "15px",
    },
    "& span": {
      fontSize: "3.5em",
      color: "#FE5F1E",
      cursor: "pointer",
    },
  },
  amount: {
    color: "#000 !important",
    padding: "0 5px",
    fontFamily: "Oswald",
    cursor: "default !important",
  },
  delete: {
    color: "red",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      fontSize: "3em",
      transition: "0.2s",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "#6b6b6b2e",
  },

  footerWrapper: {
    marginTop: "3em",
    padding: "10px 0",
  },
  items: {
    fontSize: "1em",
    fontFamily: "Oswald",
    letterSpacing: "3px",
    "& span": {
      fontSize: "1.5em",
    },
  },
  priceTotal: {
    fontSize: "1em",
    fontFamily: "Oswald",
    letterSpacing: "3px",
    "& span": {
      fontSize: "1.5em",
      color: "#FE5F1E",
    },
  },
  btnBack: {
    borderRadius: "30px",
    padding: "20px 30px",
    background: "#FFFFFF",
    color: "#D3D3D3",
    border: "1px solid #D3D3D3",
    width: "250px",
  },
  btnConfirm: {
    borderRadius: "30px",
    padding: "10px 30px",
    background: "#FE5F1E",
    color: "white",
    border: "none",
    width: "250px",
    height: "60px",
    cursor: "pointer",
    transition: "0.3s",
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      fontSize: "1.5em",
      transition: "0.3s",
    },
  },

  cartWrapper: {
    marginTop: "3em",
    borderBottom: "1px solid #e3e3e3",
    padding: "10px 0",
  },
  cart: {
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: "Oswald",
  },
  clearCart: {
    fontSize: "1em",
    fontFamily: "Oswald",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      fontSize: "1.2em",
      transition: "0.2s",
    },
  },
}));

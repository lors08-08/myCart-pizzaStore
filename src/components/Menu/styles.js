import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "550px",
    overflowY: "scroll",
    width: "100%",
    height: "120px",
    marginTop: "30px",
    flexDirection: "row",
    "& img": {
      width: "150px",
      height: "150px",
      paddingTop: "15px",
    },
  },
  itemWrapper: {
    marginTop: "25px",
  },
  add: {
    border: "2px solid #FE5F1E",
    borderRadius: "10px",
    padding: "5px 10px",
    "&:hover": {
      boxShadow: "0 0 10px #FE5F1E",
      cursor: "pointer",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "#6b6b6b2e",
  },
}));

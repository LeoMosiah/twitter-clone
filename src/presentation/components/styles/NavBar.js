import { fade } from "@material-ui/core/styles/colorManipulator";

export const styles = theme => ({
  header:{
    position: "static",
    color :"inherit"
  },
  navBarContainer: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  accountIcon: {
    color: "inherit",
    backgroundColor: "transparent",
  },
  button: {
    color: "#fff",
    backgroundColor: "#4AB3F4",
    borderColor: "transparent",
    border: "1px solid #1da1f2",
    borderRadius: "100px",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "20px",
    padding: "6px 16px",
    cursor: "pointer"
  },
  iconContainer: {
    paddingTop: 10,
    display: "inline-flex",
    cursor: "pointer",
    height: "100%",
    "&:hover": {
      color: "#4AB3F4",
      borderBottom: "2px solid #1da1f2"
    }
  },
  iconName: {
    paddingLeft: 4,
    paddingTop: 4,
    color: "inherit"
  },
  search: {
    border: "1px solid #e6ecf0",
    position: "relative",
    borderRadius: "100px",
    backgroundColor: "#f5f8fa",
    color: "#14171a",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1da1f2"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  logoIcon: {
    paddingTop: "5px",
    marginRight: "10px",
    width: "40px",
    height: "40px"
  }
});

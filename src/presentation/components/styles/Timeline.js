import { middleColumnWidth } from "./Spacing";

export const styles = {
  container: {
    borderRadius: 0,
    width: `${middleColumnWidth}px`
  },
  header: {
    display: "flex",
    padding: 5,
    backgroundColor: "#E8F5FD",
    height: "8%",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  avatar: {
    paddingTop: 4,
    color: "inherit",
    backgroundColor: "transparent",
    width: "24px",
    height: "24px"
  },
  icon: {
    width: "inherit",
    height: "inherit"
  },
  form: {
    paddingLeft: 10,
    width: "100%",
    border: 0.5,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "white",
    color: "#1da1f2"
  },
  button: {
    color: "#fff",
    backgroundColor: "#4AB3F4",
    borderColor: "transparent",
    border: "1px solid #1da1f2",
    borderRadius: "100px",
    fontSize: "10px",
    fontWeight: "bold",
    lineHeight: "8px",
    padding: "6px 16px",
    cursor: "pointer"
  }
};

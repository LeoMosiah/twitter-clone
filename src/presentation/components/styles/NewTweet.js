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
    flexDirection: "row"
  },
  avatar: {
    color: "inherit",
    backgroundColor: "transparent"
  },
  icon: {
    width: "24px",
    height: "24px"
  },
  form: {
    flex: 1,
    border: 0.5,
    borderRadius: 5,
    backgroundColor: "white",
    color: "#1da1f2",
    lineHeight: 2.5,
    padding: "4px 8px"
  },
  button: {
    margin: "0 5px",
    color: "#fff",
    backgroundColor: "#4AB3F4",
    borderColor: "transparent",
    border: "1px solid #1da1f2",
    borderRadius: "100px",
    fontSize: "10px",
    fontWeight: "bold",
    lineHeight: "8px",
    padding: "9px 16px",
    cursor: "pointer"
  },
  rightColumn: {
    flex: 10,
    display: "flex",
    alignItems: "center"
  },
  leftColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  }
};

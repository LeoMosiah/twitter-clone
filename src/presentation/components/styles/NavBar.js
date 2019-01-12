export const styles = {
  navBarContainer: {
    minHeight: 45,
    display: "flex",
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "space-between"
  },
  accountIcon: {
    fontSize: 30,
    flex: 2
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
    flex: 1,
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
  }
};

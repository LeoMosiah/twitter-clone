export const styles = theme => ({
  header: {
    position: "static",
    color: "inherit"
  },
  navBarContainer: {
    position: "relative"
  },
  accountIcon: {
    color: "inherit",
    backgroundColor: "transparent"
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
    marginRight: "20px",
    display: "inline-flex",
    cursor: "pointer",
    height: "100%",
    "&:hover": {
      color: "#4AB3F4"
    }
  },
  iconName: {
    paddingLeft: 4,
    paddingTop: 4,
    color: "inherit"
  },
  logoContainer: {},
  logoIcon: {
    width: "30px",
    height: "30px"
  }
});

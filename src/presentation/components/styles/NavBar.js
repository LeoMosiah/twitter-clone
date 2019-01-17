import {
  columnMargin,
  middleColumnWidth,
  navBarHeight,
  sideColumnWidth
} from "./spacing";

const logoSize = 30;

export const styles = {
  header: {
    position: "static",
    backgroundColor: "#fff",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    display: "flex",
    marginBottom: "16px",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "8px -4px 9px rgba(0,0,0,0.05)"
  },
  navBarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: `${navBarHeight}px`,
    minHeight: `${navBarHeight}px`,
    width: `${columnMargin * 2 + sideColumnWidth * 2 + middleColumnWidth}px`,
    margin: 0,
    padding: 0
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
  logoIcon: {
    width: `${logoSize}px`,
    height: `${logoSize}px`
  },
  rightContainer: {
    display: "flex",
    alignItems: "center"
  },
  middleContainer: {
    position: "absolute",
    left: "50%",
    top: `${navBarHeight / 2 - logoSize / 2}px`
  },
  avatar: {
    display: "inline-block",
    height: "30px",
    width: "30px",
    backgroundColor: "#fff",
    color: "#000"
  },
  accountIcon: {
    color: "inherit",
    height: "inherit",
    width: "inherit"
  },
  input: {
    border: "1px solid #e6ecf0",
    borderRadius: "21px",
    backgroundColor: "#f5f8fa",
    height: "32px",
    lineHeight: "16px",
    paddingLeft: "10px",
    fontSize: "12px",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -30%)"
  }
};

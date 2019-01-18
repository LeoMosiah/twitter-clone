import { sideColumnWidth } from "./Spacing";

export const styles = {
  container: {
    width: `${sideColumnWidth}px`,
    position: "relative",
    borderRadius: 0,
    marginRight: "10px",
    paddingBottom: "20px"
  },
  cover: {
    backgroundColor: "#1da1f2",
    height: 95,
    cursor: "pointer",
    backgroundSize: "cover"
  },
  avatarContainer: {
    height: 90,
    width: 90,
    top: "50%",
    left: "20%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    borderRadius: "100px",
    backgroundColor: "#fff"
  },
  imageUploader: {
    display: "none"
  },
  avatar: {
    height: 80,
    width: 80,
    cursor: "pointer",
    backgroundColor: "#1da1f2",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  icon: {
    height: 40,
    width: 40,
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  userInfo: {
    display: "block"
  },
  contactInfo: {
    position: "absolute",
    top: 100,
    left: 110
  },
  username: {
    textDecoration: "none",
    color: "#14171a",
    fontSize: 18,
    lineHeight: "25px",
    display: "block",
    cursor: "pointer"
  },
  handle: {
    textDecoration: "none",
    lineHeight: "20px",
    color: "#657786",
    fontSize: 14,
    display: "block"
  },
  userFollowersInfo: {
    marginTop: 70,
    marginRight: 20,
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  followersDetails: {
    lineHeight: "20px",
    color: "#657786",
    fontSize: 12,
    fontWeight: "bold"
  },
  followersMetrics: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1da1f2"
  }
};

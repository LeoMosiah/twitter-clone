export const styles = {
  container: {
    display: "flex",
    height: "95vh",
    backgroundColor: "#e6ecf0",
    paddingLeft: 30,
    paddingRight: 30
  },
  column: {
    flex: 1,
    margin: 8
  },
  columnMiddle: {
    flex: 2,
    margin: 8
  },
  profile: {
    height: "35%",
    marginBottom: 10,
    position: "relative",
    borderRadius: 0
  },
  profileUpperPart: {
    backgroundColor: "#1da1f2",
    height: 95
  },
  profileFrame: {
    height: 90,
    width: 90,
    top: "50%",
    left: "20%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    borderRadius: "100px",
    backgroundColor: "white"
  },
  profileAvatar: {
    height: 80,
    width: 80,
    cursor: "pointer",
    backgroundColor: "#1da1f2",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  profileIcon: {
    height: 40,
    width: 40,
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  profileBottomPart: {
    display: "block"
  },
  profileContactInfo: {
    position: "absolute",
    top: 100,
    left: 110
  },
  profileUsername: {
    textDecoration: "none",
    color: "#14171a",
    fontSize: 18,
    lineHeight: "25px",
    display: "block"
  },
  profileHandle: {
    textDecoration: "none",
    lineHeight: "20px",
    color: "#657786",
    fontSize: 14,
    display: "block"
  },
  profileUserFollowersInfo: {
    marginTop: 70,
    marginRight: 20,
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  profileFollowersDetails: {
    lineHeight: "20px",
    color: "#657786",
    fontSize: 12,
    fontWeight: "bold"
  },
  profileFollowersMetrics: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1da1f2"
  },
  forYou: {
    marginTop: 10,
    borderRadius: 0
  },
  timeline: {
    borderRadius: 0
  },
  followSugestions: {
    height: "60%",
    marginBottom: 10,
    borderRadius: 0
  },
  about: {
    marginTop: 10
  },
  timelineHeader: {
    display: "flex",
    padding: 5,
    backgroundColor: "#E8F5FD",
    height: "8%",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tweetForm: {
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
  },
  avatarIcon: {
    paddingTop: 4
  }
};

export const styles = {
  container: {
    display: "flex",
    flexContainer: "column",
    height: "95vh",
    backgroundColor: "#e6ecf0",
    paddingLeft: 30,
    paddingRight: 30
  },
  column: {
    flex: 1,
    margin: 10
  },
  columnMiddle: {
    flex: 2,
    margin: 10
  },
  profile: {
    height: "30%",
    marginBottom: 10,
    position: "relative"
  },
  profileAvatar: {
    height: 100,
    width: 100,
    top: 50,
    left: 50,
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  profileIcon: {
    height: 50,
    width: 50
  },
  forYou: {
    marginTop: 10
  },
  timeline: {
    borderRadius: 0
  },
  followSugestions: {
    height: "60%",
    marginBottom: 10
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
    width: "100%",
    border: 0.5,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "white",
    color: "#1da1f2"
  }
};

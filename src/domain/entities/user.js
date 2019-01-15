import PropTypes from "prop-types";

export class User {
  constructor(username, handle, followers, following) {
    this.username = username;
    this.handle = handle;
    this.followers = followers;
    this.following = following;
  }
  static propTypes = PropTypes.shape({
    username: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  });
}

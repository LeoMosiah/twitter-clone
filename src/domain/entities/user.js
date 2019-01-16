import PropTypes from "prop-types";

export class User {
  constructor(username, handle, followers, following, avatar, cover) {
    this.username = username;
    this.handle = handle;
    this.followers = followers;
    this.following = following;
    this.avatar = avatar;
    this.cover = cover
  }
  static propTypes = PropTypes.shape({
    username: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
  });
}

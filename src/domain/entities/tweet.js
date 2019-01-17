import PropTypes from "prop-types";

export class Tweet {
  constructor(
    author,
    body,
    timestamp = Date.now(),
    id = Date.now(),
    avatar = ""
  ) {
    this.author = author;
    this.body = body;
    this.timestamp = timestamp;
    this.id = id;
    this.avatar = avatar;
  }
  static propTypes = PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  });
}

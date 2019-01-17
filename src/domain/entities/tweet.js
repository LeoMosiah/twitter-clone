import PropTypes from "prop-types";

export class Tweet {
  constructor(author, body) {
    this.author = author;
    this.body = body;
    this.timestamp = Date.now();
    this.id = Date.now();
  }
  static propTypes = PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  });
}

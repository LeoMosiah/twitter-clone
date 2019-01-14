export class Tweet {
  constructor(author, body) {
    this.author = author;
    this.body = body;
    this.timestamp = Date.now();
  }
}

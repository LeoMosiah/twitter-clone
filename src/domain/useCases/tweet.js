import { Tweet } from "../entities/tweet";

export const getNewTweet = (author, body) => new Tweet(author, body);

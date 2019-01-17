import { Tweet } from "../entities/tweet";

export const getNewTweet = (author, body) => new Tweet(author, body);

export const parseTweets = (tweets) => {
  const arrayOfTweets = Object.values(tweets).map( tweet => {
    new Tweet(tweet.author, tweet.body, tweet.timestamp, tweet.id )
  });
  const tweetsObject = Object.assign({}, ...arrayOfTweets.map(tweet => tweet.id ? { [tweet.id]: tweet } : { [Date.now()]: tweet }));
  return tweetsObject
};
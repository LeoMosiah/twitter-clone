import { mockedTweets, mockedUser } from "./mock/mockedData";

export const getTweets = async (latency = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockedTweets), latency);
  });
};

export const getUser = async latency => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockedUser), latency);
  });
};

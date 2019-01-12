import { mockedTweets, mockerdUser } from "./mock/mockedData";

export const getTweets = async () => Promise.resolve(mockedTweets);

export const getUser = async () => Promise.resolve(mockerdUser);

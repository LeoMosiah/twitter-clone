import { config } from 'dotenv';
import { initializeFirebase } from './firebase';

export const initializeDataLayer = () => {
  config();
  initializeFirebase();
};
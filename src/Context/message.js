/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';

export const MessageContext = createContext({
  message: null,
  setMessage: () => {},
});

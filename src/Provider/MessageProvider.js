/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';

import { MessageContext } from '../Context/message';

function MessageProvider({ children }) {
  const [MessageState, setMessageState] = useState(null);
  return (
    <MessageContext.Provider
      value={{
        Message: MessageState,
        setMessage: setMessageState,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export default MessageProvider;

/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';

import { UserContext } from '../Context/user';

function UserProvider({ children }) {
  const [userState, setUserState] = useState(null);
  return (
    <UserContext.Provider
      value={{
        user: userState,
        setUser: setUserState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

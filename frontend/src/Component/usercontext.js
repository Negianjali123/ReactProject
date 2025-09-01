// src/context/UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [encryptedName, setEncryptedName] = useState('');

  return (
    <UserContext.Provider value={{ encryptedName, setEncryptedName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

// CookieContext.js
import React, { createContext } from 'react';
import { useCookies } from 'react-cookie';

export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['itemList']);

  const handleSetCookie = (item) => {
    setCookie('itemList', item, { path: '/', maxAge: 3600 });
    console.log(`Cookie set: ${item}`);
  };

  const handleRemoveCookie = () => {
    removeCookie('itemList');
    console.log('Cookie removed');
  };

  return (
    <CookieContext.Provider value={{ cookies, handleSetCookie, handleRemoveCookie }}>
      {children}
    </CookieContext.Provider>
  );
};
export default CookieProvider;
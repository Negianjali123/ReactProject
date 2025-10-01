// UserProvider.js
import { useState, useEffect } from "react";
// import { useLocation } from 'react-router-dom';
import UserContext from "../context/UserContext";


const UserProvider = ({ children }) => {
  // const location = useLocation();
  // const [sessionpresent, setsessionpresent] = useState(false);
  const [encryptedName, setEncryptedName] = useState(() => {
    return localStorage.getItem("user") || "";
  });


  useEffect(() => {
   
    if ((!encryptedName)) {
      // console.log("removing user in localStorage chala:", encryptedName);
      localStorage.removeItem("user");
      setEncryptedName('');
    }
    else {
      // console.log("Storing user in localStorage chala:", encryptedName);
      localStorage.setItem("user", encryptedName);
  
      const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setEncryptedName(storedUser);
    }
    }
  }, [encryptedName]);

  return (
    <UserContext.Provider value={{ encryptedName, setEncryptedName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

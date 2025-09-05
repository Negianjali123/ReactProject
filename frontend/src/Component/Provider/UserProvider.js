// UserProvider.js
import { useState,useEffect } from "react";
import UserContext from "../context/UserContext";

const UserProvider = ({ children }) => {
  const [encryptedName, setEncryptedName] = useState(null);

  // ✅ Load usernav from localStorage when the app first loads
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setEncryptedName(storedUser);
    }
  }, []);

  // ✅ Sync usernav with localStorage when it changes
  useEffect(() => {
    if (encryptedName) {
      localStorage.setItem("user", encryptedName);  
    } else {
      localStorage.removeItem("user");
    }
  }, [encryptedName]);

  return (
    <UserContext.Provider value={{ encryptedName, setEncryptedName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

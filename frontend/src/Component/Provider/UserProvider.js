// UserProvider.js
import { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';
import UserContext from "../context/UserContext";
import { Cookies } from 'react-cookie'; // ✅ CORRECT


const UserProvider = ({ children }) => {
  const location = useLocation();
  const [sessionpresent, setsessionpresent] = useState(false);
  const [encryptedName, setEncryptedName] = useState(() => {
    return localStorage.getItem("user") || "";
  });
 
  
  
  useEffect(() => {
   let path =["/user/dashboard","/user/addtocard"];
   if(path.includes(location.pathname)){
    console.log("session true set hua chala")
    setsessionpresent(true)
   }
   else{
    console.log("session false set hua chala")
    setsessionpresent(false)
   }
  }, [sessionpresent]);

  // ✅ Sync usernav with localStorage when it changes
  useEffect(() => {
    if ((!encryptedName) && (!sessionpresent)) {
      console.log("removing user in localStorage chala:", encryptedName);
      localStorage.removeItem("user");
      setEncryptedName('');
    } else {
      console.log("Storing user in localStorage chala:", encryptedName);
      localStorage.setItem("user", encryptedName); 
      const storedUser = localStorage.getItem("user");
      if(storedUser){
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

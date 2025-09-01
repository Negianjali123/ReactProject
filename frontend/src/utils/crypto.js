import CryptoJS from 'crypto-js';
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY || '123456';

export  const encryptData = (data) => {
    // Ensure data is a string before encryption (e.g., JSON.stringify for objects)
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    return ciphertext;
  };

export const decryptData = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  };
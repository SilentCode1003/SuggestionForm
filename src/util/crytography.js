import bcrypt from "bcryptjs";
import CryptoJS from "crypto-js";

// Define a constant salt for bcrypt (ensure this is generated dynamically in a real app)
const saltRounds = 10;

// AES encryption key and IV in a format usable by the browser
const encryptionKey = CryptoJS.enc.Utf8.parse("DEV42FIRSTDEV"); // 32-byte key
const iv = CryptoJS.enc.Utf8.parse("5LSOLUTIONS"); // 16-byte IV

// Utility function to hash password
export const createHashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    console.log("Hashed password:", hash);
    return hash;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Utility function to compare password
export const checkPassword = async (inputPassword, hashPassword) => {
  try {
    const isMatch = await bcrypt.compare(inputPassword, hashPassword);
    console.log(`Password match: ${isMatch}`);
    return isMatch;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Encrypt password using AES (crypto-js)
export const encrypterString = (password) => {
  try {
    const encryptedData = CryptoJS.AES.encrypt(password, encryptionKey, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
    console.log("Encrypted password:", encryptedData);
    return encryptedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Decrypt password using AES (crypto-js)
export const decrypterString = (encryptedData) => {
  try {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
    // console.log("Decrypted password:", decryptedData);
    return decryptedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

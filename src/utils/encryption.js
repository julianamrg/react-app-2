import CryptoJS from 'crypto-js';

const SECRET_KEY = 'your-secret-key'; // Replace with your actual secret key

export const encryptPassword = (password) => {
    return CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
};

export const decryptPassword = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};
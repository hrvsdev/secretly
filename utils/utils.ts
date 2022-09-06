import { AES, enc } from "crypto-js";
import { customAlphabet } from "nanoid";

const genKey = () => {
  const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nanoid = customAlphabet(alphabet, 20);
  return nanoid();
};

const encrypt = (data: any, key: string) => {
  return AES.encrypt(JSON.stringify(data), key).toString();
};

const decrypt = (ciphertext: string, key: string) => {
  const bytes = AES.decrypt(ciphertext, key);
  const str = bytes.toString(enc.Utf8);
  return str ? JSON.parse(str) : null;
};

const genLink = (id: string, key: string) => {
  return `${window.location.origin}/${id}#${key}`;
};

const getHash = () => {
  const hash = window.location.hash;
  return hash.substring(1);
};

const exports = { genKey, encrypt, decrypt, genLink, getHash };

export default exports
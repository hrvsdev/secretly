import { AES, enc } from "crypto-js";
import { customAlphabet } from "nanoid";

const genKey = () => {
  const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nanoid = customAlphabet(alphabet, 20);
  return nanoid();
};

const encrypt = (string: string, key: string) => {
  return AES.encrypt(string, key).toString();
};

const decrypt = (ciphertext: string, key: string) => {
  const bytes = AES.decrypt(ciphertext, key);
  console.log(key);
  return bytes.toString(enc.Utf8);
};

const genLink = (id: string, key: string) => {
  return window.location.origin + id + "#" + key;
};

const getHash = () => {
  const hash = window.location.hash;
  return hash.substring(1);
};

export { genKey, encrypt, decrypt, genLink, getHash };

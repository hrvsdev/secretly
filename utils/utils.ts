import { AES, enc } from "crypto-js";
import { customAlphabet } from "nanoid";

import type { SecretDataTypes } from "../firebase/types";

const genKey = () => {
  const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nanoid = customAlphabet(alphabet, 20);
  return nanoid();
};

const encrypt = (data: SecretDataTypes, key: string) => {
  const ciphertext = AES.encrypt(JSON.stringify(data), key).toString();
  return ciphertext;
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

export { genKey, encrypt, decrypt, genLink, getHash };

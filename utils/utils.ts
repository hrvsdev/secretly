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
  return bytes.toString(enc.Utf8);
};

const genLink = (id: string, key: string) => {
  return "https://secretly.vercel.app/" + id + "#" + key;
};

export { genKey, encrypt, decrypt, genLink };

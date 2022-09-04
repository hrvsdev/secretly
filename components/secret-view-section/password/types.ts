import { StateMethods } from "@hookstate/core";

export interface PasswordTypes {
  password: StateMethods<string>;
  isError: boolean;
  onSubmit: () => void;
}

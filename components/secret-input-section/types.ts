import { StateMethods } from "@hookstate/core";

export interface TextareaTypes {
  value: StateMethods<string>;
}

export interface CreateButtonTypes {
  disabled: boolean;
  onClick: () => void;
  loading: boolean;
}

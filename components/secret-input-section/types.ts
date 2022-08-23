import { StateMethods } from "@hookstate/core";

export interface TextareaTypes {
  value: StateMethods<string>;
}

export interface CreateButtonTypes {
  isDisabled: boolean;
  onClick: () => void;
  isLoading: boolean;
}

export interface OptionsTypes {
  isCreateButtonDisabled: boolean;
  onCreateButton: () => void;
  isLoading: boolean;
  message: StateMethods<string>;
  email: StateMethods<string>;
  password: StateMethods<string>;
}

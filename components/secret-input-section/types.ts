import { StateMethods } from "@hookstate/core";

export interface TextareaTypes {
  value: StateMethods<string>;
}

export interface OptionsTypes {
  isCreateButtonDisabled: boolean;
  onCreateButton: () => void;
  isLoading: boolean;
}

export interface TabsTypes {
  value: StateMethods<string>;
  active: StateMethods<string>;
}

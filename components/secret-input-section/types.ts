import { StateMethods } from "@hookstate/core";
import React from "react";

export interface TextareaTypes {
  value: StateMethods<string>;
}

export interface CreateButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  children: React.ReactNode;
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

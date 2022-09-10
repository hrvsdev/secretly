import { StateMethods } from "@hookstate/core";

export interface TabTypes {
  children?: React.ReactNode;
  title?: string;
  error?: boolean;
  id: string;
  active: StateMethods<string>;
}

export interface TabPanelTypes {
  children: React.ReactNode;
  id: string;
  active: StateMethods<string>;
}

export interface TabsTypes {
  children: React.ReactNode;
}

export interface TabListTypes {
  children: React.ReactNode;
}

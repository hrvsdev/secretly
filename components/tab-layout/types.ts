import { StateMethods } from "@hookstate/core";

export interface TabTypes {
  children?: React.ReactNode;
  title?: string;
  id: "text" | "redirect";
  active: StateMethods<"text" | "redirect">;
}

export interface TabPanelTypes {
  children: React.ReactNode;
  id: "text" | "redirect";
  active: StateMethods<"text" | "redirect">;
}

export interface TabsTypes {
  children: React.ReactNode;
}

export interface TabListTypes {
  children: React.ReactNode;
}

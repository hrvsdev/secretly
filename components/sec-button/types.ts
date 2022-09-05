import { ReactNode } from "react";

export interface SecButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
}

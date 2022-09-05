export interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  isDisabled: boolean;
  children: React.ReactNode;
}

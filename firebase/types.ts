export interface SaveSecretTypes {
  type: "text" | "redirect";
  secret: string;
  password?: string;
  readRecieptEmail?: string;
  duration?: {
    unit: "sec" | "min" | "hour" | "day" | "week" | "month" | "year";
    value: number;
  };
  message?: string;
  description?: string;
}

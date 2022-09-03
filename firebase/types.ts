export interface SecretDataTypes {
  type: string;
  secret: string;
  isEncryptedWithPassword: boolean;
  readRecieptEmail?: string;
  duration?: {
    unit: "sec" | "min" | "hour" | "day" | "week" | "month" | "year";
    value: number;
  };
  message?: string;
  description?: string;
}

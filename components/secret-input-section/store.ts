import { hookstate } from "@hookstate/core";

export const password = hookstate("");
export const readReceiptEmail = hookstate({ val: "", err: false });
export const deliveryEmail = hookstate({ val: "", err: false });

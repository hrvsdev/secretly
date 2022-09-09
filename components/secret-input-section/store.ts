import { hookstate } from "@hookstate/core";

export const password = hookstate("");
export const readReceiptEmail = hookstate({ val: "", error: false });
export const deliveryEmail = hookstate({ val: "", error: false });

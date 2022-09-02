import { useState } from "@hookstate/core";

import { password } from "../../store";

export default function Password(): JSX.Element {
    const value = useState(password)
  return (
    <input type="text" value={value.value} onChange={(e) => value.set(e.target.value)} />
  );
}

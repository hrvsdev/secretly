import { MantineProvider } from "@mantine/core";

import Secret from "../secret-input-section";

export default function Home(): JSX.Element {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div>
        Hello, world! <Secret />
      </div>
    </MantineProvider>
  );
}

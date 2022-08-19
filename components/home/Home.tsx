import {MantineProvider } from "@mantine/core";
import styled from "@emotion/react"

import Secret from "../secret-input-section";

export default function Home(): JSX.Element {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    </MantineProvider>
  );
}

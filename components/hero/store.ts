import { hookstate, useState } from "@hookstate/core";

const heroProps = hookstate({
  heading: "Share a secret",
  para: "The secret is end-to-end encrypted and can only be viewed once via a link.",
});

export const useHero = () => {
  return useState(heroProps);
};

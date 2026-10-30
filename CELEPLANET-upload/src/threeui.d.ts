import "@designcodeio/threeui";
import type { ComponentProps, JSX } from "react";
import type { SylvaHero as CommunitySylvaHero } from "@designcodeio/threeui/components/SylvaHero";

// Community 1.2.0 ships only Living Green. The registered source adds
// a variant selector; allow that exact green selection without changing runtime.
declare module "@designcodeio/threeui" {
  export function SylvaHero(
    props: ComponentProps<typeof CommunitySylvaHero> & { variant?: "living-green" },
  ): JSX.Element;
}

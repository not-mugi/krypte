import { Quark } from "../quarks";
import { TypographyMechanics, typographyBlueprints  } from "@mugijs/tailwind-core/functions";
import type { Constructor, Typography } from "@mugijs/tailwind-core/types";

/** ---- typography flavor ---- */
export function SpacingFlavor<Q extends Constructor<Quark>>(Quark: Q) {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        typo: args[0]?.["typo"] ?? typographyBlueprints(),
      };
      const exchangeMechs = {
        ...args[1],
        typo: TypographyMechanics,
      };
      super(flavors, exchangeMechs);
    }

    /** @param typography */ /** {
     *   color : { color : "mugi", }
     *   align : "center",
     * }
    */
    setTypography(t: Typography) {
      this.addquirk("typo", t);
    }
  };
}
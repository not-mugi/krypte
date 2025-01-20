import { Quark } from "../quarks";
import { SpacingMechanics, spacingBlueprints  } from "@mugijs/tailwind-core/functions";
import type { Constructor, Spacing } from "@mugijs/tailwind-core/types";

/** ---- spacing flavor ---- */
export function SpacingFlavor<Q extends Constructor<Quark>>(Quark: Q) {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        space: args[0]?.["space"] ?? spacingBlueprints(),
      };
      const exchangeMechs = {
        ...args[1],
        space: SpacingMechanics,
      };
      super(flavors, exchangeMechs);
    }

    /** @param spacing */ /** {
    *    spacing : "x-xxs",
    *    margin : "-y-xs",
    *    padding : "end-xs"
    * }
    */
    setSpacing(s: Spacing) {
      this.addquirk("space", s);
    }
  };
}
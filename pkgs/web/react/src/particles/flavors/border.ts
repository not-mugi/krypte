import { Quark } from "../quarks";
import { BorderMechanics, borderBlueprint } from "@mugijs/tailwind-core/functions";
import type { Constructor, Border } from "@mugijs/tailwind-core/types";

/** ---- border flavor ----- */
export function BorderFlavor<Q extends Constructor<Quark>>(Quark: Q) {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        border: args[0]?.["border"] ?? borderBlueprint(),
      };
      const exchangeMechs = {
        ...args[1],
        border: BorderMechanics,
      };
      super(flavors, exchangeMechs);
    }
    /** @param border */ /** {
     *   width : "sm",
     *   style : "solid",
     *   color : { color : "mugi", strength : "heavy" }
     * }
    */
    setBorder(b: Border) {
      this.addquirk("border", b);
    }
  };
}
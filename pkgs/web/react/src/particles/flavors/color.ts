import { Quark } from "../quarks";
import { ColorMechanics, colorBlueprint, } from "@mugijs/tailwind-core/functions";
import type { Constructor, Color } from "@mugijs/tailwind-core/types";

/** ---- color flavor ---- */
export function ColorFlavor<Q extends Constructor<Quark>>(Quark: Q) {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        color: args[0]?.["color"] ?? colorBlueprint(),
      };
      const exchangeMechs = {
        ...args[1],
        color: ColorMechanics,
      };
      super(flavors, exchangeMechs);
    }
    /** @param color */ /** {
     *  color : "mugi",
     *  strength : "slim"
     * }
    */
    setColor(c: Color) {
      this.addquirk("color", c);
    }
  };
}
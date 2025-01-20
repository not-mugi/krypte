import { Quark } from "../quarks";
import { SizingMechanics, sizingBlueprints } from "@mugijs/tailwind-core/functions";
import type { Constructor, Sizing } from "@mugijs/tailwind-core/types";

/** ---- size flavor ---- */
export function SizingFlavor<Q extends Constructor<Quark>>(Quark: Q) {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        size: args[0]?.["size"] ?? sizingBlueprints(),
      };
      const exchangeMechs = {
        ...args[1],
        size: SizingMechanics,
      };
      super(flavors, exchangeMechs);
    }

    /** @param sizing */ /** {
    *    size : "md"
    * } {
    *    width : "screen"
    *    height : "screen"
    * } {
    *    dimensions : { width : "screen", height : "screen" }
    * }
    */
    setSizing(s: Sizing) {
      this.addquirk("size", s);
    }
  };
}
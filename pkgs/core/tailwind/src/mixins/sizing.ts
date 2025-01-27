import { Quark } from "./mixin";
import type { Constructor, Sizing } from "../main";
import { SizingMechanics, sizingBlueprints } from "../getters/sizing";

/** ---- size flavor ---- */
/** @beta */
export const SizingFlavor = <Q extends Constructor<Quark>>(Quark: Q) => {
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

    /** @param sizing */ /** \{
    *    size : "md"
    * \} \{
    *    width : "screen"
    *    height : "screen"
    * \} \{
    *    dimensions : \{ width : "screen", height : "screen" \}
    * \}
    */
    setSizing(s: Sizing) {
      this.addquirk("size", s);
    }
  };
}
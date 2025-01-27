import { Quark } from "./mixin";
import type { Constructor, Color } from "../../main";
import { ColorMechanics } from "../../getters/mechanics/color";

/** ---- color flavor ---- */
/** @beta */
export const ColorFlavor = <Q extends Constructor<Quark>>(BaseQuark: Q) => {
  return class extends BaseQuark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        color: args[0]?.["color"] ?? {},
      };
      const exchangeMechs = {
        ...args[1],
        color: ColorMechanics,
      };
      super(flavors, exchangeMechs);
    }
    /** @param color */ /** \{
     *  color : "mugi",
     *  strength : "slim"
     * \}
    */
    setColor(c: Color) {
      this.addquirk("color", c);
    }
  };
}
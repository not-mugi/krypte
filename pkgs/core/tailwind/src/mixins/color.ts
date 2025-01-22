import { Quark } from "../main";
import type { Constructor, Color } from "../main";
import { ColorMechanics, colorBlueprint, } from "../getters/color";

/** ---- color flavor ---- */
/** @alpha */
export const ColorFlavor = <Q extends Constructor<Quark>>(BaseQuark: Q) => {
  return class extends BaseQuark {
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
import { Quark } from "./mixin";
import type { Constructor, Layout } from "../main";
import { LayoutMechanics, layoutBlueprint } from "../getters/layout";

/** ---- layout flavor ---- */
/** @beta */
export const LayoutFlavor = <Q extends Constructor<Quark>>(Quark: Q) => {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        layout: args[0]?.["layout"] ?? layoutBlueprint(),
      };
      const exchangeMechs = {
        ...args[1],
        layout: LayoutMechanics,
      };
      super(flavors, exchangeMechs);
    }
    /** @param layout */ /** \{
     *  position : "relative",
     *  overflow : "auto
     * \}
    */
    setLayout(l: Layout) {
      this.addquirk("layout", l);
    }
  };
}
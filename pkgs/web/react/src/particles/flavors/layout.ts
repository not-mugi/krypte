import { Quark } from "../quarks";
import { LayoutMechanics, layoutBlueprint } from "@mugijs/tailwind-core/functions";
import type { Constructor, Layout } from "@mugijs/tailwind-core/types";

/** ---- layout flavor ---- */
export function FormFlavor<Q extends Constructor<Quark>>(Quark: Q) {
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
    /** @param layout */ /** {
     *  position : "relative",
     *  overflow : "auto
     * }
    */
    setLayout(l: Layout) {
      this.addquirk("layout", l);
    }
  };
}
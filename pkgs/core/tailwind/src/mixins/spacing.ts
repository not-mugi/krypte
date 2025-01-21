import { Quark } from "../main";
import type { Constructor, Spacing } from "../main";
import { SpacingMechanics, spacingBlueprints  } from "../getters/spacing";

/** ---- spacing flavor ---- */
/** @alpha */
export const SpacingFlavor = <Q extends Constructor<Quark>>(Quark: Q) => {
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

    /** @param spacing */ /** \{
    *    spacing : "x-xxs",
    *    margin : "-y-xs",
    *    padding : "end-xs"
    * \}
    */
    setSpacing(s: Spacing) {
      this.addquirk("space", s);
    }
  };
}
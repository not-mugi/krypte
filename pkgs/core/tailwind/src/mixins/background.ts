import { Quark } from "../main";
import type { Constructor, Background } from "../main";
import { BackgroundMechanics, backgroundBlueprint } from "../getters/background";

/** ---- background flavor ----- */
/** @alpha */
export const BackgroundFlavor = <Q extends Constructor<Quark>>(Quark: Q) => {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        bg: args[0]?.["bg"] ?? backgroundBlueprint(),
      };
      const exchangeMechs = {
        ...args[1],
        bg: BackgroundMechanics,
      };
      super(flavors, exchangeMechs);
    }
    /** @param background */ /** \{
     *   origin : "content",
     *   repeat : "repeat",
     *   gradient : "gradient-top",
     * \}
    */
    setBackground(b: Background) {
      this.addquirk("bg", b);
    }
  };
}
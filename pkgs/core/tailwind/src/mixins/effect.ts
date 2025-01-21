import { Quark } from "../main";
import type { Constructor, Effect } from "../main";
import { EffectMechanics, effectBlueprint } from "../getters/effect";

/** ---- effect flavor ----- */
/** @alpha */
export const EffectFlavor = <Q extends Constructor<Quark>>(Quark: Q) => {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        effect: args[0]?.["effect"] ?? effectBlueprint(),
      };
      const exchangeMechs = {
        ...args[1],
        effect: EffectMechanics,
      };
      super(flavors, exchangeMechs);
    }
    /** @param effect */ /** \{
     *   shadow : "xs",
     *   opacity : "none",
     *   mixBlendMode : "multiply",
     * \}
    */
    setEffect(e: Effect) {
      this.addquirk("effect", e);
    }
  };
}
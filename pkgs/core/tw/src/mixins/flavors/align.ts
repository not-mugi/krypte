import { Quark } from "./mixin";
import type { Constructor, Alignment, Justification, ContentAlignment } from "../../main";
import {
  AlignmentMechanics, alignmentBlueprint, JustificationMechanics, 
  justificationBlueprint, ContentAlignmentMechanics, contentAlignmentBlueprint
} from "../../getters/mechanics/align";

/** ---- alignment flavor ---- */
/** @beta */
export const AlignFlavor = <Q extends Constructor<Quark>>(Quark: Q) => {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        align: args[0]?.["align"] ?? alignmentBlueprint(),
        justify: args[0]?.["justify"] ?? justificationBlueprint(),
        content : args[0]?.["content"] ?? contentAlignmentBlueprint()
      };
      const exchangeMechs = {
        ...args[1],
        align: AlignmentMechanics,
        justify : JustificationMechanics,
        content : ContentAlignmentMechanics
      };
      super(flavors, exchangeMechs);
    }
    /** @param alignment */ /** \{
     *   mainAlignment : "center",
     *   crossAlignment : "center",
     *   selfCrossAlignment : "auto"
     * \}
    */
    setAlign(a: Alignment) {
      this.addquirk("align", a);
    }
    /** @param justification */ /** \{
    *   mainJustification : "center",
    *   inlineJustification : "center",
    *   selfInlineJustification : "center"
    * \}
    */
    setJustification(j: Justification) {
      this.addquirk("justify", j);
    }
    /** @param contentAlignment */ /** \{
    *   contentPlacement : "center",
    *   contentItemsPlacement : "center",
    *   contentSelfPlacement : "center"
    * \}
    */
    setContentAlign(c : ContentAlignment) {
      this.addquirk("content", c);
    }
  };
}
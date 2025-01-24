import type { 
    Flavor, Justification, 
    MainJustification, InlineJustification, SelfInlineJustification } from "../main";
import { 
  getMainJustificationClass as gm, 
  getInlineJustificationClass as gi, 
  getSelfInlineJustificationClass as gsi 
} from "../getters/align";

/** @alpha */
export type JustificationSetters = {
  setMainJustification: (mainJustification?: MainJustification) => void;
  setInlineJustification: (inlineJustification?: InlineJustification) => void;
  setSelfInlineJustification: (selfInlineJustification?: SelfInlineJustification) => void;
}
/**
 * @example
 * ```
 *  const { setters : { setMainJustification, ...}, { exchange }} = JustificationFlavor({})
 *  setMainJustification("center")
 *  const twcss = exchange() // "justify-center"
 * ```
 * @alpha
 */
export const JustificationFlavor = ( justification : Justification = {} ) : Flavor<JustificationSetters> => {

  const setMainJustification = (mainJustification?: MainJustification)  => {
    justification.mainJustification = mainJustification;
  };

  const setInlineJustification = (inlineJustification?: InlineJustification) => {
    justification.inlineJustification = inlineJustification;
  }

  const setSelfInlineJustification = (selfInlineJustification?: SelfInlineJustification) => {
    justification.selfInlineJustification = selfInlineJustification
  }

  const classExchange = () => {
    return [
      gm(justification.mainJustification),
      gi(justification.inlineJustification),
      gsi(justification.selfInlineJustification),
    ].join(" ").trim();
  };
  return {
    setters: { setMainJustification, setInlineJustification, setSelfInlineJustification },
    exchange: classExchange,
  };
};
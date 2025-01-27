import type { Flavor, Justification  } from "../main";
import { 
  getMainJustificationClass as gm, 
  getInlineJustificationClass as gi, 
  getSelfInlineJustificationClass as gsi 
} from "../getters/align";

/**
 * @alpha
 * ```
 *  const jsf = { mainJustification: "center" }
 *  const { exchange } = JustificationFlavor(jsf)
 *  const twcss = exchange() // "justify-center"
 * ```
 */
export const JustificationFlavor = ( justification : Justification = {} ) : Flavor => {

  const classExchange = () => {
    return [
      gm(justification?.mainJustification),
      gi(justification?.inlineJustification),
      gsi(justification?.selfInlineJustification),
    ].join(" ").trim();
  };
  return {
    exchange: classExchange,
  };
};
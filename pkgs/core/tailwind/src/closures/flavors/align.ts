import type { Flavor, Alignment } from "../../main";
import { 
  getMainAlignmentClass as gm, 
  getCrossAlignmentClass as gc, 
  getSelfCrossAlignmentClass as gsc 
} from "../../getters/mechanics/align";

/**
 * @alpha
 * ```
 *  const alignment = { mainAlignment: "center" }
 *  const { exchange } = AlignmentFlavor(alignment)
 *  const twcss = exchange() // "content-center"
 * ```
 */
export const AlignmentFlavor = ( alignment : Alignment = {} ) : Flavor => {
  const classExchange = () => {
    return [
      gm(alignment?.mainAlignment),
      gc(alignment?.crossAlignment),
      gsc(alignment?.selfCrossAlignment),
    ].join(" ").trim();
  };
  return {
    exchange: classExchange,
  };
};
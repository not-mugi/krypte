import type { Flavor, Sizing } from "../../main";
import { 
    getSizeClass as gsc,
    getWidthClass as gwc,
    getHeightClass as ghc,
    getDimensionClass as gdc,
} from "../../getters/mechanics/sizing";

/**
 * @alpha
 * size \> dimensions \> width or height
 * ``` 
 *  const sizing = { size: "xs" }
 *  const { exchange } = SizingFlavor(sizing)
 *  const twcss = exchange() // "size-20"
 * 
 *  const sizing2 = { size: "xs", width : "xl" }
 *  const { exchange : ex2 } = SizingFlavor(sizing2)
 *  const twcss = ex2() // "size-20"
 * ```
 */
export const SizingFlavor = ( sizing : Sizing = {} ) : Flavor => {
  const classExchange = () => {
    return [
        sizing?.size && !sizing?.dimensions && gsc(sizing.size),
        sizing?.dimensions && !sizing?.size && gdc(sizing.dimensions),
        sizing?.width && !sizing?.size && !sizing?.dimensions && gwc(sizing.width),
        sizing?.height && !sizing?.size && !sizing?.dimensions && ghc(sizing.height),
    ].join(" ").trim();
  };
  return {
    exchange: classExchange,
  };
};
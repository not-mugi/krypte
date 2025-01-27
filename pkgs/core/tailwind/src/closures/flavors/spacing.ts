import type { Flavor, Spacing } from "../../main";
import { 
    getMarginClass as gmc,
    getPaddingClass as gpc,
    getSpacingClass as gsc,
} from "../../getters/mechanics/spacing";

/**
 * @alpha
 * ```
 *  const spacing = { margin: "xs" }
 *  const { exchange } = SpacingFlavor(spacing)
 *  const twcss = exchange() // "m-1"
 * ```
 */
export const SpacingFlavor = ( spacing : Spacing = {} ) : Flavor => {
  const classExchange = () => {
    return [
      gmc(spacing?.margin),
      gpc(spacing?.padding),
      gsc(spacing?.spacing),
    ].join(" ").trim();
  };
  return {
    exchange: classExchange,
  };
};
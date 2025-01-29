import type { Flavor, Color } from "../../main";
import {
    getTextColorClass as gtc,
    getBackgroundColorClass as gbg,
    getBorderColorClass as gbc,
    getBorderOutlineColorClass as goc,
    getBorderRingColorClass as gbr,
    getTextDecorationColorClass as gdc,
    getShadowColorClass as gsc
} from "../../getters/mechanics/color";

/** 
 * @alpha
 * ```
 *  const clr = { color : "mugi" }
 *  const { exchange } = ColorFlavor(clr)
 *  const twcss = exchange() // "text-mugi-400"
 * ```
 */
export const ColorFlavor = ( color: Color = {}): Flavor => {

  const classExchange = () => {
    return [
        gtc(color.text),
        gbg(color.background),
        gbc(color.border),
        goc(color.outline),
        gbr(color.ring),
        gdc(color.decoration),
        gsc(color.shadow),
    ]
      .join(" ")
      .trim();
  };

  return {
    exchange: classExchange,
  };
};
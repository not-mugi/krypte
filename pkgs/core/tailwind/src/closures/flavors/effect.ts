import type { Flavor, Effect } from "../../main";
import {
    getShadowClass as gsc,
    getOpacityClass as goc,
    getMixBlendModeClass as gmbc,
    getBackgroundBlendModeClass as gbbc
} from "../../getters/mechanics/effect";

/** 
 * @alpha
 * ```
 *  const eff = { shadow : "sm" }
 *  const { exchange } = EffectFlavor(eff)
 *  const twcss = exchange() // "shadow-sm"
 * ```
 */
export const EffectFlavor = ( effect: Effect = {}): Flavor => {

  const classExchange = () => {
    return [
        gsc(effect.shadow),
        goc(effect.opacity),
        gmbc(effect.mixBlendMode),
        gbbc(effect.backgroundBlendMode),
    ]
      .join(" ")
      .trim();
  };

  return {
    exchange: classExchange,
  };
};
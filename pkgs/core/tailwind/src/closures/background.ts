import type { Flavor, Background } from "../main";
import {
  getBackgroundAttachmentClass as gba,
  getBackgroundClipClass as gbc,
  getBackgroundOriginClass as gbo,
  getBackgroundPositionClass as gbp,
  getBackgroundRepeatClass as gbr,
  getBackgroundSizeClass as gbs,
  getBackgroundGradientClass as gbg,
} from "../getters/background";

/** 
 * @alpha
 * ```
 *  const bg = { backgroundAttachment : "fixed" }
 *  const { exchange } = BackgroundFlavor(bg)
 *  const twcss = exchange() // "bg-fixed"
 * ```
 */
export const BackgroundFlavor = ( background: Background = {}): Flavor=> {

  const classExchange = () => {
    return [
      gba(background?.backgroundAttachment),
      gbc(background?.backgroundClip),
      gbo(background?.backgroundOrigin),
      gbp(background?.backgroundPosition),
      gbr(background?.backgroundRepeat),
      gbs(background?.backgroundSize),
      gbg(background?.backgroundGradient),
    ]
      .join(" ")
      .trim();
  };

  return {
    exchange: classExchange,
  };
};

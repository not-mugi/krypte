import type {
  Flavor, Background,
  BackgroundClip, BackgroundSize,
  BackgroundGradient, BackgroundAttachment,
  BackgroundRepeat, BackgroundOrigin, BackgroundPosition,
} from "../main";
import {
  getBackgroundAttachmentClass as gba,
  getBackgroundClipClass as gbc,
  getBackgroundOriginClass as gbo,
  getBackgroundPositionClass as gbp,
  getBackgroundRepeatClass as gbr,
  getBackgroundSizeClass as gbs,
  getBackgroundGradientClass as gbg,
} from "../getters/background";

/** @alpha */
export type BackgroundSetters = {
  setBackgroundAttachment: (attachment?: BackgroundAttachment) => void;
  setBackgroundClip: (clip?: BackgroundClip) => void;
  setBackgroundOrigin: (origin?: BackgroundOrigin) => void;
  setBackgroundPosition: (position?: BackgroundPosition) => void;
  setBackgroundRepeat: (repeat?: BackgroundRepeat) => void;
  setBackgroundSize: (size?: BackgroundSize) => void;
  setBackgroundGradient: (gradient?: BackgroundGradient) => void;
};

/** 
 * @alpha
 * @example
 * ```
 *    const { setters : { setBackgroundAttachment, ...}, { exchange }} = BackgroundFlavor({})
 *    setBackgroundAttachment("fixed")
 *    const twcss = exchange() // "bg-fixed"
 * ```
 */
export const BackgroundFlavor = ( background: Background = {}): Flavor<BackgroundSetters> => {

  const setBackgroundAttachment = (attachment?: BackgroundAttachment) => {
    background.backgroundAttachment = attachment;
  };

  const setBackgroundClip = (clip?: BackgroundClip) => {
    background.backgroundClip = clip;
  };

  const setBackgroundOrigin = (origin?: BackgroundOrigin) => {
    background.backgroundOrigin = origin;
  };

  const setBackgroundPosition = (position?: BackgroundPosition) => {
    background.backgroundPosition = position;
  };

  const setBackgroundRepeat = (repeat?: BackgroundRepeat) => {
    background.backgroundRepeat = repeat;
  };

  const setBackgroundSize = (size?: BackgroundSize) => {
    background.backgroundSize = size;
  };

  const setBackgroundGradient = (gradient?: BackgroundGradient) => {
    background.backgroundGradient = gradient;
  };

  const classExchange = () => {
    return [
      gba(background.backgroundAttachment),
      gbc(background.backgroundClip),
      gbo(background.backgroundOrigin),
      gbp(background.backgroundPosition),
      gbr(background.backgroundRepeat),
      gbs(background.backgroundSize),
      gbg(background.backgroundGradient),
    ]
      .join(" ")
      .trim();
  };

  return {
    setters: {
      setBackgroundAttachment,
      setBackgroundClip,
      setBackgroundOrigin,
      setBackgroundPosition,
      setBackgroundRepeat,
      setBackgroundSize,
      setBackgroundGradient,
    },
    exchange: classExchange,
  };
};

import type { Flavor, Alignment, CrossAlignment, MainAlignment, SelfCrossAlignment } from "../main";
import { 
  getMainAlignmentClass as gm, 
  getCrossAlignmentClass as gc, 
  getSelfCrossAlignmentClass as gsc 
} from "../getters/align";

/** @alpha */
export type AlignmentSetters = {
  setMainAlignment: (mainAlignment?: MainAlignment) => void;
  setCrossAlignment: (crossAlignment?: CrossAlignment) => void;
  setSelfCrossAlignment: (selfCrossAlignment?: SelfCrossAlignment) => void;
}

/**
 * @example
 * ```
 *    const { setters : { setMainAlignment, ...}, { exchange }} = BackgroundFlavor({})
 *    setMainAlignment("center")
 *    const twcss = exchange() // "content-center"
 * ```
 * @alpha
 */
export const AlignmentFlavor = ( alignment : Alignment = {} ) : Flavor<AlignmentSetters> => {

  const setMainAlignment = (mainAlignment?: MainAlignment)  => {
    alignment.mainAlignment = mainAlignment;
  };

  const setCrossAlignment = (crossAlignment?: CrossAlignment) => {
    alignment.crossAlignment = crossAlignment;
  };

  const setSelfCrossAlignment = (selfCrossAlignment?: SelfCrossAlignment) => {
    alignment.selfCrossAlignment = selfCrossAlignment;
  };

  const classExchange = () => {
    return [
      gm(alignment.mainAlignment),
      gc(alignment.crossAlignment),
      gsc(alignment.selfCrossAlignment),
    ].join(" ").trim();
  };
  return {
    setters: { setMainAlignment, setCrossAlignment, setSelfCrossAlignment },
    exchange: classExchange,
  };
};
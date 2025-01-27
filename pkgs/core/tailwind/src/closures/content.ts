import type { Flavor, ContentAlignment } from "../main";
import { 
  getContentPlacementClass as gcp,
  getContentItemsPlacementClass as gci,
  getContentSelfPlacementClass as gcs 
} from "../getters/align";

/**
 * @alpha
 * ```
 *  const content = { contentPlacement: "center" }
 *  const { exchange } = ContentAlignmentFlavor(content)
 *  const twcss = exchange() // "place-content-center"
 * ```
 */
export const ContentAlignmentFlavor = ( contentAlignment : ContentAlignment = {} ) : Flavor => {

  const classExchange = () => {
    return [
      gcp(contentAlignment?.contentPlacement),
      gci(contentAlignment?.contentItemsPlacement),
      gcs(contentAlignment?.contentSelfPlacement),
    ].join(" ").trim();
  };
  return {
    exchange: classExchange,
  };
};
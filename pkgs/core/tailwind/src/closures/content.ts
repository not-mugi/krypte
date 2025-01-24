import type { 
    Flavor, ContentAlignment,
    ContentPlacement, ContentItemsPlacement, ContentSelfPlacement } from "../main";
import { 
  getContentPlacementClass as gcp,
  getContentItemsPlacementClass as gci,
  getContentSelfPlacementClass as gcs 
} from "../getters/align";

/** @alpha */
export type ContentAlignmentSetters = {
  setContentPlacement: (contentPlacement?: ContentPlacement) => void;
  setContentItemsPlacement: (contentItemsPlacement?: ContentItemsPlacement) => void;
  setContentSelfPlacement: (contentSelfPlacement?: ContentSelfPlacement) => void;
}
/**
 * @alpha
 * ```
 *  const { setters : { setContentPlacement, ...}, { exchange }} = ContentAlignmentFlavor({})
 *  setContentPlacement("center")
 *  const twcss = exchange() // "place-content-center"
 * ```
 */
export const ContentAlignmentFlavor = ( contentAlignment : ContentAlignment = {} ) : Flavor<ContentAlignmentSetters> => {

  const setContentPlacement = (contentPlacement?: ContentPlacement)  => {
    contentAlignment.contentPlacement = contentPlacement;
  }

  const setContentItemsPlacement = (contentItemsPlacement?: ContentItemsPlacement) => {
    contentAlignment.contentItemsPlacement = contentItemsPlacement;
  }

  const setContentSelfPlacement = (contentSelfPlacement?: ContentSelfPlacement) => {
    contentAlignment.contentSelfPlacement = contentSelfPlacement;
  }

  const classExchange = () => {
    return [
      gcp(contentAlignment.contentPlacement),
      gci(contentAlignment.contentItemsPlacement),
      gcs(contentAlignment.contentSelfPlacement),
    ].join(" ").trim();
  };
  return {
    setters: { setContentPlacement, setContentItemsPlacement, setContentSelfPlacement },
    exchange: classExchange,
  };
};
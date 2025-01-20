import type { 
  Alignment, Justification, ContentAlignment,
  MainAlignment, CrossAlignment, SelfCrossAlignment, 
  ContentPlacement, ContentItemsPlacement, ContentSelfPlacement, 
  MainJustification, InlineJustification, SelfInlineJustification
} from "../main";
import { 
  MAIN_ALIGNMENT_MAP, CROSS_ALIGNMENT_MAP, CROSS_SELF_ALIGNMENT_MAP,
  CONTENT_PLACEMENT_MAP, CONTENT_ITEMS_PLACEMENT_MAP, CONTENT_SELF_PLACEMENT_MAP, 
  MAIN_JUSTIFICATION_MAP, INLINE_JUSTIFICATION_MAP, INLINE_SELF_JUSTIFICATION_MAP, 
} from "../maps/align";

/** @alpha */
export function getMainAlignmentClass(mainAlignment?: MainAlignment) {
  if (mainAlignment && mainAlignment in MAIN_ALIGNMENT_MAP) {
    return MAIN_ALIGNMENT_MAP[mainAlignment];
  }
}

/** @alpha */
export function getCrossAlignmentClass(crossAlignment?: CrossAlignment) {
  if (crossAlignment && crossAlignment in CROSS_ALIGNMENT_MAP) {
    return CROSS_ALIGNMENT_MAP[crossAlignment];
  }
}

/** @alpha */
export function getSelfCrossAlignmentClass(
  selfCrossAlignment?: SelfCrossAlignment
) {
  if (selfCrossAlignment && selfCrossAlignment in CROSS_SELF_ALIGNMENT_MAP) {
    return CROSS_SELF_ALIGNMENT_MAP[selfCrossAlignment];
  }
}

/** @alpha */
export function getMainJustificationClass(
  mainJustification?: MainJustification
) {
  if (mainJustification && mainJustification in MAIN_JUSTIFICATION_MAP) {
    return MAIN_JUSTIFICATION_MAP[mainJustification];
  }
}

/** @alpha */
export function getInlineJustificationClass(
  inlineJustification?: InlineJustification
) {
  if (inlineJustification && inlineJustification in INLINE_JUSTIFICATION_MAP) {
    return INLINE_JUSTIFICATION_MAP[inlineJustification];
  }
}

/** @alpha */
export function getSelfInlineJustificationClass(
  selfInlineJustification?: SelfInlineJustification
) {
  if (
    selfInlineJustification &&
    selfInlineJustification in INLINE_SELF_JUSTIFICATION_MAP
  ) {
    return INLINE_SELF_JUSTIFICATION_MAP[selfInlineJustification];
  }
}

/** @alpha */
export function getContentPlacementClass(contentPlacement?: ContentPlacement) {
  if (contentPlacement && contentPlacement in CONTENT_PLACEMENT_MAP) {
    return CONTENT_PLACEMENT_MAP[contentPlacement];
  }
}

/** @alpha */
export function getContentItemsPlacementClass(
  contentItemsPlacement?: ContentItemsPlacement
) {
  if (
    contentItemsPlacement &&
    contentItemsPlacement in CONTENT_ITEMS_PLACEMENT_MAP
  ) {
    return CONTENT_ITEMS_PLACEMENT_MAP[contentItemsPlacement];
  }
}

/** @alpha */
export function getContentSelfPlacementClass(
  contentSelfPlacement?: ContentSelfPlacement
) {
  if (
    contentSelfPlacement &&
    contentSelfPlacement in CONTENT_SELF_PLACEMENT_MAP
  ) {
    return CONTENT_SELF_PLACEMENT_MAP[contentSelfPlacement];
  }
}

/** @alpha */
export const AlignmentMechanics = {
  mainAlignment: getMainAlignmentClass,
  crossAlignment: getCrossAlignmentClass,
  selfCrossAlignment: getSelfCrossAlignmentClass,
};

/** @alpha */
export const alignmentBlueprint = () : Alignment => ({ mainAlignment: "center" })

/** @alpha */
export const JustificationMechanics = {
  mainJustification: getMainJustificationClass,
  inlineJustification: getInlineJustificationClass,
  selfInlineJustification: getSelfInlineJustificationClass,
};

/** @alpha */
export const justificationBlueprint = () : Justification => ({ mainJustification: "center", })

/** @alpha */
export const ContentAlignmentMechanics = {
  contentPlacement: getContentPlacementClass,
  contentItemsPlacement: getContentItemsPlacementClass,
  contentSelfPlacement: getContentSelfPlacementClass,
};

/** @alpha */
export const contentAlignmentBlueprint = (): ContentAlignment => ({ contentPlacement: "center" })

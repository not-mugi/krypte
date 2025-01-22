import type {
  Alignment, Justification, ContentAlignment,
  MainAlignment, CrossAlignment, SelfCrossAlignment,
  ContentPlacement, ContentItemsPlacement, ContentSelfPlacement,
  MainJustification, InlineJustification, SelfInlineJustification,
} from "../main";
import {
  MAIN_ALIGNMENT_MAP, CROSS_ALIGNMENT_MAP, CROSS_SELF_ALIGNMENT_MAP,
  CONTENT_PLACEMENT_MAP, CONTENT_ITEMS_PLACEMENT_MAP, CONTENT_SELF_PLACEMENT_MAP,
  MAIN_JUSTIFICATION_MAP, INLINE_JUSTIFICATION_MAP, INLINE_SELF_JUSTIFICATION_MAP,
} from "../classes/align";

/** @alpha */
export const getMainAlignmentClass = (mainAlignment?: MainAlignment) =>
  mainAlignment && mainAlignment in MAIN_ALIGNMENT_MAP
    ? MAIN_ALIGNMENT_MAP[mainAlignment] : "";

/** @alpha */
export const getCrossAlignmentClass = (crossAlignment?: CrossAlignment) =>
  crossAlignment && crossAlignment in CROSS_ALIGNMENT_MAP
    ? CROSS_ALIGNMENT_MAP[crossAlignment] : "";

/** @alpha */
export const getSelfCrossAlignmentClass = (selfCrossAlignment?: SelfCrossAlignment) => 
  selfCrossAlignment && selfCrossAlignment in CROSS_SELF_ALIGNMENT_MAP
    ? CROSS_SELF_ALIGNMENT_MAP[selfCrossAlignment] : "";

/** @alpha */
export const getMainJustificationClass = (mainJustification?: MainJustification)  => 
  mainJustification && mainJustification in MAIN_JUSTIFICATION_MAP 
    ? MAIN_JUSTIFICATION_MAP[mainJustification] : "";


/** @alpha */
export const getInlineJustificationClass = ( inlineJustification?: InlineJustification) =>
  inlineJustification && inlineJustification in INLINE_JUSTIFICATION_MAP
    ? INLINE_JUSTIFICATION_MAP[inlineJustification] : "";

/** @alpha */
export const getSelfInlineJustificationClass = ( selfInlineJustification?: SelfInlineJustification) =>
  selfInlineJustification && selfInlineJustification in INLINE_SELF_JUSTIFICATION_MAP
    ? INLINE_SELF_JUSTIFICATION_MAP[selfInlineJustification] : "";

/** @alpha */
export const getContentPlacementClass = (contentPlacement?: ContentPlacement) =>
  contentPlacement && contentPlacement in CONTENT_PLACEMENT_MAP
    ? CONTENT_PLACEMENT_MAP[contentPlacement] : "";

/** @alpha */
export const getContentItemsPlacementClass = ( contentItemsPlacement?: ContentItemsPlacement) =>
  contentItemsPlacement && contentItemsPlacement in CONTENT_ITEMS_PLACEMENT_MAP
    ? CONTENT_ITEMS_PLACEMENT_MAP[contentItemsPlacement] : "";

/** @alpha */
export const getContentSelfPlacementClass = ( contentSelfPlacement?: ContentSelfPlacement) =>
  contentSelfPlacement && contentSelfPlacement in CONTENT_SELF_PLACEMENT_MAP
    ? CONTENT_SELF_PLACEMENT_MAP[contentSelfPlacement] : ""

/** @alpha */
export const AlignmentMechanics = {
  mainAlignment: getMainAlignmentClass,
  crossAlignment: getCrossAlignmentClass,
  selfCrossAlignment: getSelfCrossAlignmentClass,
};

/** @alpha */
export const alignmentBlueprint = (): Alignment => ({
  mainAlignment: "center",
});

/** @alpha */
export const JustificationMechanics = {
  mainJustification: getMainJustificationClass,
  inlineJustification: getInlineJustificationClass,
  selfInlineJustification: getSelfInlineJustificationClass,
};

/** @alpha */
export const justificationBlueprint = (): Justification => ({
  mainJustification: "center",
});

/** @alpha */
export const ContentAlignmentMechanics = {
  contentPlacement: getContentPlacementClass,
  contentItemsPlacement: getContentItemsPlacementClass,
  contentSelfPlacement: getContentSelfPlacementClass,
};

/** @alpha */
export const contentAlignmentBlueprint = (): ContentAlignment => ({
  contentPlacement: "center",
});

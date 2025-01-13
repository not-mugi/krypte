// prettier-ignore
import {
  BoxContent, PositionalPlacement,
  MainAlignment, CrossAlignment, SelfCrossAlignment,
  ContentFloat, ContentPosition, Position, Spatiality,
  MainJustification, InlineJustification, SelfInlineJustification
} from "@mugijs/shared-core";

// prettier-ignore
import {
  FIXED_PLACEMENT_MAP, BOX_CONTENT_MAP, BOX_DISPLAY_MAP,
  CONTENT_POSITION_MAP, CONTENT_FLOAT_MAP, CONTENT_CLEAR_MAP,
  MAIN_ALIGNMENT_MAP, CROSS_ALIGNMENT_MAP, CROSS_SELF_ALIGNMENT_MAP,
  MAIN_JUSTIFICATION_MAP, INLINE_JUSTIFICATION_MAP, INLINE_SELF_JUSTIFICATION_MAP,
} from "../maps/box";

function getBoxDisplayClass(spatiality?: Spatiality) {
  if (spatiality && spatiality in BOX_DISPLAY_MAP) {
    return BOX_DISPLAY_MAP[spatiality];
  }
}

function getBoxContentClass(content?: BoxContent) {
  if (content && content in BOX_CONTENT_MAP) {
    return BOX_CONTENT_MAP[content];
  }
}

function getContentPositionClass(position?: Position) {
  if (position && position in CONTENT_POSITION_MAP) {
    return CONTENT_POSITION_MAP[position];
  }
}

function getPostionalPlacementClass(positionalPlacement?: PositionalPlacement) {
  if (positionalPlacement && positionalPlacement in FIXED_PLACEMENT_MAP) {
    return FIXED_PLACEMENT_MAP[positionalPlacement];
  }
}

function getContentFloatClass(contentFloat?: ContentFloat) {
  if (contentFloat && contentFloat in CONTENT_FLOAT_MAP) {
    return CONTENT_FLOAT_MAP[contentFloat];
  }
}

function getContentClearClass(contentPosition?: ContentPosition) {
  if (contentPosition && contentPosition in CONTENT_CLEAR_MAP) {
    return CONTENT_CLEAR_MAP[contentPosition];
  }
}

function getMainJustificationClass(justification?: MainJustification) {
  if (justification && justification in MAIN_JUSTIFICATION_MAP) {
    return MAIN_JUSTIFICATION_MAP[justification];
  }
}

function getInlineJustificationClass(justification?: InlineJustification) {
  if (justification && justification in INLINE_JUSTIFICATION_MAP) {
    return MAIN_JUSTIFICATION_MAP[justification];
  }
}

function getSelfInlineJustificationClass(
  justification?: SelfInlineJustification
) {
  if (justification && justification in INLINE_SELF_JUSTIFICATION_MAP) {
    return INLINE_SELF_JUSTIFICATION_MAP[justification];
  }
}

function getMainAlignmentClass(alignment?: MainAlignment) {
  if (alignment && alignment in MAIN_ALIGNMENT_MAP) {
    return MAIN_ALIGNMENT_MAP[alignment];
  }
}

function getCrossAlignmentClass(alignment?: CrossAlignment) {
  if (alignment && alignment in CROSS_ALIGNMENT_MAP) {
    return CROSS_ALIGNMENT_MAP[alignment];
  }
}

function getSelfCrossAlignmentClass(alignment?: SelfCrossAlignment) {
  if (alignment && alignment in CROSS_SELF_ALIGNMENT_MAP) {
    return CROSS_SELF_ALIGNMENT_MAP[alignment];
  }
}

export const BoxMechanics = {
  display: getBoxDisplayClass,
  content: getBoxContentClass,
  position: getContentPositionClass,
  placement: getPostionalPlacementClass,
  float: getContentFloatClass,
  clear: getContentClearClass,
  justification: getMainJustificationClass,
  inlineJustification: getInlineJustificationClass,
  selfJustification: getSelfInlineJustificationClass,
  alignment: getMainAlignmentClass,
  crossAlignment: getCrossAlignmentClass,
  selfCrossAlignment: getSelfCrossAlignmentClass,
};

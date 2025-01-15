// prettier-ignore
import {
  BoxContent, LogicalPlacement, EdgesPlacement,
  MainAlignment, CrossAlignment, SelfCrossAlignment,
  ContentFloat, ContentPosition, Position, Spatiality,
  MainJustification, InlineJustification, SelfInlineJustification,
  PositionalPlacement
} from "@mugijs/shared-core";
// prettier-ignore
import {
  BOX_CONTENT_MAP, BOX_DISPLAY_MAP,
  FIXED_SIDES_PLACEMENT_MAP, FIXED_LOGICAL_PLACEMENT_MAP, 
  CONTENT_POSITION_MAP, CONTENT_FLOAT_MAP, CONTENT_CLEAR_MAP,
  MAIN_ALIGNMENT_MAP, CROSS_ALIGNMENT_MAP, CROSS_SELF_ALIGNMENT_MAP,
  MAIN_JUSTIFICATION_MAP, INLINE_JUSTIFICATION_MAP, INLINE_SELF_JUSTIFICATION_MAP,
} from "../maps/box";
import { FIXED_SIDES_MARGIN_MAP } from "../maps/spacing";

/** @beta */
export function getBoxDisplayClass(spatiality?: Spatiality) {
  if (spatiality && spatiality in BOX_DISPLAY_MAP) {
    return BOX_DISPLAY_MAP[spatiality];
  }
}

/** @beta */
export function getBoxContentClass(content?: BoxContent) {
  if (content && content in BOX_CONTENT_MAP) {
    return BOX_CONTENT_MAP[content];
  }
}

/** @beta */
export function getContentPositionClass(position?: Position) {
  if (position && position in CONTENT_POSITION_MAP) {
    return CONTENT_POSITION_MAP[position];
  }
}

/** @beta */
export function getPositionalPlacement(placement?: PositionalPlacement) {
  if (placement && placement in FIXED_SIDES_PLACEMENT_MAP) {
    return FIXED_SIDES_MARGIN_MAP[placement as EdgesPlacement];
  }
  if (placement && placement in FIXED_LOGICAL_PLACEMENT_MAP) {
    return FIXED_LOGICAL_PLACEMENT_MAP[placement as LogicalPlacement];
  }
}

/** @beta */
export function getContentFloatClass(contentFloat?: ContentFloat) {
  if (contentFloat && contentFloat in CONTENT_FLOAT_MAP) {
    return CONTENT_FLOAT_MAP[contentFloat];
  }
}

/** @beta */
export function getContentClearClass(contentPosition?: ContentPosition) {
  if (contentPosition && contentPosition in CONTENT_CLEAR_MAP) {
    return CONTENT_CLEAR_MAP[contentPosition];
  }
}

/** @beta */
export function getMainJustificationClass(justification?: MainJustification) {
  if (justification && justification in MAIN_JUSTIFICATION_MAP) {
    return MAIN_JUSTIFICATION_MAP[justification];
  }
}

/** @beta */
export function getInlineJustificationClass(
  justification?: InlineJustification
) {
  if (justification && justification in INLINE_JUSTIFICATION_MAP) {
    return MAIN_JUSTIFICATION_MAP[justification];
  }
}

/** @beta */
export function getSelfInlineJustificationClass(
  justification?: SelfInlineJustification
) {
  if (justification && justification in INLINE_SELF_JUSTIFICATION_MAP) {
    return INLINE_SELF_JUSTIFICATION_MAP[justification];
  }
}

/** @beta */
export function getMainAlignmentClass(alignment?: MainAlignment) {
  if (alignment && alignment in MAIN_ALIGNMENT_MAP) {
    return MAIN_ALIGNMENT_MAP[alignment];
  }
}

/** @beta */
export function getCrossAlignmentClass(alignment?: CrossAlignment) {
  if (alignment && alignment in CROSS_ALIGNMENT_MAP) {
    return CROSS_ALIGNMENT_MAP[alignment];
  }
}

/** @beta */
export function getSelfCrossAlignmentClass(alignment?: SelfCrossAlignment) {
  if (alignment && alignment in CROSS_SELF_ALIGNMENT_MAP) {
    return CROSS_SELF_ALIGNMENT_MAP[alignment];
  }
}

/** @beta */
export type BoxConfig = {
  display: Spatiality;
  content: BoxContent;
  position: Position;
  placement: PositionalPlacement;
  float: ContentFloat;
  clear: ContentPosition;
  justification: MainJustification;
  inlineJustification: InlineJustification;
  selfJustification: SelfInlineJustification;
  alignment: MainAlignment;
  crossAlignment: CrossAlignment;
  selfCrossAlignment: SelfCrossAlignment;
};

/** @beta */
export const BoxMechanics = {
  display: getBoxDisplayClass,
  content: getBoxContentClass,
  position: getContentPositionClass,
  placement: getPositionalPlacement,
  float: getContentFloatClass,
  clear: getContentClearClass,
  justification: getMainJustificationClass,
  inlineJustification: getInlineJustificationClass,
  selfJustification: getSelfInlineJustificationClass,
  alignment: getMainAlignmentClass,
  crossAlignment: getCrossAlignmentClass,
  selfCrossAlignment: getSelfCrossAlignmentClass,
};

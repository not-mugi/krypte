import {
  FIXED_AXIS_MARGIN_MAP,
  FIXED_AXIS_PADDING_MAP,
  FIXED_LOGICAL_MARGIN_MAP,
  FIXED_LOGICAL_PADDING_MAP,
  FIXED_SIDES_MARGIN_MAP,
  FIXED_SIDES_PADDING_MAP,
  FIXED_SPACING_MAP,
  NEGATIVE_FIXED_AXIS_MARGIN_MAP,
  NEGATIVE_FIXED_LOGICAL_MARGIN_MAP,
  NEGATIVE_FIXED_SIDES_MARGIN_MAP,
  NEGATIVE_FIXED_SPACING_MAP,
} from "../maps/spacing";
import {
  AxisSpacing,
  BetweenSpacing,
  EdgesSpacing,
  LogicalSpacing,
  NegativeAxisSpacing,
  NegativeBetweenSpacing,
  NegativeEdgesSpacing,
  NegativeLogicalSpacing,
  NegativePositionalSpacing,
  PositionalSpacing,
} from "@mugijs/shared-core";

/** @beta */
export function getSpacingClass(
  spacing?: BetweenSpacing | NegativeBetweenSpacing
) {
  if (spacing && spacing in FIXED_SPACING_MAP) {
    return FIXED_SPACING_MAP[spacing as BetweenSpacing];
  }
  if (spacing && spacing in NEGATIVE_FIXED_SPACING_MAP) {
    return NEGATIVE_FIXED_SPACING_MAP[spacing as NegativeBetweenSpacing];
  }
}

/** @beta */
export function getPaddingClass(padding?: PositionalSpacing) {
  if (padding && padding in FIXED_AXIS_PADDING_MAP) {
    return FIXED_AXIS_PADDING_MAP[padding as AxisSpacing];
  }
  if (padding && padding in FIXED_SIDES_PADDING_MAP) {
    return FIXED_SIDES_PADDING_MAP[padding as EdgesSpacing];
  }
  if (padding && padding in FIXED_LOGICAL_PADDING_MAP) {
    return FIXED_LOGICAL_PADDING_MAP[padding as LogicalSpacing];
  }
}

/** @beta */
export function getMarginClass(
  margin?: PositionalSpacing | NegativePositionalSpacing
) {
  if (margin && margin in FIXED_AXIS_MARGIN_MAP) {
    return FIXED_AXIS_MARGIN_MAP[margin as AxisSpacing];
  }
  if (margin && margin in FIXED_SIDES_MARGIN_MAP) {
    return FIXED_SIDES_MARGIN_MAP[margin as EdgesSpacing];
  }
  if (margin && margin in FIXED_LOGICAL_MARGIN_MAP) {
    return FIXED_LOGICAL_MARGIN_MAP[margin as LogicalSpacing];
  }
  return getNegativeMarginClass(margin as NegativePositionalSpacing);
}

export function getNegativeMarginClass(margin?: NegativePositionalSpacing) {
  if (margin && margin in NEGATIVE_FIXED_AXIS_MARGIN_MAP) {
    return NEGATIVE_FIXED_AXIS_MARGIN_MAP[margin as NegativeAxisSpacing];
  }
  if (margin && margin in NEGATIVE_FIXED_SIDES_MARGIN_MAP) {
    return NEGATIVE_FIXED_SIDES_MARGIN_MAP[margin as NegativeEdgesSpacing];
  }
  if (margin && margin in NEGATIVE_FIXED_LOGICAL_MARGIN_MAP) {
    return NEGATIVE_FIXED_LOGICAL_MARGIN_MAP[margin as NegativeLogicalSpacing];
  }
}

/** @beta */
export type SpacingConfig = {
  spacing?: BetweenSpacing | NegativeBetweenSpacing;
  padding?: PositionalSpacing;
  margin?: PositionalSpacing | NegativePositionalSpacing;
};

/** @beta */
export const SpacingMechanics = {
  spacing: getSpacingClass,
  padding: getPaddingClass,
  margin: getMarginClass,
};

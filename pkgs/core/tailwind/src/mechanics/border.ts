// prettier-ignore
import { 
  Axis, BorderExtent,
  OutlineStyle, BorderStyle,
  FullBorderRadiusExtent, BorderRingExtent, BorderRingOffset,
  SideBorderRadiusExtent, CornerBorderRadiusExtent, LogicalBorderRadiusExtent
} from "@mugijs/shared-core";
// prettier-ignore
import { 
  BORDER_RING_WIDTH_MAP, BORDER_RING_OFFSET_MAP,
  BORDER_WIDTH_MAP, BORDER_STYLE_MAP, FULL_BORDER_RADIUS_MAP,
  BORDER_OUTLINE_STYLE_MAP, BORDER_OUTLINE_WIDTH_MAP, BORDER_OUTLINE_OFFSET_MAP,
  CORNER_BORDER_RADIUS_MAP, SIDE_BORDER_RADIUS_MAP, LOGICAL_CORNER_BORDER_RADIUS_MAP,
  BORDER_DIVIDER_REVERSE_MAP, BORDER_INLINE_DIVIDER_WIDTH_MAP, BORDER_CROSS_DIVIDER_WIDTH_MAP, 
} from "../maps/border";

/** @beta */
export function getBorderWidthClass(borderWidth?: BorderExtent) {
  if (borderWidth && borderWidth in BORDER_WIDTH_MAP) {
    return BORDER_WIDTH_MAP[borderWidth];
  }
}

/** @beta */
export function getBorderStyleClass(borderStyle?: BorderStyle) {
  if (borderStyle && borderStyle in BORDER_STYLE_MAP) {
    return BORDER_STYLE_MAP[borderStyle];
  }
}

/** @beta */
export function getBorderDividerAxisClass(axis?: Axis) {
  if (axis && axis in BORDER_DIVIDER_REVERSE_MAP) {
    return BORDER_DIVIDER_REVERSE_MAP[axis];
  }
}

/** @beta */
export function getBorderInlineDividerWidthClass(dividerWidth?: BorderExtent) {
  if (dividerWidth && dividerWidth in BORDER_INLINE_DIVIDER_WIDTH_MAP) {
    return BORDER_INLINE_DIVIDER_WIDTH_MAP[dividerWidth];
  }
}

/** @beta */
export function getBorderCrossDividerWidthClass(dividerWidth?: BorderExtent) {
  if (dividerWidth && dividerWidth in BORDER_CROSS_DIVIDER_WIDTH_MAP) {
    return BORDER_CROSS_DIVIDER_WIDTH_MAP[dividerWidth];
  }
}

/** @beta */
export function getBorderOutlineWidthClass(borderWidth?: BorderExtent) {
  if (borderWidth && borderWidth in BORDER_OUTLINE_WIDTH_MAP) {
    return BORDER_OUTLINE_WIDTH_MAP[borderWidth];
  }
}

/** @beta */
export function getBorderOutlineStyleClass(borderStyle?: OutlineStyle) {
  if (borderStyle && borderStyle in BORDER_OUTLINE_STYLE_MAP) {
    return BORDER_OUTLINE_STYLE_MAP[borderStyle];
  }
}

/** @beta */
export function getBorderOutlineOffsetClass(borderOffset?: BorderExtent) {
  if (borderOffset && borderOffset in BORDER_OUTLINE_OFFSET_MAP) {
    return BORDER_OUTLINE_OFFSET_MAP[borderOffset];
  }
}

/** @beta */
export function getBorderRingWidthClass(ringWidth?: BorderRingExtent) {
  if (ringWidth && ringWidth in BORDER_RING_WIDTH_MAP) {
    return BORDER_RING_WIDTH_MAP[ringWidth];
  }
}

/** @beta */
export function getBorderRingOffsetClass(ringOffset?: BorderRingOffset) {
  if (ringOffset && ringOffset in BORDER_RING_OFFSET_MAP) {
    return BORDER_RING_OFFSET_MAP[ringOffset];
  }
}

/** @beta */
export function getBorderFullRadiusClass(radius?: FullBorderRadiusExtent) {
  if (radius && radius in FULL_BORDER_RADIUS_MAP) {
    return FULL_BORDER_RADIUS_MAP[radius];
  }
}

/** @beta */
export function getBorderSideRadiusClass(radius?: SideBorderRadiusExtent) {
  if (radius && radius in SIDE_BORDER_RADIUS_MAP) {
    return SIDE_BORDER_RADIUS_MAP[radius];
  }
}

/** @beta */
export function getBorderCornerRadiusClass(radius?: CornerBorderRadiusExtent) {
  if (radius && radius in CORNER_BORDER_RADIUS_MAP) {
    return CORNER_BORDER_RADIUS_MAP[radius];
  }
}

/** @beta */
export function getBorderLogicalCornerRadiusClass(radius?: LogicalBorderRadiusExtent) {
  if (radius && radius in LOGICAL_CORNER_BORDER_RADIUS_MAP) {
    return LOGICAL_CORNER_BORDER_RADIUS_MAP[radius];
  }
}

/** @beta */
export type BorderConfig = {
    width?: BorderExtent,
    style?: BorderStyle,
    dividerAxis?: Axis,
    inlineDividerWidth?: BorderExtent,
    crossDividerWidth?: BorderExtent,
    outlineWidth?: BorderExtent,
    outlineStyle?: OutlineStyle,
    outlineOffset?: BorderExtent,
    ringWidth?: BorderRingExtent,
    ringOffset?: BorderRingOffset,
    fullRadius?: FullBorderRadiusExtent,
    sideRadius?: SideBorderRadiusExtent,
    cornerRadius?: CornerBorderRadiusExtent,
    logicalCornerRadius?: LogicalBorderRadiusExtent,
}

/** @beta */
export const BorderMechanics = {
  width: getBorderWidthClass,
  style: getBorderStyleClass,
  dividerAxis: getBorderDividerAxisClass,
  inlineDividerWidth: getBorderInlineDividerWidthClass,
  crossDividerWidth: getBorderCrossDividerWidthClass,
  outlineWidth: getBorderOutlineWidthClass,
  outlineStyle: getBorderOutlineStyleClass,
  outlineOffset: getBorderOutlineOffsetClass,
  ringWidth: getBorderRingWidthClass,
  ringOffset: getBorderRingOffsetClass,
  fullRadius: getBorderFullRadiusClass,
  sideRadius: getBorderSideRadiusClass,
  cornerRadius: getBorderCornerRadiusClass,
  logicalCornerRadius: getBorderLogicalCornerRadiusClass,
};

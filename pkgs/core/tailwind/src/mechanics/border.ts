import { 
    Border,
    Axis, BorderStyle, OutlineStyle, 
    BorderMeasurements, BorderRingMeasurements, 
    CornerBorderRadiusMeasurements, FullBorderRadiusMeasurements, 
    LogicalBorderRadiusMeasurements, SideBorderRadiusMeasurements, 
} from "../typings";
import { 
  BORDER_RING_WIDTH_MAP, BORDER_RING_OFFSET_MAP,
  BORDER_WIDTH_MAP, BORDER_STYLE_MAP, FULL_BORDER_RADIUS_MAP,
  BORDER_OUTLINE_STYLE_MAP, BORDER_OUTLINE_WIDTH_MAP, BORDER_OUTLINE_OFFSET_MAP,
  CORNER_BORDER_RADIUS_MAP, SIDE_BORDER_RADIUS_MAP, LOGICAL_CORNER_BORDER_RADIUS_MAP,
  BORDER_DIVIDER_REVERSE_MAP, BORDER_INLINE_DIVIDER_WIDTH_MAP, BORDER_CROSS_DIVIDER_WIDTH_MAP, 
} from "../maps/border";
import { getBorderColorClass, getBorderOutlineColorClass, getBorderRingColorClass } from "./color";

/** @alpha */
export function getBorderWidthClass(borderWidth?: BorderMeasurements) {
  if (borderWidth && borderWidth in BORDER_WIDTH_MAP) {
    return BORDER_WIDTH_MAP[borderWidth];
  }
}

/** @alpha */
export function getBorderStyleClass(borderStyle?: BorderStyle) {
  if (borderStyle && borderStyle in BORDER_STYLE_MAP) {
    return BORDER_STYLE_MAP[borderStyle];
  }
}

/** @alpha */
export function getBorderDividerAxisClass(axis?: Axis) {
  if (axis && axis in BORDER_DIVIDER_REVERSE_MAP) {
    return BORDER_DIVIDER_REVERSE_MAP[axis];
  }
}

/** @alpha */
export function getBorderInlineDividerWidthClass(dividerWidth?: BorderMeasurements) {
  if (dividerWidth && dividerWidth in BORDER_INLINE_DIVIDER_WIDTH_MAP) {
    return BORDER_INLINE_DIVIDER_WIDTH_MAP[dividerWidth];
  }
}

/** @alpha */
export function getBorderCrossDividerWidthClass(dividerWidth?: BorderMeasurements) {
  if (dividerWidth && dividerWidth in BORDER_CROSS_DIVIDER_WIDTH_MAP) {
    return BORDER_CROSS_DIVIDER_WIDTH_MAP[dividerWidth];
  }
}

/** @alpha */
export function getBorderOutlineWidthClass(borderWidth?: BorderMeasurements) {
  if (borderWidth && borderWidth in BORDER_OUTLINE_WIDTH_MAP) {
    return BORDER_OUTLINE_WIDTH_MAP[borderWidth];
  }
}

/** @alpha */
export function getBorderOutlineStyleClass(outline?: OutlineStyle) {
  if (outline && outline in BORDER_OUTLINE_STYLE_MAP) {
    return BORDER_OUTLINE_STYLE_MAP[outline];
  }
}

/** @alpha */
export function getBorderOutlineOffsetClass(borderOffset?: BorderMeasurements) {
  if (borderOffset && borderOffset in BORDER_OUTLINE_OFFSET_MAP) {
    return BORDER_OUTLINE_OFFSET_MAP[borderOffset];
  }
}

/** @alpha */
export function getBorderRingWidthClass(ringWidth?: BorderRingMeasurements) {
  if (ringWidth && ringWidth in BORDER_RING_WIDTH_MAP) {
    return BORDER_RING_WIDTH_MAP[ringWidth];
  }
}

/** @alpha */
export function getBorderRingOffsetClass(ringOffset?: BorderMeasurements) {
  if (ringOffset && ringOffset in BORDER_RING_OFFSET_MAP) {
    return BORDER_RING_OFFSET_MAP[ringOffset];
  }
}

/** @alpha */
export function getBorderFullRadiusClass(radius?: FullBorderRadiusMeasurements) {
  if (radius && radius in FULL_BORDER_RADIUS_MAP) {
    return FULL_BORDER_RADIUS_MAP[radius];
  }
}

/** @alpha */
export function getBorderSideRadiusClass(radius?: SideBorderRadiusMeasurements) {
  if (radius && radius in SIDE_BORDER_RADIUS_MAP) {
    return SIDE_BORDER_RADIUS_MAP[radius];
  }
}

/** @alpha */
export function getBorderCornerRadiusClass(radius?: CornerBorderRadiusMeasurements) {
  if (radius && radius in CORNER_BORDER_RADIUS_MAP) {
    return CORNER_BORDER_RADIUS_MAP[radius];
  }
}

/** @alpha */
export function getBorderLogicalCornerRadiusClass(radius?: LogicalBorderRadiusMeasurements) {
  if (radius && radius in LOGICAL_CORNER_BORDER_RADIUS_MAP) {
    return LOGICAL_CORNER_BORDER_RADIUS_MAP[radius];
  }
}

/** @alpha */
export const borderBlueprint = () : Border => ({})

/** @alpha */
export const BorderMechanics = {
  style: getBorderStyleClass,
  width: getBorderWidthClass,
  color : getBorderColorClass,
  outline: getBorderOutlineStyleClass,
  outlineWidth: getBorderOutlineWidthClass,
  outlineColor : getBorderOutlineColorClass,
  outlineOffset: getBorderOutlineOffsetClass,
  dividerReverse: getBorderDividerAxisClass,
  dividerInlineWidth: getBorderInlineDividerWidthClass,
  dividerCrossWidth: getBorderCrossDividerWidthClass,
  ringWidth: getBorderRingWidthClass,
  ringColor : getBorderRingColorClass,
  ringOffset: getBorderRingOffsetClass,
  borderRadius: getBorderFullRadiusClass,
  sideRadius: getBorderSideRadiusClass,
  cornerRadius: getBorderCornerRadiusClass,
  logicalRadius: getBorderLogicalCornerRadiusClass,
};

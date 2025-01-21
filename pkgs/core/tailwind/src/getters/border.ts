import { 
    Border,
    Axis, BorderStyle, OutlineStyle, 
    BorderMeasurements, BorderRingMeasurements, 
    CornerBorderRadiusMeasurements, FullBorderRadiusMeasurements, 
    LogicalBorderRadiusMeasurements, SideBorderRadiusMeasurements, 
} from "../main";
import { 
  BORDER_RING_WIDTH_MAP, BORDER_RING_OFFSET_MAP,
  BORDER_WIDTH_MAP, BORDER_STYLE_MAP, FULL_BORDER_RADIUS_MAP,
  BORDER_OUTLINE_STYLE_MAP, BORDER_OUTLINE_WIDTH_MAP, BORDER_OUTLINE_OFFSET_MAP,
  CORNER_BORDER_RADIUS_MAP, SIDE_BORDER_RADIUS_MAP, LOGICAL_CORNER_BORDER_RADIUS_MAP,
  BORDER_DIVIDER_REVERSE_MAP, BORDER_INLINE_DIVIDER_WIDTH_MAP, BORDER_CROSS_DIVIDER_WIDTH_MAP, 
} from "../classes/border";
import { getBorderColorClass, getBorderOutlineColorClass, getBorderRingColorClass } from "./color";

/** @alpha */
export const getBorderWidthClass = (borderWidth?: BorderMeasurements) =>
  borderWidth && borderWidth in BORDER_WIDTH_MAP
    ? BORDER_WIDTH_MAP[borderWidth] : "";

/** @alpha */
export const getBorderStyleClass = (borderStyle?: BorderStyle) =>
  borderStyle && borderStyle in BORDER_STYLE_MAP
    ? BORDER_STYLE_MAP[borderStyle] : "";

/** @alpha */
export const getBorderDividerAxisClass = (axis?: Axis) =>
  axis && axis in BORDER_DIVIDER_REVERSE_MAP 
    ? BORDER_DIVIDER_REVERSE_MAP[axis] : "";

/** @alpha */
export const getBorderInlineDividerWidthClass = (dividerWidth?: BorderMeasurements) =>
  dividerWidth && dividerWidth in BORDER_INLINE_DIVIDER_WIDTH_MAP
    ? BORDER_INLINE_DIVIDER_WIDTH_MAP[dividerWidth] : "";

/** @alpha */
export const getBorderCrossDividerWidthClass = (dividerWidth?: BorderMeasurements) =>
  dividerWidth && dividerWidth in BORDER_CROSS_DIVIDER_WIDTH_MAP
    ? BORDER_CROSS_DIVIDER_WIDTH_MAP[dividerWidth] : "";

/** @alpha */
export const getBorderOutlineWidthClass = (borderWidth?: BorderMeasurements) =>
  borderWidth && borderWidth in BORDER_OUTLINE_WIDTH_MAP 
    ? BORDER_OUTLINE_WIDTH_MAP[borderWidth] : "";

/** @alpha */
export const getBorderOutlineStyleClass = (outline?: OutlineStyle) =>
  outline && outline in BORDER_OUTLINE_STYLE_MAP
    ? BORDER_OUTLINE_STYLE_MAP[outline] : "";

/** @alpha */
export const getBorderOutlineOffsetClass = (borderOffset?: BorderMeasurements) =>
  borderOffset && borderOffset in BORDER_OUTLINE_OFFSET_MAP
    ? BORDER_OUTLINE_OFFSET_MAP[borderOffset] : "";

/** @alpha */
export const getBorderRingWidthClass = (ringWidth?: BorderRingMeasurements) =>
  ringWidth && ringWidth in BORDER_RING_WIDTH_MAP
    ? BORDER_RING_WIDTH_MAP[ringWidth] : "";

/** @alpha */
export const getBorderRingOffsetClass = (ringOffset?: BorderMeasurements) =>
  ringOffset && ringOffset in BORDER_RING_OFFSET_MAP
    ? BORDER_RING_OFFSET_MAP[ringOffset] : "";

/** @alpha */
export const getBorderFullRadiusClass = (radius?: FullBorderRadiusMeasurements) =>
  radius && radius in FULL_BORDER_RADIUS_MAP
    ? FULL_BORDER_RADIUS_MAP[radius] : "";

/** @alpha */
export const getBorderSideRadiusClass = (radius?: SideBorderRadiusMeasurements) =>
  radius && radius in SIDE_BORDER_RADIUS_MAP
    ? SIDE_BORDER_RADIUS_MAP[radius] : "";

/** @alpha */
export const getBorderCornerRadiusClass = (radius?: CornerBorderRadiusMeasurements) =>
  radius && radius in CORNER_BORDER_RADIUS_MAP
    ? CORNER_BORDER_RADIUS_MAP[radius] : "";

/** @alpha */
export const getBorderLogicalCornerRadiusClass = (radius?: LogicalBorderRadiusMeasurements) =>
  radius && radius in LOGICAL_CORNER_BORDER_RADIUS_MAP
    ? LOGICAL_CORNER_BORDER_RADIUS_MAP[radius] : "";

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

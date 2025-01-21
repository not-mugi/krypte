import type {
  TextWordBreak, TextHyphen,
  Typography, TextHorizontalAlign, TextVerticalAlign,
  TextMeasurementScales, TextStyleMeasurementScales,
  LineHeightMeasurements, LineHeightScales, LineHeightRelativeScales,
  TextDecoration, TextTransform, TextOverflow, TextWrap, TextWhitespace,
} from "../main";
import {
  TEXT_WHITESPACE_MAP, TEXT_LINE_CLAMP_MAP, 
  TEXT_UNDERLINE_OFFSET_MAP, FIXED_LINE_HEIGHT_MAP,
  RELATIVE_LINE_HEIGHT_MAP, TEXT_HORIZONTAL_ALIGN_MAP, 
  TEXT_VERTICAL_ALIGN_MAP, TEXT_DECORATION_MAP, TEXT_DECORATION_THINKNESS_MAP, 
  TEXT_WORD_BREAK_MAP, TEXT_WRAP_MAP, TEXT_HYPHENS_MAP, TEXT_OVERFLOW_MAP, TEXT_TRANSFORM_MAP,
} from "../classes/typography";
import { getTextColorClass, getTextDecorationColorClass } from "./color";

/** @alpha */
export const getTextAlignClass = (textAlign?: TextHorizontalAlign) =>
  textAlign && textAlign in TEXT_HORIZONTAL_ALIGN_MAP
    ? TEXT_HORIZONTAL_ALIGN_MAP[textAlign]
    : "";

/** @alpha */
export const getTextVerticalAlignClass = (verticalAlign?: TextVerticalAlign) =>
  verticalAlign && verticalAlign in TEXT_VERTICAL_ALIGN_MAP
    ? TEXT_VERTICAL_ALIGN_MAP[verticalAlign]
    : "";

/** @alpha */
export const getTextLineClampClass = (lineClamp?: TextMeasurementScales) =>
  lineClamp && lineClamp in TEXT_LINE_CLAMP_MAP
    ? TEXT_LINE_CLAMP_MAP[lineClamp]
    : "";

/** @alpha */
export const getLineHeightClass = (lineHeight: LineHeightMeasurements) => {
  if (lineHeight && lineHeight in FIXED_LINE_HEIGHT_MAP) {
    return FIXED_LINE_HEIGHT_MAP[lineHeight as LineHeightScales];
  }
  if (lineHeight && lineHeight in RELATIVE_LINE_HEIGHT_MAP) {
    return RELATIVE_LINE_HEIGHT_MAP[lineHeight as LineHeightRelativeScales];
  }
};

/** @alpha */
export const getTextDecorationClass = (decoration?: TextDecoration) =>
  decoration && decoration in TEXT_DECORATION_MAP
    ? TEXT_DECORATION_MAP[decoration]
    : "";
/** @alpha */
export const getTextDecorationThicknessClass = (
  thickness?: TextStyleMeasurementScales
) =>
  thickness && thickness in TEXT_DECORATION_THINKNESS_MAP
    ? FIXED_LINE_HEIGHT_MAP[thickness]
    : "";

/** @alpha */
export const getTextUnderlineOffsetClass = (
  offset?: TextStyleMeasurementScales
) =>
  offset && offset in TEXT_UNDERLINE_OFFSET_MAP
    ? TEXT_UNDERLINE_OFFSET_MAP[offset]
    : "";

/** @alpha */
export const getTextTransformClass = (transform?: TextTransform) =>
  transform && transform in TEXT_TRANSFORM_MAP
    ? TEXT_TRANSFORM_MAP[transform]
    : "";

/** @alpha */
export const getTextOverflowClass = (overflow?: TextOverflow) =>
  overflow && overflow in TEXT_OVERFLOW_MAP ? TEXT_OVERFLOW_MAP[overflow] : "";

/** @alpha */
export const getTextWrapClass = (wrap?: TextWrap) =>
  wrap && wrap in TEXT_WRAP_MAP ? TEXT_WRAP_MAP[wrap] : "";

/** @alpha */
export const getTextWhitespaceClass = (whitespace?: TextWhitespace) =>
  whitespace && whitespace in TEXT_WHITESPACE_MAP
    ? TEXT_WHITESPACE_MAP[whitespace]
    : "";

/** @alpha */
export const getTextWordBreakClass = (wordBreak?: TextWordBreak) =>
  wordBreak && wordBreak in TEXT_WORD_BREAK_MAP
    ? TEXT_WORD_BREAK_MAP[wordBreak]
    : "";

/** @alpha */
export const getTextHyphenClass = (hyphen?: TextHyphen) =>
  hyphen && hyphen in TEXT_HYPHENS_MAP ? TEXT_HYPHENS_MAP[hyphen] : "";

/** @alpha */
export const typographyBlueprints = (): Typography => ({
  color: { color: "mugi" },
  align: "center",
});

/** @alpha */
export const TypographyMechanics = {
  color: getTextColorClass,
  align: getTextAlignClass,
  verticalAlign: getTextVerticalAlignClass,
  lineClamp: getTextLineClampClass,
  lineHeight: getLineHeightClass,
  decoration: getTextDecorationClass,
  decorationThickness: getTextDecorationThicknessClass,
  decorationColor: getTextDecorationColorClass,
  underlineOffset: getTextUnderlineOffsetClass,
  transform: getTextTransformClass,
  overflow: getTextOverflowClass,
  wrap: getTextWrapClass,
  whitespace: getTextWhitespaceClass,
  wordBreak: getTextWordBreakClass,
  hyphen: getTextHyphenClass,
};

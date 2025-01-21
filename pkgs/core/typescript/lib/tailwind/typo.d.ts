import { Color } from "./color";

/** Alignment /** @alpha */
export type TextVerticalAlign = "top" | "middle" | "bottom";
/** @alpha */
export type TextHorizontalAlign =
  | "start"
  | "end"
  | "center"
  | "justify"
  | "left"
  | "right";
/** Measaurement /** @alpha */
export type TextMeasurementScales = "xs" | "sm" | "md" | "lg" | "xl" | "none";
/** Line Height /** @alpha */
export type LineHeightScales = Exclude<TextMeasurementScales, "none">;
/** @alpha */
export type LineHeightRelativeScales =
  | "none"
  | "tight"
  | "snug"
  | "normal"
  | "relaxed"
  | "loose";
/** @alpha */
export type LineHeightMeasurements =
  | LineHeightScales
  | LineHeightRelativeScales;
/** Decoration /** @alpha */
export type TextDecoration =
  | "underline"
  | "overline"
  | "line-through"
  | "no-underline";
/** @alpha */
export type TextDecorationStyle =
  | "solid"
  | "double"
  | "dashed"
  | "dotted"
  | "wavy";
/** @alpha */
export type TextStyleMeasurementScales = Exclude<
  TextMeasurementScales,
  "xl" | "none"
>;
/** @alpha */
export type TextTransform = "uppercase" | "lowercase" | "capitalize" | "normal";
/** @alpha */
export type TextOverflow = "truncate" | "ellipsis" | "clip";
/** @alpha */
export type TextWrap = "none" | "wrap" | "balance" | "pretty";
/** @alpha */
export type TextWhitespace =
  | "normal"
  | "nowrap"
  | "pre"
  | "preline"
  | "prewrap"
  | "breakspaces";
/** @alpha */
export type TextWordBreak = "normal" | "words" | "all" | "keep";
/** @alpha */
export type TextHyphen = "none" | "manual" | "auto";
 /** Alignment /** @alpha */
export type Typography = Partial<{
  color: Color;
  align: TextHorizontalAlign;
  verticalAlign: TextVerticalAlign;
  lineClamp: TextMeasurementScales;
  lineHeight: LineHeightMeasurements;
  decoration: TextDecoration;
  decorationThickness: TextStyleMeasurementScales;
  decorationColor: Color;
  underlineOffset: TextStyleMeasurementScales;
  transform: TextTransform;
  overflow: TextOverflow;
  wrap: TextWrap;
  whitespace: TextWhitespace;
  wordBreak: TextWordBreak;
  hyphen: TextHyphen;
}>;

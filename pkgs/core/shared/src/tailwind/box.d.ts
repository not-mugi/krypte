import { MeasurementScales } from "./measurement"

/** @alpha */
export type BoxSizing = "border" | "content";
/** @alpha */
export type BoxDisplay =  "flex" | "grid" | "block" | "inline" | "hidden" | "flowRoot" | "contents" | "inlineBlock" | "inlineFlex" | "inlineGrid";

/** @alpha */
export type ContentGap = MeasurementScales;
/** @alpha */
export type ContentFloat = "left" | "right" | "none" | "start" | "end";
/** @alpha */
export type ContentClear = "left" | "right" | "both" | "none" | "start" | "end";
/** @alpha */
export type ContentPosition = "static" | "fixed" | "absolute" | "relative" | "sticky";
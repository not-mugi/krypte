/** @alpha */ //prettier-ignore
import { MeasurementScales } from "./measurement"

export type BoxSizing = "border" | "content";
export type BoxDisplay =  "flex" | "grid" | "block" | "inline" | "hidden" | "flowRoot" | "contents" | "inlineBlock" | "inlineFlex" | "inlineGrid";

export type ContentGap = MeasurementScales;
export type ContentFloat = "left" | "right" | "none" | "start" | "end";
export type ContentClear = "left" | "right" | "both" | "none" | "start" | "end";
export type ContentPosition = "static" | "fixed" | "absolute" | "relative" | "sticky";
/** @alpha */ //prettier-ignore
import { MixedTwClass } from "../generics/tailwind";
import { MeasurementScales } from "./measurement";
import { Corners, Edges, LogicalCorners } from "./layout"

/** Border Style */
export type BorderStyle = "solid" | "dashed" | "dotted" | "double" | "hidden" | "none";

/** Outline Style */
export type OutlineStyle = Exclude<BorderStyle, "hidden">

    /** Border Width */
export type BorderMeasurements = Extract<MeasurementScales, "none" | "sm" | "md" | "lg" | "xl">;

/** Border Radius */
export type BorderRadiusMeasurements = BorderMeasurements | "xxl";
export type FullBorderRadiusMeasurements = BorderRadiusMeasurements | "full"
export type SideBorderRadiusMeasurements = MixedTwClass<Edges, BorderRadiusMeasurements>;
export type CornerBorderRadiusExtent = MixedTwClass<Corners, BorderRadiusMeasurements>;
export type LogicalBorderRadiusExtent = MixedTwClass<LogicalCorners, BorderRadiusMeasurements>;

/** Border Ring */
export type BorderRingMeasurements = BorderMeasurements | "inset";
export type BorderRingOffsetMeasurements = Exclude<BorderRingMeasurements, "inset">;
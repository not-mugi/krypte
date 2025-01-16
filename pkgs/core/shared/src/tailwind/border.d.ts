import { MixedTwClass } from "../generics/tailwind";
import { MeasurementScales } from "./measurement";
import { Corners, Edges, LogicalCorners } from "./layout"

/** Border Style */
/** @alpha */
export type BorderStyle = "solid" | "dashed" | "dotted" | "double" | "hidden" | "none";

/** Outline Style */
/** @alpha */
export type OutlineStyle = Exclude<BorderStyle, "hidden">

/** Border Width */
/** @alpha */
export type BorderMeasurements = Extract<MeasurementScales, "none" | "sm" | "md" | "lg" | "xl">;

/** Border Radius */
/** @alpha */
export type BorderRadiusMeasurements = BorderMeasurements | "xxl";
/** @alpha */
export type FullBorderRadiusMeasurements = BorderRadiusMeasurements | "full"
/** @alpha */
export type SideBorderRadiusMeasurements = MixedTwClass<Edges, BorderRadiusMeasurements>;
/** @alpha */
export type CornerBorderRadiusExtent = MixedTwClass<Corners, BorderRadiusMeasurements>;
/** @alpha */
export type LogicalBorderRadiusExtent = MixedTwClass<LogicalCorners, BorderRadiusMeasurements>;

/** Border Ring */
/** @alpha */
export type BorderRingMeasurements = BorderMeasurements | "inset";
/** @alpha */
export type BorderRingOffsetMeasurements = Exclude<BorderRingMeasurements, "inset">;
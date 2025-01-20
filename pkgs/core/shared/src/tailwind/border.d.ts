import { MixedTwClass } from "../typescript/tailwind";
import { MeasurementScales } from "./sizing";
import { Axis, Corners, Edges, LogicalCorners } from "./layout"
import { Color } from "./color";

/** @alpha */ /** Border Style */
export type BorderStyle = "solid" | "dashed" | "dotted" | "double" | "hidden" | "none";

/** @alpha */ /** Outline Style */
export type OutlineStyle = Exclude<BorderStyle, "hidden">

/** @alpha */ /** Border Width */
export type BorderMeasurements = Extract<MeasurementScales, "none" | "sm" | "md" | "lg" | "xl">;

/** @alpha */ /** Border Radius */
export type BorderRadiusMeasurements = BorderMeasurements | "xxl";
/** @alpha */
export type FullBorderRadiusMeasurements = BorderRadiusMeasurements | "full"
/** @alpha */
export type SideBorderRadiusMeasurements = MixedTwClass<Edges, BorderRadiusMeasurements>;
/** @alpha */
export type CornerBorderRadiusMeasurements = MixedTwClass<Corners, BorderRadiusMeasurements>;
/** @alpha */
export type LogicalBorderRadiusMeasurements = MixedTwClass<LogicalCorners, BorderRadiusMeasurements>;

/** @alpha */ /** Border Ring */
export type BorderRingMeasurements = BorderMeasurements | "inset";

/** @alpha */ /** Border Radius */
export type Border = Partial<{
    style : BorderStyle,
    width : BorderMeasurements,
    color : Color,
    outline : OutlineStyle,
    outlineWidth : BorderMeasurements,
    outlineColor : Color,
    outlineOffset : BorderMeasurements,
    dividerWidth : BorderMeasurements,
    dividerReverse : Axis,
    dividerInlineWidth : BorderMeasurements,
    dividerCrossWidth : BorderMeasurements,
    ringWidth : BorderRingMeasurements,
    ringColor : Color,
    ringOffset : BorderMeasurements,
    borderRadius : FullBorderRadiusMeasurements,
    sideRadius : SideBorderRadiusMeasurements,
    cornerRadius : CornerBorderRadiusMeasurements,
    logicalRadius : LogicalBorderRadiusMeasurements
}>
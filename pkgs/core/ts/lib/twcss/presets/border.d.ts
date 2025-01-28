import { CSSClass } from "../utility";
import { MeasurementScales } from "./sizing";
import { Axis, Corners, Edges, LogicalCorners } from "./layout"
import { Color } from "./color";

/** @alpha */
export type BorderStyle = "solid" | "dashed" | "dotted" | "double" | "hidden" | "none";

/** @alpha */
export type OutlineStyle = Exclude<BorderStyle, "hidden">

/** @alpha */
export type BorderMeasurements = Extract<MeasurementScales, "none" | "sm" | "md" | "lg" | "xl">;

/** @alpha */
export type BorderRadiusMeasurements = BorderMeasurements | "xxl";
/** @alpha */
export type FullBorderRadiusMeasurements = BorderRadiusMeasurements | "full"
/** @alpha */
export type SideBorderRadiusMeasurements = CSSClass<Edges, BorderRadiusMeasurements>;
/** @alpha */
export type CornerBorderRadiusMeasurements = CSSClass<Corners, BorderRadiusMeasurements>;
/** @alpha */
export type LogicalBorderRadiusMeasurements = CSSClass<LogicalCorners, BorderRadiusMeasurements>;

/** @alpha */
export type BorderRingMeasurements = BorderMeasurements | "inset";

/** @alpha */
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
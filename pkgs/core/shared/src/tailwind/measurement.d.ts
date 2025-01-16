/** Base */
/** @alpha */
export type MeasurementScales = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxl";
/** @alpha */
export type MeasurementRatios = "1/12" | "1/6" | "1/4" | "1/3" | "5/12" | "1/2" | "7/12" | "2/3" | "3/4" | "5/6" | "11/12" | "full" | "min" | "max" | "fit" | "screen";
/** @alpha */
export type Measurements = MeasurementScales | MeasurementRatios;

/** Size */
/** @alpha */
export type SizeMeasurements = Exclude<Measurements, "screen">;
/** @alpha */
export type WidthMeasurements = MeasurementScales;
/** @alpha */
export type HeightMeasurements = Exclude< MeasurementScales, "1/12" | "1/4" | "5/12" | "7/12" | "3/4" | "11/12" >
/** @alpha */
export type DimensionMeasurements = { width: WidthMeasurements; height: HeightMeasurements };

/** Line Height */
/** @alpha */
export type LineHeightScales = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
/** @alpha */
export type RelativeLineHeight = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
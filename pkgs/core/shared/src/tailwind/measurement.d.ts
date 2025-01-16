/** @alpha */ //prettier-ignore
/** Base */
export type MeasurementScales = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxl";
export type MeasurementRatios = "1/12" | "1/6" | "1/4" | "1/3" | "5/12" | "1/2" | "7/12" | "2/3" | "3/4" | "5/6" | "11/12" | "full" | "min" | "max" | "fit" | "screen";
export type Measurements = MeasurementScales | MeasurementRatios;

/** Size */
export type SizeMeasurements = Exclude<Measurements, "screen">;
export type WidthMeasurements = MeasurementScales;
export type HeightMeasurements = Exclude< MeasurementScales, "1/12" | "1/4" | "5/12" | "7/12" | "3/4" | "11/12" >
export type DimensionMeasurements = { width: WidthMeasurements; height: HeightMeasurements };

/** Line Height */
export type LineHeightScales = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type RelativeLineHeight = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
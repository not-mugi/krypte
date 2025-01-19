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
export type WidthMeasurements = Measurements;
/** @alpha */
export type HeightMeasurementRatios = Exclude< MeasurementRatios, "1/12" | "1/4" | "5/12" | "7/12" | "3/4" | "11/12" >
/** @alpha */
export type HeightMeasurements = MeasurementScales | HeightMeasurementRatios;
/** @alpha */
export type DimensionMeasurements = { width: WidthMeasurements; height: HeightMeasurements };
/** @alpha */
export type Sizing = Partial<{ size: SizeMeasurements; width: WidthMeasurements; height: HeightMeasurements; dimensions: DimensionMeasurements }>
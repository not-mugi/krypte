import type { 
    MeasurementScales, MeasurementRatios,
    SizeMeasurements, DimensionMeasurements,
    WidthMeasurements, HeightMeasurements, HeightMeasurementRatios,
    Sizing,
} from "../typings";
import {
  FIXED_SIZE_MAP, FIXED_HEIGHT_MAP, FIXED_WIDTH_MAP,
  PERCENTAGE_SIZE_MAP, PERCENTAGE_HEIGHT_MAP, PERCENTAGE_WIDTH_MAP,
} from "../maps/sizing";

/** @alpha */
export function getSizeClass(extent?: SizeMeasurements) {
  if (extent && extent in FIXED_SIZE_MAP) {
    return FIXED_SIZE_MAP[extent as MeasurementScales];
  }
  if (extent && extent in PERCENTAGE_SIZE_MAP) {
    return PERCENTAGE_SIZE_MAP[extent as Extract<SizeMeasurements, MeasurementRatios>];
  }
}

/** @alpha */
export function getWidthClass(extent?: WidthMeasurements) {
  if (extent && extent in FIXED_WIDTH_MAP) {
    return FIXED_WIDTH_MAP[extent as MeasurementScales];
  }
  if (extent && extent in PERCENTAGE_WIDTH_MAP) {
    return PERCENTAGE_WIDTH_MAP[extent as MeasurementRatios];
  }
}

/** @alpha */
export function getHeightClass(extent?: HeightMeasurements) {
  if (extent && extent in FIXED_HEIGHT_MAP) {
    return FIXED_HEIGHT_MAP[extent as MeasurementScales];
  }
  if (extent && extent in PERCENTAGE_HEIGHT_MAP) {
    return PERCENTAGE_HEIGHT_MAP[extent as HeightMeasurementRatios];
  }
}

/** @alpha */
export function getDimensionClasses(dimension?: DimensionMeasurements) {
  if (!dimension) return;
  const { width, height } = dimension;
  return `${getWidthClass(width)} ${getHeightClass(height)}`;
}

/** @alpha */
export const sizingBlueprints = () : Sizing => ({ size : "md" });

/** @alpha */
export const SizingMechanics = {
  size: getSizeClass,
  width: getWidthClass,
  height: getHeightClass,
  dimensions: getDimensionClasses,
}
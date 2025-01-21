import type {
  MeasurementScales,
  MeasurementRatios,
  SizeMeasurements,
  DimensionMeasurements,
  WidthMeasurements,
  HeightMeasurements,
  HeightMeasurementRatios,
  Sizing,
} from "../main";
import {
  FIXED_SIZE_MAP,
  FIXED_HEIGHT_MAP,
  FIXED_WIDTH_MAP,
  PERCENTAGE_SIZE_MAP,
  PERCENTAGE_HEIGHT_MAP,
  PERCENTAGE_WIDTH_MAP,
} from "../classes/sizing";

/** @alpha */
export const getSizeClass = (extent?: SizeMeasurements) => {
  if (extent && extent in FIXED_SIZE_MAP) {
    return FIXED_SIZE_MAP[extent as MeasurementScales];
  }
  if (extent && extent in PERCENTAGE_SIZE_MAP) {
    return PERCENTAGE_SIZE_MAP[
      extent as Extract<SizeMeasurements, MeasurementRatios>
    ];
  }
};

/** @alpha */
export const getWidthClass = (extent?: WidthMeasurements) => {
  if (extent && extent in FIXED_WIDTH_MAP) {
    return FIXED_WIDTH_MAP[extent as MeasurementScales];
  }
  if (extent && extent in PERCENTAGE_WIDTH_MAP) {
    return PERCENTAGE_WIDTH_MAP[extent as MeasurementRatios];
  }
};

/** @alpha */
export const getHeightClass = (extent?: HeightMeasurements) => {
  if (extent && extent in FIXED_HEIGHT_MAP) {
    return FIXED_HEIGHT_MAP[extent as MeasurementScales];
  }
  if (extent && extent in PERCENTAGE_HEIGHT_MAP) {
    return PERCENTAGE_HEIGHT_MAP[extent as HeightMeasurementRatios];
  }
};

/** @alpha */
export const getDimensionClasses = (dimension?: DimensionMeasurements) => {
  if (!dimension) return;
  const { width, height } = dimension;
  return `${getWidthClass(width)} ${getHeightClass(height)}`;
};

/** @alpha */
export const sizingBlueprints = (): Sizing => ({ size: "md" });

/** @alpha */
export const SizingMechanics = {
  size: getSizeClass,
  width: getWidthClass,
  height: getHeightClass,
  dimensions: getDimensionClasses,
};

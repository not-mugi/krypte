// prettier-ignore
import {
  FIXED_SIZE_MAP, FIXED_HEIGHT_MAP, FIXED_WIDTH_MAP,
  PERCENTAGE_SIZE_MAP, PERCENTAGE_HEIGHT_MAP, PERCENTAGE_WIDTH_MAP,
} from "../maps/sizing";
// prettier-ignore
import {
  Dimensions, 
  Extent, SizeExtent, HeightExtent,
} from "@mugijs/shared-core";

function getSizeClass(extent?: SizeExtent) {
  if (extent && extent in FIXED_SIZE_MAP) {
    return FIXED_SIZE_MAP[extent];
  }
  if (extent && extent in PERCENTAGE_SIZE_MAP) {
    return PERCENTAGE_SIZE_MAP[extent];
  }
}

function getWidthClass(extent?: Extent) {
  if (extent && extent in FIXED_WIDTH_MAP) {
    return FIXED_WIDTH_MAP[extent];
  }
  if (extent && extent in PERCENTAGE_WIDTH_MAP) {
    return PERCENTAGE_WIDTH_MAP[extent];
  }
}

function getHeightClass(extent?: HeightExtent) {
  if (extent && extent in FIXED_HEIGHT_MAP) {
    return FIXED_HEIGHT_MAP[extent];
  }
  if (extent && extent in PERCENTAGE_HEIGHT_MAP) {
    return PERCENTAGE_HEIGHT_MAP[extent];
  }
}

function getDimensionClasses(dimension?: Dimensions) {
  if (!dimension) return;
  const { width, height } = dimension;
  return `${getWidthClass(width)} ${getHeightClass(height)}`;
}

export const SizeMechanics = {
  size: getSizeClass,
  width: getWidthClass,
  height: getHeightClass,
  dimensions: getDimensionClasses,
}
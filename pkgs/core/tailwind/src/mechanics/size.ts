// prettier-ignore
import {
  FIXED_SIZE_MAP, FIXED_HEIGHT_MAP, FIXED_WIDTH_MAP,
  PERCENTAGE_SIZE_MAP, PERCENTAGE_HEIGHT_MAP, PERCENTAGE_WIDTH_MAP,
} from "../maps";
// prettier-ignore
import {
  Dimensions, 
  Extent, SizeExtent, HeightExtent,
} from "@mugijs/shared-core";

export function getSizeClass(extent: SizeExtent) {
  if (extent in FIXED_SIZE_MAP) {
    return FIXED_SIZE_MAP[extent];
  }
  if (extent in PERCENTAGE_SIZE_MAP) {
    return PERCENTAGE_SIZE_MAP[extent];
  }
}

export function getWidthClass(extent: Extent) {
  if (extent in FIXED_WIDTH_MAP) {
    return FIXED_WIDTH_MAP[extent];
  }
  if (extent in PERCENTAGE_WIDTH_MAP) {
    return PERCENTAGE_WIDTH_MAP[extent];
  }
}

export function getHeightClass(extent: HeightExtent) {
  if (extent in FIXED_HEIGHT_MAP) {
    return FIXED_HEIGHT_MAP[extent];
  }
  if (extent in PERCENTAGE_HEIGHT_MAP) {
    return PERCENTAGE_HEIGHT_MAP[extent];
  }
}

// prettier-ignore
export function getDimensionClasses({ width, height}: Dimensions) {
  return `${getWidthClass(width)} ${getHeightClass(height)}`;
}

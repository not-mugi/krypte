// prettier-ignore
import {
  FIXED_SIZE_MAP, FIXED_HEIGHT_MAP, FIXED_WIDTH_MAP,
  PERCENTAGE_SIZE_MAP, PERCENTAGE_HEIGHT_MAP, PERCENTAGE_WIDTH_MAP,
} from "../maps";
import { KeyofMap, Extent, Dimensions } from "@mugijs/shared-core";

// prettier-ignore
export function getDimensionsClass(dimensions: Dimensions) {
  return `${getWidthClass(dimensions.width)} ${getHeightClass(dimensions.height)}`;
}

export function getSizeClass(extent: Exclude<Extent, "screen">) {
  if (extent in FIXED_SIZE_MAP) {
    return FIXED_SIZE_MAP[extent as KeyofMap<typeof FIXED_SIZE_MAP>];
  }
  if (extent in PERCENTAGE_SIZE_MAP) {
    return PERCENTAGE_SIZE_MAP[extent as KeyofMap<typeof PERCENTAGE_SIZE_MAP>];
  }
}

export function getWidthClass(extent: Extent) {
  if (extent in FIXED_WIDTH_MAP) {
    return FIXED_WIDTH_MAP[extent as KeyofMap<typeof FIXED_WIDTH_MAP>];
  }
  if (extent in PERCENTAGE_WIDTH_MAP) {
    return PERCENTAGE_WIDTH_MAP[
      extent as KeyofMap<typeof PERCENTAGE_WIDTH_MAP>
    ];
  }
}

export function getHeightClass(
  extent: Exclude<Extent, "1/12" | "1/4" | "5/12" | "7/12" | "3/4" | "11/12">
) {
  if (extent in FIXED_HEIGHT_MAP) {
    return FIXED_HEIGHT_MAP[extent as KeyofMap<typeof FIXED_HEIGHT_MAP>];
  }
  if (extent in PERCENTAGE_HEIGHT_MAP) {
    return PERCENTAGE_HEIGHT_MAP[
      extent as KeyofMap<typeof PERCENTAGE_HEIGHT_MAP>
    ];
  }
}

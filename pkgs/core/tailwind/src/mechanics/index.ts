// prettier-ignore
import {
  KeyofMap,
  BoxSizing,
  Colors, Intensity,
  Extent, FixedExtent, PercentageExtent, Dimensions,
  Placement, InlinePlacement, ObjectPlacement, Justification, TextJustification,
} from "@mugijs/shared-core";
// prettier-ignore
import {
  BOX_SIZING_MAP,
  INTENSITY_MAP, MUGI_INTENSITY_MAP,
  TEXT_ALIGNMENT_MAP, INLINE_VERTICAL_ALIGN_MAP,
  FIXED_SIZE_MAP, FIXED_HEIGHT_MAP, FIXED_WIDTH_MAP,
  PERCENTAGE_SIZE_MAP, PERCENTAGE_HEIGHT_MAP, PERCENTAGE_WIDTH_MAP,
} from "../maps";
import { MUGI_THEME_COLORS } from "../constants";

export function getColorClass(color: Colors, intensity?: Intensity) {
  if (!intensity) {
    return color;
  }
  if (color in MUGI_THEME_COLORS) {
    return `${color}-${MUGI_INTENSITY_MAP[intensity]}`;
  }
  return `${color}-${INTENSITY_MAP[intensity]}`;
}

export function getTextColorClass(color: Colors, intensity?: Intensity) {
  return `text-${getColorClass(color, intensity)}`;
}

export function getBackgroundColorClass(color: Colors, intensity?: Intensity) {
  return `bg-${getColorClass(color, intensity)}`;
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

// prettier-ignore
export function getDimensionsClass(dimensions: Dimensions) {
  return `${getWidthClass(dimensions.width)} ${getHeightClass(dimensions.height)}`;
}

export function getInlineYAlignClass(placement: InlinePlacement) {
  if (placement in INLINE_VERTICAL_ALIGN_MAP) {
    return INLINE_VERTICAL_ALIGN_MAP[
      placement as KeyofMap<typeof INLINE_VERTICAL_ALIGN_MAP>
    ];
  }
}

export function getTextAlignClass(placement: TextJustification) {
  if (placement in TEXT_ALIGNMENT_MAP) {
    return TEXT_ALIGNMENT_MAP[placement as KeyofMap<typeof TEXT_ALIGNMENT_MAP>];
  }
}

export function getBoxSizingClass(boxSizing: BoxSizing) {
  if (boxSizing in BOX_SIZING_MAP) {
    return BOX_SIZING_MAP[boxSizing as KeyofMap<typeof BOX_SIZING_MAP>];
  }
}

import { MUGI_THEME_COLORS } from "../constants";
import { INTENSITY_MAP, MUGI_INTENSITY_MAP } from "../maps/colors";

import { Colors, Intensity } from "@mugijs/shared-core";

export function getTextColorClass(color: Colors, intensity?: Intensity) {
  return `text-${getColorClass(color, intensity)}`;
}

export function getBackgroundColorClass(color: Colors, intensity?: Intensity) {
  return `bg-${getColorClass(color, intensity)}`;
}

export function getColorClass(color: Colors, intensity?: Intensity) {
  if (!intensity) {
    return color;
  }
  if (color in MUGI_THEME_COLORS) {
    return `${color}-${MUGI_INTENSITY_MAP[intensity]}`;
  }
  return `${color}-${INTENSITY_MAP[intensity]}`;
}

import { Colors, Intensity } from "@mugijs/shared-core";

import { MUGI_THEME_COLORS } from "../constants";
import { INTENSITY_MAP, MUGI_INTENSITY_MAP } from "../maps/colors";

function getColorClass(color: Colors, intensity: Intensity = "slim") {
  if (color in MUGI_THEME_COLORS) {
    return `${color}-${MUGI_INTENSITY_MAP[intensity]}`;
  }
  return `${color}-${INTENSITY_MAP[intensity]}`;
}

function getTextColorClass(color: Colors, intensity: Intensity = "slim") {
  return `text-${getColorClass(color, intensity)}`;
}

function getBackgroundColorClass(color: Colors, intensity: Intensity = "slim") {
  return `bg-${getColorClass(color, intensity)}`;
}

export const ColorMechanics = {
  color: getTextColorClass,
  backgroundColor: getBackgroundColorClass,
};

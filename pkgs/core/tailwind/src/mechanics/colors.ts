import { Colors, Intensity } from "@mugijs/shared-core";

import { MUGI_THEME_COLORS } from "../constants";
import { INTENSITY_MAP, MUGI_INTENSITY_MAP } from "../maps/colors";

function getColorClass(color?: Colors, intensity: Intensity = "slim") {
  if (color && color in MUGI_THEME_COLORS) {
    return `${color}-${MUGI_INTENSITY_MAP[intensity]}`;
  }
  return `${color}-${INTENSITY_MAP[intensity]}`;
}

function getTextColorClass(color?: Colors, intensity: Intensity = "slim") {
  return `text-${getColorClass(color, intensity)}`;
}

function getBackgroundColorClass(color?: Colors, intensity: Intensity = "slim") {
  return `bg-${getColorClass(color, intensity)}`;
}

function getBorderColorClass(color?: Colors, intensity: Intensity = "slim") {
  return `border-${getColorClass(color, intensity)}`;
}

function getBorderOutlineColorClass(color?: Colors, intensity: Intensity = "slim") {
  return `outline-${getColorClass(color, intensity)}`;
}

function getBorderRingColorClass(color?: Colors, intensity: Intensity = "slim") {
  return `ring-${getColorClass(color, intensity)}`;
}

export const ColorMechanics = {
  color: getTextColorClass,
  border : getBorderColorClass,
  background: getBackgroundColorClass,
  outline : getBorderOutlineColorClass,
  ring : getBorderRingColorClass
};

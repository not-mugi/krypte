import { Colors, ColorStrength } from "../typings";
import { MUGI_THEME_COLORS } from "../constants";
import { INTENSITY_MAP, MUGI_INTENSITY_MAP } from "../maps/color";

/** @alpha */
export function getColorClass(color?: Colors, strength: ColorStrength = "slim") {
  if (color && color in MUGI_THEME_COLORS) {
    return `${color}-${MUGI_INTENSITY_MAP[strength]}`;
  }
  return `${color}-${INTENSITY_MAP[strength]}`;
}

/** @alpha */
export function getTextColorClass(color?: Colors, strength: ColorStrength = "slim") {
  return `text-${getColorClass(color, strength)}`;
}

/** @alpha */
export function getBackgroundColorClass(color?: Colors, strength: ColorStrength = "slim") {
  return `bg-${getColorClass(color, strength)}`;
}

/** @alpha */
export function getBorderColorClass(color?: Colors, strength: ColorStrength = "slim") {
  return `border-${getColorClass(color, strength)}`;
}

/** @alpha */
export function getBorderOutlineColorClass(color?: Colors, strength: ColorStrength = "slim") {
  return `outline-${getColorClass(color, strength)}`;
}

/** @alpha */
export function getBorderRingColorClass(color?: Colors, strength: ColorStrength = "slim") {
  return `ring-${getColorClass(color, strength)}`;
}

/** @alpha */
export function getTextDecorationColorClass(color?: Colors, strength: ColorStrength = "slim") {
  return `decoration-${getColorClass(color, strength)}`;
}

/** @alpha */
export const ColorMechanics = {
  color: getTextColorClass,
  border : getBorderColorClass,
  background: getBackgroundColorClass,
  outline : getBorderOutlineColorClass,
  ring : getBorderRingColorClass,
  textDecoration : getTextDecorationColorClass
};

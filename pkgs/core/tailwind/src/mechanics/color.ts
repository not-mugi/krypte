import { Color } from "../typings";
import { MUGI_THEME_COLORS } from "../constants";
import { INTENSITY_MAP, MUGI_INTENSITY_MAP } from "../maps/color";

/** @alpha */
export function getColorClass({ color, strength = "slim" }: Color) {
  if (color && color in MUGI_THEME_COLORS) {
    return `${color}-${MUGI_INTENSITY_MAP[strength]}`;
  }
  return `${color}-${INTENSITY_MAP[strength]}`;
}

/** @alpha */
export function getTextColorClass(color: Color = {}) {
  return `text-${getColorClass(color)}`;
}

/** @alpha */
export function getBackgroundColorClass(color: Color = {}) {
  return `bg-${getColorClass(color)}`;
}

/** @alpha */
export function getBorderColorClass(color: Color = {}) {
  return `border-${getColorClass(color)}`;
}

/** @alpha */
export function getBorderOutlineColorClass(color: Color = {}) {
  return `outline-${getColorClass(color)}`;
}

/** @alpha */
export function getBorderRingColorClass(color: Color = {}) {
  return `ring-${getColorClass(color)}`;
}

/** @alpha */
export function getTextDecorationColorClass(color: Color = {}) {
  return `decoration-${getColorClass(color)}`;
}

/** @alpha */
export const colorBlueprint = () : Color => ({ strength : "slim" })

/** @alpha */
export const ColorMechanics = {
  color: getColorClass,
  background : getBackgroundColorClass,
};
import { Color } from "../main";
import { INTENSITY_MAP, MUGI_INTENSITY_MAP } from "../references/color";

/** @alpha */
export const getColorClass = ({ color, strength = "slim" }: Color) => {
  if (color && color in ["mugi", "hat"]) {
    return `${color}-${MUGI_INTENSITY_MAP[strength]}`;
  }
  return `${color}-${INTENSITY_MAP[strength]}`;
};

/** @alpha */
export const getTextColorClass = (color: Color = {}) =>
  `text-${getColorClass(color)}`;

/** @alpha */
export const getBackgroundColorClass = (color: Color = {}) =>
  `bg-${getColorClass(color)}`;

/** @alpha */
export const getBorderColorClass = (color: Color = {}) =>
  `border-${getColorClass(color)}`;

/** @alpha */
export const getBorderOutlineColorClass = (color: Color = {}) =>
  `outline-${getColorClass(color)}`;

/** @alpha */
export const getBorderRingColorClass = (color: Color = {}) =>
  `ring-${getColorClass(color)}`;

/** @alpha */
export const getTextDecorationColorClass = (color: Color = {}) =>
  `decoration-${getColorClass(color)}`;

/** @alpha */
export const colorBlueprint = (): Color => ({ strength: "slim" });

/** @alpha */
export const ColorMechanics = {
  color: getColorClass,
  background: getBackgroundColorClass,
};

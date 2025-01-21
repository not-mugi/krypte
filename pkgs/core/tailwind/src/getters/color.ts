import { Color } from "../main";
import { COLOR_STRENGHT_MAP } from "../classes/color";

/** @alpha */
export const getColorClass = ({ color, strength = "slim" }: Color) =>
  color && strength in COLOR_STRENGHT_MAP
    ? `${color}-${COLOR_STRENGHT_MAP[strength]}` : "";

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

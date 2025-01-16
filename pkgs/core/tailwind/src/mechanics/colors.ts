// import { Colors, ColorStrength as Intensity } from "@shared-core/tailwind/color";

// import { MUGI_THEME_COLORS } from "../constants";
// import { INTENSITY_MAP, MUGI_INTENSITY_MAP } from "../maps/colors";

// /** @beta */
// export function getColorClass(color?: Colors, intensity: Intensity = "slim") {
//   if (color && color in MUGI_THEME_COLORS) {
//     return `${color}-${MUGI_INTENSITY_MAP[intensity]}`;
//   }
//   return `${color}-${INTENSITY_MAP[intensity]}`;
// }

// /** @beta */
// export function getTextColorClass(color?: Colors, intensity: Intensity = "slim") {
//   return `text-${getColorClass(color, intensity)}`;
// }

// /** @beta */
// export function getBackgroundColorClass(color?: Colors, intensity: Intensity = "slim") {
//   return `bg-${getColorClass(color, intensity)}`;
// }

// /** @beta */
// export function getBorderColorClass(color?: Colors, intensity: Intensity = "slim") {
//   return `border-${getColorClass(color, intensity)}`;
// }

// /** @beta */
// export function getBorderOutlineColorClass(color?: Colors, intensity: Intensity = "slim") {
//   return `outline-${getColorClass(color, intensity)}`;
// }

// /** @beta */
// export function getBorderRingColorClass(color?: Colors, intensity: Intensity = "slim") {
//   return `ring-${getColorClass(color, intensity)}`;
// }

// /** @beta */
// export type ColorConfig = {
//   color?: Colors;
//   intensity?: Intensity;
//   border: Colors;
//   background: Colors;
//   outline: Colors;
//   ring: Colors;
// }

// /** @beta */
// export const ColorMechanics = {
//   color: getTextColorClass,
//   border : getBorderColorClass,
//   background: getBackgroundColorClass,
//   outline : getBorderOutlineColorClass,
//   ring : getBorderRingColorClass
// };

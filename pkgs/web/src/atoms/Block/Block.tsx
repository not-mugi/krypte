import { Colors, Intensity } from "@mugijs/shared-core";
import {
  getColorClass,
  getTextColorClass,
  getBackgroundColorClass,
} from "@mugijs/tailwind-core";

// export function Block({
//   scale = "md",
//   className = "",
//   alignment = "left",
//   ...props
// }: BlockProps) {
//   const classNames = getBlockClassNames(scale, alignment, className);
//   return (
//     <div className={classNames} {...props}>
//       {children}
//     </div>
//   );
// }

// export function ThemedBlock({
//   children,
//   scale = "md",
//   className = "",
//   alignment = "left",
//   ...props
// }: BlockProps) {
//   const themeClasses = "mugi:bg-mugi-300 dark:bg-gray-800";
//   const classNames = getBlockClassNames(
//     scale,
//     alignment,
//     `${themeClasses} ${className}`
//   );
//   return (
//     <div className={classNames} {...props}>
//       {children}
//     </div>
//   );
// }

// export function ColoredBlock({
//   children,
//   scale = "md",
//   className = "",
//   alignment = "left",
//   color,
//   intensity,
//   backgroundColor,
//   ...props
// }: BlockProps & {
//   color?: TailwindColor;
//   intensity?: TailwindIntensity;
//   backgroundColor?: TailwindColor;
// }) {
//   const colorClasses = `${getColorClass(
//     color,
//     intensity
//   )} ${getBackgroundColorClass(backgroundColor, intensity)}`.trim();
//   const classNames = getBlockClassNames(
//     scale,
//     alignment,
//     `${colorClasses} ${className}`
//   );
//   return (
//     <div className={classNames} {...props}>
//       {children}
//     </div>
//   );
// }

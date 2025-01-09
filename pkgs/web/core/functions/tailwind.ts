import { BlockProps, InputProps } from "../declarations/atoms";
import { TailwindColor, TailwindIntensity } from "../declarations/tailwind";
import {
  blockScaleMap,
  blockAlignMap,
  colorIntensity,
  mugiThemeColors,
  mugiColorIntensity,
  inputScaleMap,
} from "../maps/atoms";

export const getTailwindIntensity = (
  color: TailwindColor,
  intensity: TailwindIntensity = "regular"
) => {
  if (color in mugiThemeColors) {
    return mugiColorIntensity[intensity];
  }
  return colorIntensity[intensity];
};

export const getColorClass = (
  color?: TailwindColor,
  intensity: TailwindIntensity = "regular"
) => {
  if (!color) return "";
  return `text-${color}-${getTailwindIntensity(color, intensity)}`;
};

export const getBackgroundColorClass = (
  backgroundColor?: TailwindColor,
  intensity: TailwindIntensity = "regular"
) => {
  if (!backgroundColor) return "";
  return `bg-${backgroundColor}-${getTailwindIntensity(
    backgroundColor,
    intensity
  )}`;
};

export const getBlockClassNames = (
  scale?: BlockProps["scale"],
  alignment?: BlockProps["alignment"],
  additionalClasses: string = ""
) => {
  const scaleClasses = scale ? blockScaleMap[scale] : "";
  const alignClasses = alignment ? blockAlignMap[alignment] : "";
  return `${scaleClasses} ${alignClasses} ${additionalClasses}`.trim();
};

export const getInputClassNames = (scale: InputProps["scale"]) => {
  return inputScaleMap[scale] || "";
};

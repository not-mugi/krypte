import { TailwindIntensity } from "../declarations/tailwind";
import { BlockProps, InputProps } from "../declarations/atoms";

export const mugiThemeColors = ["mugi", "hat"] as const;

export const colorIntensity: Record<TailwindIntensity, string> = {
  slim: "100",
  regular: "200",
  bold: "300",
  heavy: "400",
  hardcore: "500",
};

export const mugiColorIntensity: Record<TailwindIntensity, string> = {
  slim: "100",
  regular: "200",
  bold: "300",
  heavy: "400",
  hardcore: "500",
};

export const blockScaleMap: Record<NonNullable<BlockProps["scale"]>, string> = {
  full: "w-full h-full",
  screen: "w-screen h-screen",
  auto: "w-auto h-auto",
  sm: "w-1/5 h-1/5",
  md: "w-1/2 h-1/2",
  lg: "w-3/5 h-3/5",
  xl: "w-4/5 h-4/5",
  "2xl": "w-11/12 h-4/5",
};

export const blockAlignMap: Record<
  NonNullable<BlockProps["alignment"]>,
  string
> = {
  center: "flex justify-center items-center",
  left: "flex justify-start items-center",
  right: "flex justify-end items-center",
};

export const inputScaleMap: Record<InputProps["scale"], string> = {
  sm: "text-xs p-1 border",
  md: "text-sm p-2 border",
  lg: "text-lg p-3 border-2",
  xl: "text-xl p-4 border-2",
  "2xl": "text-2xl p-6 border-4",
};

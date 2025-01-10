import {
  TailwindBlockAlignment,
  TailwindBlockScale,
  TailwindIntensity,
} from "@mugijs/shared-core";

export const INTENSITY_MAP: Record<TailwindIntensity, string> = {
  slim: "400",
  regular: "500",
  bold: "600",
  heavy: "700",
  hardcore: "800",
};

export const MUGI_INTENSITY_MAP: Record<TailwindIntensity, string> = {
  slim: "100",
  regular: "200",
  bold: "300",
  heavy: "400",
  hardcore: "500",
};

export const FIXED_SIZE_MAP = {
  xxs: "size-16",
  xs: "size-20",
  sm: "size-24",
  md: "size-32",
  lg: "size-40",
  xl: "size-48",
  xxl: "size-96",
};

export const PERCENTAGE_SIZE_MAP = {
  "1/12": "size-1/12",
  "1/6": "size-1/6",
  "1/4": "size-1/4",
  "1/3": "size-1/3",
  "5/12": "size-5/12",
  "1/2": "size-1/2",
  "7/12": "size-7/12",
  "2/3": "size-2/3",
  "3/4": "size-3/4",
  "5/6": "size-5/6",
  "11/12": "size-11/12",
  full: "size-full",
  min: "size-min",
  max: "size-max",
  fit: "size-fit",
};

export const FIXED_WIDTH_MAP = {
  xxs: "w-16",
  xs: "w-20",
  sm: "w-24",
  md: "w-32",
  lg: "w-40",
  xl: "w-48",
  xxl: "w-96",
};

export const PERCENTAGE_WIDTH_MAP = {
  "1/12": "w-1/12",
  "1/6": "w-1/6",
  "1/4": "w-1/4",
  "1/3": "w-1/3",
  "5/12": "w-5/12",
  "1/2": "w-1/2",
  "7/12": "w-7/12",
  "2/3": "w-2/3",
  "3/4": "w-3/4",
  "5/6": "w-5/6",
  "11/12": "w-11/12",
  full: "w-full",
  min: "w-min",
  max: "w-max",
  fit: "w-fit",
  screen: "w-screen",
};

export const FIXED_HEIGHT_MAP = {
  xxs: "h-16",
  xs: "h-20",
  sm: "h-24",
  md: "h-32",
  lg: "h-40",
  xl: "h-48",
  xxl: "h-96",
};

export const PERCENTAGE_HEIGHT_MAP = {
  "1/6": "h-1/6",
  "1/3": "h-1/3",
  "1/2": "h-1/2",
  "2/3": "h-2/3",
  "5/6": "h-5/6",
  full: "h-full",
  min: "h-min",
  max: "h-max",
  fit: "h-fit",
  screen: "h-screen",
};

export const INLINE_VERTICAL_ALIGN_MAP = {
  top: "align-top",
  middle: "align-middle",
  bottom: "align-bottom",
};

export const TEXT_ALIGNMENT_MAP = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  start: "text-start",
  end: "text-end",
};

import { HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  scale: "sm" | "md" | "lg" | "xl" | "2xl";
}

export type TailwindInputClasses = "rounded" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl";

const scaleClassesMap: Record<InputProps["scale"], string> = {
  sm: "text-xs p-1 border",
  md: "text-sm p-2 border",
  lg: "text-lg p-3 border-2",
  xl: "text-xl p-4 border-2",
  "2xl": "text-2xl p-6 border-4",
};

const themeClasses =
  "text-gray-800 mugi:hocus:border-strawRedPale mugi:hocus:outline-strawRedPale mugi:border-straw dark:hocus:border-gray-500 dark:hocus:outline-gray-500 dark:border-gray-200";

function getScaleClasses(scale: InputProps["scale"]) {
  return scaleClassesMap[scale] || "";
}

export function Input({ scale, ...props }: InputProps) {
  const scaleClasses = getScaleClasses(scale);
  props.className = `${props.className || ""} ${scaleClasses}`.trim();
  return (
    <span className="text-gray-800 border-gray-800">
      <input {...props} />
    </span>
  );
}

export function ThemedInput({ scale, ...props }: InputProps) {
  const scaleClasses = getScaleClasses(scale);
  props.className = `${props.className || ""} ${scaleClasses} ${themeClasses}`.trim();
  return (
    <span className="text-gray-800">
      <input {...props} />
    </span>
  );
}

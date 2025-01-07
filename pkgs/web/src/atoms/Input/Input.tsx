import { HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  scale: "sm" | "md" | "lg" | "xl";
}

export type TailwindInputclasses = "rounded" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl";

export function Input({ scale, ...props }: InputProps) {
  let scaleClasses = "";

  switch (scale) {
    case "sm":
      scaleClasses = "text-xs p-1 border";
      break;
    case "md":
      scaleClasses = "text-sm p-2 border";
      break;
    case "lg":
      scaleClasses = "text-lg p-3 border-2";
      break;
    case "xl":
      scaleClasses = "text-xl p-4 border-2";
      break;
    default:
      scaleClasses = "";
  }

  props.className = `${props.className || ""} ${scaleClasses}`.trim();
  return (
    <span className="text-gray-800 border-gray-800">
      <input {...props} />
    </span>
  );
}

export function ThemedInput({ scale, ...props }: InputProps) {
  let scaleClasses = "";
  let themeClasses =
    "text-gray-800 mugi:hocus:border-strawRedPale mugi:hocus:outline-strawRedPale mugi:border-straw dark:hocus:border-gray-500 dark:hocus:outline-gray-500 dark:border-gray-200";

  switch (scale) {
    case "sm":
      scaleClasses = "text-xs p-1 border";
      break;
    case "md":
      scaleClasses = "text-sm p-2 border";
      break;
    case "lg":
      scaleClasses = "text-lg p-3 border-2";
      break;
    case "xl":
      scaleClasses = "text-xl p-4 border-2";
      break;
    default:
      scaleClasses = "";
  }

  props.className = `${
    props.className || ""
  } ${scaleClasses} ${themeClasses}`.trim();
  return (
    <span className="text-gray-800">
      <input {...props} />
    </span>
  );
}

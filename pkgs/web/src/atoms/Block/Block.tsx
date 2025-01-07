import { ReactNode } from "react";

type BlockProps = {
  [key: string]: any;
  scale: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "screen" | "auto";
  alignment: "center" | "left" | "right";
  children: ReactNode;
};

export type BlockTailwindClasses =
  | "border"
  | "border-2"
  | "border-4"
  | "border-8"
  | "border-16";

const scaleClassesMap: Record<BlockProps["scale"], string> = {
  full: "w-full h-full",
  screen: "w-screen h-screen",
  auto: "w-auto h-auto",
  sm: "w-1/5 h-1/5",
  md: "w-1/2 h-1/2",
  lg: "w-3/5 h-3/5",
  xl: "w-4/5 h-4/5",
  "2xl": "w-11/12 h-4/5",
};

const alignClassesMap: Record<BlockProps["alignment"], string> = {
  center: "flex justify-center items-center",
  left: "flex justify-start items-center",
  right: "flex justify-end items-center",
};

export function Block({
  children,
  alignment = "left",
  scale = "md",
  ...props
}: BlockProps) {
  const scaleClasses = scaleClassesMap[scale] || "";
  const alignClasses = alignClassesMap[alignment] || "";
  props.className = `${
    props.className || ""
  } ${scaleClasses} ${alignClasses}`.trim();
  return <div {...props}>{children}</div>;
}

export function ThemedBlock({
  children,
  alignment = "left",
  scale = "md",
  ...props
}: BlockProps) {
  const scaleClasses = scaleClassesMap[scale] || "";
  const alignClasses = alignClassesMap[alignment] || "";
  const themeClasses = "mugi:bg-straw dark:bg-gray-800";
  props.className = `${
    props.className || ""
  } ${scaleClasses} ${themeClasses} ${alignClasses}`.trim();
  return <div {...props}>{children}</div>;
}

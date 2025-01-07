import { ReactNode, HTMLAttributes } from "react";

export type TailwindTextClasses =
  | "text-center"
  | "text-left"
  | "text-right"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl";
  
export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function Text({ children, ...props }: TextProps) {
  return (
    <span className="text-gray-800">
      <p {...props}>{children}</p>
    </span>
  );
}

export function ThemedText({ children, ...props }: TextProps) {
  return (
    <span className="text-gray-800 dark:text-gray-200 mugi:text-strawRedPale">
      <p {...props}>{children}</p>
    </span>
  );
}

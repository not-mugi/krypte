import { ReactNode, HTMLAttributes } from "react";

export type BlockProps = {
  scale?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "screen" | "auto";
  alignment?: "center" | "left" | "right";
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type InputProps = {
  scale: "sm" | "md" | "lg" | "xl" | "2xl";
} & HTMLAttributes<HTMLInputElement>;

export type SpanProps = {
  width: string;
  height: string;
  children: React.ReactNode;
  theme?: string;
} & HTMLAttributes<HTMLSpanElement>;

export type TextProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

import { createElement, HTMLAttributes, JSX } from "react";
import { BoxMechanics, BoxConfig, createClass } from "@mugijs/tailwind-core/functions";

export type BlockProps = {
  component: keyof JSX.IntrinsicElements;
  boxConfig: Partial<BoxConfig>;
  overrides?: Array<keyof BoxConfig>;
} & HTMLAttributes<HTMLElement>;


export function createNewBoxConfig(): Partial<BoxConfig> {
  return {
    display: "block",
    content: "content",
  };
}

// prettier-ignore
export function NewBlock({ boxConfig, children, className, overrides = [], component, ...props }: BlockProps) : JSX.Element {
  return createElement(
    component,
    {
      ...props,
      className: createClass(boxConfig, BoxMechanics, overrides, className!),
    },
    children
  );
}
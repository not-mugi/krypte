import { createElement } from "react";
import { BlockProps } from "./Block";

// prettier-ignore
export function Block({ config, children, component, ...props }: BlockProps) {
  return createElement(component, props, children);
}

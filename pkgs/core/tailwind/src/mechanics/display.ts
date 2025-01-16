import type { BoxDisplay, BoxSizing } from "@mugijs/shared-core";
import { BOX_DISPLAY_MAP, BOX_SIZING_MAP } from "../maps/box";

/** @alpha */
export { BoxDisplay, BoxSizing };

/** @alpha */
export type Display = Partial<{ 
  boxSizing: BoxSizing 
  boxDisplay: BoxDisplay; 
}>;

/** @alpha */
export function getBoxDisplayClass(boxDisplay?: BoxDisplay) {
  if (boxDisplay && boxDisplay in BOX_DISPLAY_MAP) {
    return BOX_DISPLAY_MAP[boxDisplay];
  }
}

/** @alpha */
export function getBoxSizingClass(boxSizing?: BoxSizing) {
  if (boxSizing && boxSizing in BOX_SIZING_MAP) {
    return BOX_SIZING_MAP[boxSizing];
  }
}

/** @alpha */
export const DisplayMechanics = {
  boxDisplay: getBoxDisplayClass,
  boxSizing: getBoxSizingClass,
};

/** @alpha */
export function displayBlueprint(): Display {
  return {
    boxDisplay: "block",
    boxSizing: "border",
  };
}

import type { BoxSizing, BoxDisplay, Display } from "../tsc";
import { BOX_SIZING_MAP, BOX_DISPLAY_MAP } from "../maps/container";

/** @alpha */
export const getBoxSizingClass = (boxSizing?: BoxSizing) =>
  boxSizing && boxSizing in BOX_SIZING_MAP ? BOX_SIZING_MAP[boxSizing] : "";

/** @alpha */
export const getBoxDisplayClass = (boxDisplay?: BoxDisplay) =>
  boxDisplay && boxDisplay in BOX_DISPLAY_MAP ? BOX_DISPLAY_MAP[boxDisplay] : "";

/** @alpha */
export const containerBlueprints = (): Display => ({ boxSizing: "border", boxDisplay: "block" });

/** @alpha */
export const ContainerMechanics = {
  boxSizing: getBoxSizingClass,
  boxDisplay: getBoxDisplayClass,
};

import type { Container, Display, BoxSizing } from "../main";
import { BOX_SIZING_MAP, BOX_DISPLAY_MAP } from "../references/container";

/** @alpha */
export const getBoxSizingClass = (boxSizing?: BoxSizing) =>
  boxSizing && boxSizing in BOX_SIZING_MAP ? BOX_SIZING_MAP[boxSizing] : "";

/** @alpha */
export const getBoxDisplayClass = (boxDisplay?: Display) =>
  boxDisplay && boxDisplay in BOX_DISPLAY_MAP ? BOX_DISPLAY_MAP[boxDisplay] : "";

/** @alpha */
export const containerBlueprints = () : Container => ({ sizing: "border", display: "block" });

/** @alpha */
export const ContainerMechanics = {
  boxSizing: getBoxSizingClass,
  boxDisplay: getBoxDisplayClass,
};

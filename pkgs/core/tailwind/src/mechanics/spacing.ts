import { FIXED_SPACING_MAP } from "../maps/spacing";
import { FixedExtent } from "@mugijs/shared-core";

function getSpacingClass(spacing: FixedExtent) {
  if (spacing in FIXED_SPACING_MAP) {
    return FIXED_SPACING_MAP[spacing];
  }
}

export const SpacingMechanics = {
  spacing: getSpacingClass,
}
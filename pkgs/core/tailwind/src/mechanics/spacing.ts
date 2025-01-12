import { FIXED_SPACING_MAP } from "../maps";
import { FixedExtent } from "@mugijs/shared-core";

export function getSpacingClass(spacing: FixedExtent) {
  if (spacing in FIXED_SPACING_MAP) {
    return FIXED_SPACING_MAP[spacing];
  }
}

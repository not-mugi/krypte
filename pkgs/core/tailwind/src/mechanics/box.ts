// prettier-ignore
import {
  ContentJustification,
  BoxSizing, FixedExtent,
  KeyofMap, MergedClassType,
  Arrangement, Spatiality, Placement, 
} from "@mugijs/shared-core";

// prettier-ignore
import {
  FIXED_PLACEMENT_MAP,
  CONTENT_POSITION_MAP,
  BOX_SIZING_MAP, BOX_DISPLAY_MAP,
  CONTENT_FLOAT_MAP, CONTENT_CLEAR_MAP,
} from "../maps";

export function getBoxDisplayClass(spatiality: Spatiality) {
  if (spatiality in BOX_DISPLAY_MAP) {
    return BOX_DISPLAY_MAP[spatiality as KeyofMap<typeof BOX_DISPLAY_MAP>];
  }
}

export function getBoxSizingClass(boxSizing: BoxSizing) {
  if (boxSizing in BOX_SIZING_MAP) {
    return BOX_SIZING_MAP[boxSizing as KeyofMap<typeof BOX_SIZING_MAP>];
  }
}

export function getContentFloatClass(
  justification: Exclude<ContentJustification, "both">
) {
  if (justification in CONTENT_FLOAT_MAP) {
    return CONTENT_FLOAT_MAP[justification];
  }
}

export function getContentClearClass(justification: ContentJustification) {
  if (justification in CONTENT_CLEAR_MAP) {
    return CONTENT_CLEAR_MAP[justification];
  }
}

export function getContentPositionClass(arrangement: Arrangement) {
  if (arrangement in CONTENT_POSITION_MAP) {
    return CONTENT_POSITION_MAP[arrangement];
  }
}

export function getPostionalPlacementClass(
  positionalPlacement: MergedClassType<Placement, FixedExtent>
) {
  if (positionalPlacement in FIXED_PLACEMENT_MAP) {
    return FIXED_PLACEMENT_MAP[positionalPlacement];
  }
}

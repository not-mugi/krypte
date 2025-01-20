import type { 
  Layout, ContentClear, ContentFloat, 
  Overflow, Overscroll, Visibility, Stackorder, 
  Position, SidesPlacement, LogicalPlacement, ObjectFit, ObjectPosition
} from "../typings";
import { 
  OBJECT_FIT_MAP, OBJECT_POSITION_MAP, CONTENT_CLEAR_MAP, 
  CONTENT_FLOAT_MAP, OVERFLOW_MAP, OVERSCROLL_MAP, VISIBILITY_MAP, STACK_ORDER_MAP, 
  CONTENT_POSITION_MAP, SIDE_PLACEMENT_SCALE_MAP, LOGICAL_PLACEMENT_SCALE_MAP
} from "../maps/layout";

/** @alpha */
export function getContentClearClass(clear?: ContentClear) {
  if (clear && clear in CONTENT_CLEAR_MAP) {
    return CONTENT_CLEAR_MAP[clear];
  }
}

/** @alpha */
export function getContentFloatClass(float?: ContentFloat) {
  if (float && float in CONTENT_FLOAT_MAP) {
    return CONTENT_FLOAT_MAP[float];
  }
}

/** @alpha */
export function getObjectFitClass(objectFit?: ObjectFit) {
  if (objectFit && objectFit in OBJECT_FIT_MAP) {
    return OBJECT_FIT_MAP[objectFit];
  }
}

/** @alpha */
export function getObjectPositionClass(objectPosition?: ObjectPosition) {
  if (objectPosition && objectPosition in OBJECT_POSITION_MAP) {
    return OBJECT_POSITION_MAP[objectPosition];
  }
}

/** @alpha */
export function getOverflowClass(overflow?: Overflow) {
  if (overflow && overflow in OVERFLOW_MAP) {
    return OVERFLOW_MAP[overflow];
  }
}

/** @alpha */
export function getOverscrollClass(overscroll?: Overscroll) {
  if (overscroll && overscroll in OVERSCROLL_MAP) {
    return OVERSCROLL_MAP[overscroll];
  }
}

/** @alpha */
export function getVisibilityClass(visibility?: Visibility) {
  if (visibility && visibility in VISIBILITY_MAP) {
    return VISIBILITY_MAP[visibility];
  }
}

/** @alpha */
export function getStackorderClass(stackorder?: Stackorder) {
  if (stackorder && stackorder in STACK_ORDER_MAP) {
    return STACK_ORDER_MAP[stackorder];
  }
}

/** @alpha */
export function getPositionClass(position?: Position) {
  if (position && position in CONTENT_POSITION_MAP) {
    return CONTENT_POSITION_MAP[position];
  }
}

/** @alpha */
export function getEdgePlacementClass(edgePlacement?: SidesPlacement) {
  if (edgePlacement && edgePlacement in SIDE_PLACEMENT_SCALE_MAP) {
    return SIDE_PLACEMENT_SCALE_MAP[edgePlacement];
  }
}

/** @alpha */
export function getLogicalPlacementClass(logicalPlacement?: LogicalPlacement) {
  if (logicalPlacement && logicalPlacement in LOGICAL_PLACEMENT_SCALE_MAP) {
    return LOGICAL_PLACEMENT_SCALE_MAP[logicalPlacement];
  }
}

/** @alpha */
export const LayoutMechanics = {
  clear: getContentClearClass,
  float: getContentFloatClass,
  objectFit: getObjectFitClass,
  objectPosition: getObjectPositionClass,
  overflow: getOverflowClass,
  overscroll: getOverscrollClass,
  visibility: getVisibilityClass,
  stackorder: getStackorderClass,
  position: getPositionClass,
  edgePlacement: getEdgePlacementClass,
  logicalPlacement: getLogicalPlacementClass,
};

/** @alpha */
export function layoutBlueprint(): Layout {
  return {
    overflow: "auto",
  };
}

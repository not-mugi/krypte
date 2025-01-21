import type { 
  Layout, ContentClear, ContentFloat, 
  Overflow, Overscroll, Visibility, Stackorder, 
  Position, SidesPlacement, LogicalPlacement, ObjectFit, ObjectPosition
} from "../main";
import { 
  OBJECT_FIT_MAP, OBJECT_POSITION_MAP, CONTENT_CLEAR_MAP, 
  CONTENT_FLOAT_MAP, OVERFLOW_MAP, OVERSCROLL_MAP, VISIBILITY_MAP, STACK_ORDER_MAP, 
  CONTENT_POSITION_MAP, SIDE_PLACEMENT_SCALE_MAP, LOGICAL_PLACEMENT_SCALE_MAP
} from "../references/layout";

/** @alpha */
export const getContentClearClass = (clear?: ContentClear) => 
  clear && clear in CONTENT_CLEAR_MAP
    ? CONTENT_CLEAR_MAP[clear] : "";

/** @alpha */
export const getContentFloatClass = (float?: ContentFloat) => 
  float && float in CONTENT_FLOAT_MAP
    ? CONTENT_FLOAT_MAP[float] : "";

/** @alpha */
export const getObjectFitClass = (objectFit?: ObjectFit) => 
  objectFit && objectFit in OBJECT_FIT_MAP
    ? OBJECT_FIT_MAP[objectFit] : "";

/** @alpha */
export const getObjectPositionClass = (objectPosition?: ObjectPosition) => 
  objectPosition && objectPosition in OBJECT_POSITION_MAP
    ? OBJECT_POSITION_MAP[objectPosition] : "";

/** @alpha */
export const getOverflowClass = (overflow?: Overflow) => 
  overflow && overflow in OVERFLOW_MAP 
    ? OVERFLOW_MAP[overflow] : "";

/** @alpha */
export const getOverscrollClass = (overscroll?: Overscroll) => 
  overscroll && overscroll in OVERSCROLL_MAP
    ? OVERSCROLL_MAP[overscroll] : "";

/** @alpha */
export const getVisibilityClass = (visibility?: Visibility) => 
  visibility && visibility in VISIBILITY_MAP
    ? VISIBILITY_MAP[visibility] : "";

/** @alpha */
export const getStackorderClass = (stackorder?: Stackorder) => 
  stackorder && stackorder in STACK_ORDER_MAP
    ? STACK_ORDER_MAP[stackorder] : "";

/** @alpha */
export const getPositionClass = (position?: Position) => 
  position && position in CONTENT_POSITION_MAP
    ? CONTENT_POSITION_MAP[position] : "";

/** @alpha */
export const getEdgePlacementClass = (edgePlacement?: SidesPlacement) => 
  edgePlacement && edgePlacement in SIDE_PLACEMENT_SCALE_MAP
    ? SIDE_PLACEMENT_SCALE_MAP[edgePlacement] : "";

/** @alpha */
export const getLogicalPlacementClass = (logicalPlacement?: LogicalPlacement) => 
  logicalPlacement && logicalPlacement in LOGICAL_PLACEMENT_SCALE_MAP
    ? LOGICAL_PLACEMENT_SCALE_MAP[logicalPlacement] : "";

/** @alpha */
export const layoutBlueprint = () : Layout => ({})

/** @alpha */
export const LayoutMechanics = {
  position: getPositionClass,
  clear: getContentClearClass,
  float: getContentFloatClass,
  objectFit: getObjectFitClass,
  objectPosition: getObjectPositionClass,
  overflow: getOverflowClass,
  overscroll: getOverscrollClass,
  visibility: getVisibilityClass,
  stackorder: getStackorderClass,
  edgePlacement: getEdgePlacementClass,
  logicalPlacement: getLogicalPlacementClass,
};

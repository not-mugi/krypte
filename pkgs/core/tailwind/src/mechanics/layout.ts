// prettier-ignore
import {
  Overflow, OverScroll,
  Visibility, StackOrder,
  ObjectResize, ObjectPlacement, 
} from "@mugijs/shared-core";

// prettier-ignore
import {
  VISIBILITY_MAP, ZINDEX_MAP,
  OVERFLOW_MAP, OVERSCROLL_MAP,
  OBJECT_FIT_MAP, OBJECT_POSITION_MAP,
} from "../maps/layout";

function getObjectFitClass(resize?: Exclude<ObjectResize, "auto">) {
  if (resize && resize in OBJECT_FIT_MAP) {
    return OBJECT_FIT_MAP[resize];
  }
}

function getObjectPositionClass(placement?: ObjectPlacement | "center") {
  if (placement && placement in OBJECT_POSITION_MAP) {
    return OBJECT_POSITION_MAP[placement];
  }
}

function getOverflowClass(overflow?: Overflow) {
  if (overflow && overflow in OVERFLOW_MAP) {
    return OVERFLOW_MAP[overflow];
  }
}

function getOverScrollClass(overscroll?: OverScroll) {
  if (overscroll && overscroll in OVERSCROLL_MAP) {
    return OVERSCROLL_MAP[overscroll];
  }
}

function getVisibliityClass(visibility?: Visibility) {
  if (visibility && visibility in VISIBILITY_MAP) {
    return VISIBILITY_MAP[visibility];
  }
}

function getStackOrderClass(stackorder?: StackOrder) {
  if (stackorder && stackorder in ZINDEX_MAP) {
    return ZINDEX_MAP[stackorder];
  }
}

export const LayoutMechanics = {
  overflow: getOverflowClass,
  overscroll: getOverScrollClass,
  visibility: getVisibliityClass,
  stackOrder: getStackOrderClass,
  objectFit: getObjectFitClass,
  objectPosition: getObjectPositionClass,
}

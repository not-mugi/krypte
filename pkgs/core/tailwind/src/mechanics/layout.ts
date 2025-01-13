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

export function getObjectFitClass(resize: Exclude<ObjectResize, "auto">) {
  if (resize in OBJECT_FIT_MAP) {
    return OBJECT_FIT_MAP[resize];
  }
}

export function getObjectPositionClass(placement: ObjectPlacement | "center") {
  if (placement in OBJECT_POSITION_MAP) {
    return OBJECT_POSITION_MAP[placement];
  }
}

export function getOverflowClass(overflow: Overflow) {
  if (overflow in OVERFLOW_MAP) {
    return OVERFLOW_MAP[overflow];
  }
}

export function getOverScrollClass(overscroll: OverScroll) {
  if (overscroll in OVERSCROLL_MAP) {
    return OVERSCROLL_MAP[overscroll];
  }
}

export function getVisibliityClass(visibility: Visibility) {
  if (visibility in VISIBILITY_MAP) {
    return VISIBILITY_MAP[visibility];
  }
}

export function getStackOrderClass(stackorder: StackOrder) {
  if (stackorder in ZINDEX_MAP) {
    return ZINDEX_MAP[stackorder];
  }
}

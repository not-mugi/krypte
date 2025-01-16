import { ContentClear, ContentFloat } from "@mugijs/shared-core"
import { 
    Overflow, Overscroll, Stackorder, Visibility, 
    ObjectFit, ObjectPosition, PositionalPlacement, 
} from "@mugijs/shared-core"
import { 
    OVERFLOW_MAP, OVERSCROLL_MAP, CONTENT_CLEAR_MAP, CONTENT_FLOAT_MAP,
    OBJECT_FIT_MAP, OBJECT_POSITION_MAP, VISIBILITY_MAP, STACK_ORDER_MAP,
} from "../maps/layout"

export type Layout = Partial<{
    clear : ContentClear
    float : ContentFloat,
    objectFit : ObjectFit,
    objectPosition : ObjectPosition,
    overflow : Overflow,
    overscroll : Overscroll,
    placement : PositionalPlacement
    visibility : Visibility
    stackorder : Stackorder
}>

export function getContentClearClass(clear? : ContentClear) {
    if(clear && clear in CONTENT_CLEAR_MAP) {
        return CONTENT_CLEAR_MAP[clear]
    }
}

export function getContentFloatClass(float? : ContentFloat) {
    if(float && float in CONTENT_FLOAT_MAP) {
        return CONTENT_FLOAT_MAP[float]
    }
}

export function getObjectFitClass(objectFit? : ObjectFit) {
    if(objectFit && objectFit in OBJECT_FIT_MAP) {
        return OBJECT_FIT_MAP[objectFit]
    }
}

export function getObjectPositionClass(objectPosition? : ObjectPosition) {
    if(objectPosition && objectPosition in OBJECT_POSITION_MAP) {
        return OBJECT_POSITION_MAP[objectPosition]
    }
}

export function getOverflowClass(overflow? : Overflow) {
    if(overflow && overflow in OVERFLOW_MAP) {
        return OVERFLOW_MAP[overflow]
    }
}

export function getOverscrollClass(overscroll? : Overscroll) {
    if(overscroll && overscroll in OVERSCROLL_MAP) {
        return OVERSCROLL_MAP[overscroll]
    }
}

export function getVisibilityClass(visibility? : Visibility) {
    if(visibility && visibility in VISIBILITY_MAP) {
        return VISIBILITY_MAP[visibility]
    }
}

export function getStackorderClass(stackorder? : Stackorder) {
    if(stackorder && stackorder in STACK_ORDER_MAP){
        return STACK_ORDER_MAP[stackorder]
    }
}

export const LayoutMechanics = {
    clear : getContentClearClass,
    float : getContentFloatClass,
    objectFit : getObjectFitClass,
    objectPosition : getObjectPositionClass,
    overflow : getOverflowClass,
    overscroll : getOverscrollClass,
    visibility : getVisibilityClass,
    stackorder : getStackorderClass,
}

export function layoutBlueprint() : Layout {
    return {
        overflow : "auto",
    }
}
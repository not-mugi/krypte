import { BOX_DISPLAY_MAP, BOX_SIZING_MAP } from "../maps/box"
import { BoxDisplay, BoxSizing } from "@mugijs/shared-core"

export type Display = Partial<{
    boxDisplay : BoxDisplay
    boxSizing : BoxSizing,
}>

export function getBoxDisplayClass(boxDisplay? : BoxDisplay) {
    if(boxDisplay && boxDisplay in BOX_DISPLAY_MAP) {
        return BOX_DISPLAY_MAP[boxDisplay]
    }
}

export function getBoxSizingClass(boxSizing? : BoxSizing) {
    if(boxSizing && boxSizing in BOX_SIZING_MAP) {
        return BOX_SIZING_MAP[boxSizing]
    }
}

export const DisplayMechanics = {
    boxDisplay : getBoxDisplayClass,
    boxSizing : getBoxSizingClass,
}

export function displayBlueprint() : Display {
    return {
        boxDisplay : "block",
        boxSizing : "border",
    }
}
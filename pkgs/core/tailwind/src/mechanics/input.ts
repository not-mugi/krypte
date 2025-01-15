import { FormElement } from "@mugijs/shared-core";
import { FORM_ELEMENT_MAP } from "../maps/input";

/** @beta */
export function getFormElementClass(element : FormElement) {
    if (element in FORM_ELEMENT_MAP){
        return FORM_ELEMENT_MAP[element]
    }
}

/** @beta */
export type InputElementConfig = {
    element : FormElement
}

/** @beta */
export const InputMechanics = {
    element : getFormElementClass
}
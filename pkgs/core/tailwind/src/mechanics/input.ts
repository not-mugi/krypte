import { FormElement } from "@mugijs/shared-core";
import { FORM_ELEMENT_MAP } from "../maps/input";

function getFormElementClass(element : FormElement) {
    if (element in FORM_ELEMENT_MAP){
        return FORM_ELEMENT_MAP[element]
    }
}

export type InputElementConfig = {
    element : FormElement
}

export const InputMechanics = {
    element : getFormElementClass
}
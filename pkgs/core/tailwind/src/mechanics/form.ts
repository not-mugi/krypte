import { Form, FormElement } from "../typings";
import { FORM_ELEMENT_MAP } from "../maps/form";

/** @alpha */
export function getFormElementClass(element? : FormElement) {
    if (element && element in FORM_ELEMENT_MAP){
        return FORM_ELEMENT_MAP[element]
    }
}

/** @alpha */
export const formBlueprint = () : Form => ({ element : "input" })

/** @alpha */
export const FormMechanics = {
    element : getFormElementClass
}
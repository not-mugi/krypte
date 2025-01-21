import { Form, FormElement } from "../main";
import { FORM_ELEMENT_MAP } from "../references/form";

/** @alpha */
export const getFormElementClass = (element?: FormElement) =>
  element && element in FORM_ELEMENT_MAP ? FORM_ELEMENT_MAP[element] : "";

/** @alpha */
export const formBlueprint = (): Form => ({ element: "input" });

/** @alpha */
export const FormMechanics = {
  element: getFormElementClass,
};

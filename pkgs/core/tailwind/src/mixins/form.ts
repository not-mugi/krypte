import { Quark } from "../main";
import type { Constructor, Form } from "../main";
import { FormMechanics, formBlueprint } from "../getters/form";

/** ---- form flavor ---- */
/** @alpha */
export const FormFlavor = <Q extends Constructor<Quark>>(Quark: Q) => {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        form: args[0]?.["form"] ?? formBlueprint(),
      };
      const exchangeMechs = {
        ...args[1],
        form: FormMechanics,
      };
      super(flavors, exchangeMechs);
    }

    /** @param form */ /** \{
    *    element : "input"
    * \}
    */
    setForm(f: Form) {
      this.addquirk("form", f);
    }
  };
}
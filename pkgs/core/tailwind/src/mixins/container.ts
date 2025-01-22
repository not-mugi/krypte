import { Quark } from "../main";
import type { Constructor, Container } from "../main";
import { ContainerMechanics, containerBlueprints, } from "../getters/container";

/** ---- container flavor ---- */
/** @alpha */
export const ContainerFlavor = <Q extends Constructor<Quark>>(Quark: Q) => {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        container: args[0]?.["container"] ?? containerBlueprints(),
      };
      const exchangeMechs = {
        ...args[1],
        container: ContainerMechanics,
      };
      super(flavors, exchangeMechs);
    }
    /** @param container */ /** \{
     *    sizing: "border", 
     *    display: "block"
     * \}
    */
    setContainer(c: Container) {
      this.addquirk("container", c);
    }
  };
}
import { Quark } from "../quarks";
import { ContainerMechanics, containerBlueprints, } from "@mugijs/tailwind-core/functions";
import type { Constructor, Container } from "@mugijs/tailwind-core/types";

/** ---- container flavor ---- */
export function ContainerFlavor<Q extends Constructor<Quark>>(Quark: Q) {
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
    /** @param container */ /** {
     *    sizing: "border", 
     *    display: "block"
     * }
    */
    setContainer(c: Container) {
      this.addquirk("container", c);
    }
  };
}
import {
  displayBlueprint,
  displayMechanics,
} from "@mugijs/tailwind-core/functions";
import type { Constructor, Display } from "@mugijs/tailwind-core/types";
import { Quark } from "../Quarks";

export function DisplayFlavor<Q extends Constructor<Quark>>(Quark: Q) {
  return class extends Quark {
    constructor(...args: any[]) {
      const flavors = {
        ...args[0],
        display: args[0]?.["display"] ?? displayBlueprint(),
      };
      const exchangeMechs = {
        ...args[1],
        display: displayMechanics,
      };
      super(flavors, exchangeMechs);
    }

    setDisplay(display: Display) {
      this.addFlavor("display", display);
    }
  };
}

// exampleDisplayArgs
// {
//   boxSizing: "border",
//   boxDisplay: "block",
// };

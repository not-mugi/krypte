import { tailwindInteraction } from "../Interactions";

export type Quirk = { [k: string]: QuirkFlavor };

export type QuirkFlavor = { [name: string]: string };

export type QuirkMechs<F> = { [name: string]: ExchangeFunctions<F> };

export type ExchangeFunctions<Q> = { [N in keyof Q]: (value?: any) => string };

export class Quark {
  #quirks: Quirk = {};
  #quirkMechanics: QuirkMechs<Quirk> = {};

  get quirks(): Quirk {
    return this.#quirks;
  }

  get quirkMechanics(): QuirkMechs<{}> {
    return this.#quirkMechanics;
  }

  addFlavor(fn : string, flavor : QuirkFlavor) {
    this.#quirks = { ...this.#quirks, [fn] : flavor }
  }

  interact(): string {
    return tailwindInteraction(this.quirks, this.quirkMechanics);
  }
}
import { tailwindexchange } from "../exchange";

export type Quirk = { [k: string]: QuirkFlavor };

export type QuirkFlavor = { [name: string]: string | QuirkFlavor };

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

  addquirk(fn : string, flavor : QuirkFlavor) {
    this.#quirks = { ...this.#quirks, [fn] : flavor }
  }

  exchange(): string {
    return tailwindexchange(this.quirks, this.quirkMechanics);
  }
}
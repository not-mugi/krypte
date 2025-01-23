/** @alpha */
export type Quirk = { [k: string]: QuirkFlavor };
/** @alpha */
export type QuirkFlavor = { [name: string]: string | QuirkFlavor };
/** @alpha */
export type GetterFunctions<Qi> = { [N in keyof Qi]: (value?: any) => string };
/** @alpha */
export type QuirkInteractions<EF> = { [name: string]: GetterFunctions<EF> };

/** @alpha */
export class Quark {
  /** @alpha */
  #quirks: Quirk = {};
  /** @alpha */
  #interactions: QuirkInteractions<Quirk> = {};
  /** @alpha */
  get quirks(): Quirk {
    return this.#quirks;
  }
  /** @alpha */
  get interactions(): QuirkInteractions<{}> {
    return this.#interactions;
  }
  /** @alpha */
  addquirk(fn : string, flavor : QuirkFlavor) {
    this.#quirks = { ...this.#quirks, [fn] : flavor }
  }
  /** @alpha */
  exchange(): string {
    return Object.entries(this.quirks)
    .map(([property, flavors]) => {
      const get : GetterFunctions<Quirk> = this.interactions[property];
      return Object.entries(flavors)
        .map(([flavor, energy]) =>
          get[flavor](energy)
        )
        .join(" ");
    })
    .join(" ").trim();
  }
}
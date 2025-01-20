export type Quirk = { [k: string]: QuirkFlavor };
export type QuirkFlavor = { [name: string]: string | QuirkFlavor };
export type QuarkInteractions<EF> = { [name: string]: ExchangeFunctions<EF> };
export type ExchangeFunctions<Qi> = { [N in keyof Qi]: (value?: any) => string };

export class Quark {
  #quirks: Quirk = {};
  #quirkMechanics: QuarkInteractions<Quirk> = {};

  get quirks(): Quirk {
    return this.#quirks;
  }

  get quirkMechanics(): QuarkInteractions<{}> {
    return this.#quirkMechanics;
  }

  addquirk(fn : string, flavor : QuirkFlavor) {
    this.#quirks = { ...this.#quirks, [fn] : flavor }
  }

  exchange(): string {
    return Object.entries(this.quirks)
    .map(([name, flavors]) => {
      const exchange : ExchangeFunctions<Quirk> = this.quirkMechanics[name];
      return Object.entries(flavors)
        .map(([flavor, energy]) =>
          exchange[flavor](energy)
        )
        .join(" ");
    })
    .join(" ").trim();
  }
}
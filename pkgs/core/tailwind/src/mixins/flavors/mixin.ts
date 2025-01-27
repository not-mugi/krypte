/** @beta */
export type Quirk = { [k: string]: QuirkFlavor };
/** @beta */
export type QuirkFlavor = { [name: string]: string | QuirkFlavor };
/** @beta */
export type GetterFunctions<Qi> = { [N in keyof Qi]: (value?: any) => string };
/** @beta */
export type QuirkInteractions<EF> = { [name: string]: GetterFunctions<EF> };

/** @beta */
export class Quark {
  /** @beta */
  quirks: Quirk = {};
  /** @beta */
  interactions: QuirkInteractions<Quirk> = {};
  /** @beta */
  
  /** @beta */
  addquirk(fn : string, flavor : QuirkFlavor) {
    this.quirks = { ...this.quirks, [fn] : flavor }
  }
  /** @beta */
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
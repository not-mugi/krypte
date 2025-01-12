export * from "./colors";
export * from "./box";
export * from "./layout";
export * from "./typo";
export * from "./size";

// prettier-ignore
export function createClass<
  C extends { [K in keyof C]: C[K] },
  M extends { [K in keyof C]: (value: C[K]) => string | void }
>(config: C, consumers: M) {
  return (Object.entries(config) as [keyof M, C[keyof C]][])
    .map(([key, value]) => key in consumers ? consumers[key](value) : undefined)
    .filter(Boolean).join(" ").trim();
}

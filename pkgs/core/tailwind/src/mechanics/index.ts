export * from "./alignment";
export * from "./display";
export * from "./layout";
// export * from "./typo";
// export * from "./size";
// export * from "./border"
// export * from "./input"

// prettier-ignore

/** @beta */
export function createClass<
  C extends { [K in keyof C]: C[K] },
  M extends { [K in keyof C]: (value: C[K]) => string | void },
  O extends Array<keyof C>
>(config: C, consumers: M, overrides: O, className : string) {
  overrides.forEach((key) => {
    if (key in config) {
      delete config[key];
    }
  })
  const output = (Object.entries(config) as [keyof M, C[keyof C]][])
    .map(([key, value]) => key in consumers ? consumers[key](value) : undefined)
    .filter(Boolean).join(" ");
  
  return `${output} ${className || ""}`.trim()
}
/** @alpha */
export type Keyof<T> = keyof T;
/** @alpha */
export type CSSClass<T extends string, U extends string> = `${T}-${U}`;
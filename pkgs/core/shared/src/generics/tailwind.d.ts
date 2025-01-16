/** @alpha */
export type Keyof<T> = keyof T;
export type MixedTwClass<T extends string, U extends string> = `${T}-${U}`;
/** @alpha */ /** Colors */
export type Colors = "mugi" | "hat" | "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "yellow" | "amber" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
/** @alpha */
export type ColorStrength = "slim" | "regular" | "bold" | "heavy" | "hardcore";
/** @alpha */
export type Color = Partial<{ color: Colors; intensity: ColorStrength; border: Colors; background: Colors; outline: Colors; ring: Colors }>
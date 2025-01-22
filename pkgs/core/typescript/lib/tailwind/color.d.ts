/** @alpha */ /** Colors */
export type Colors = "mugi" | "hat" | "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "yellow" | "amber" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
/** @alpha */
export type ColorStrength = "slim" | "regular" | "bold" | "heavy";
/** @alpha */
export type Color = Partial<{ color: Colors; strength: ColorStrength }>
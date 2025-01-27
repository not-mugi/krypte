import type { Color, Effect } from "@mugijs/tw/types";
import { FlavorComposite, ColorFlavor, EffectFlavor } from "@mugijs/tw";

export interface Appearance {
  color? : Color,
  effect? : Effect
}

export const Appearance = ({ color, effect }: Appearance): string => {
  const { exchange } = FlavorComposite(
    ColorFlavor(color),
    EffectFlavor(effect)
  );
  return exchange();
};
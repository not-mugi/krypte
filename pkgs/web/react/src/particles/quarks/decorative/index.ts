import type { Color, Effect } from "@mugijs/tw/types";
import { FlavorComposite, ColorFlavor, EffectFlavor } from "@mugijs/tw";

export interface Decorative {
  color : Color,
  effect : Effect
}

export const Decorative = ({ color, effect }: Decorative): string => {
  const { exchange } = FlavorComposite(
    ColorFlavor(color),
    EffectFlavor(effect)
  );
  return exchange();
};
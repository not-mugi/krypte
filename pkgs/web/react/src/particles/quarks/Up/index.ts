import type { Alignment, Background } from "@mugijs/tailwind/types";
import {
  BackgroundFlavor,
  AlignmentFlavor,
  CreateComposite,
} from "@mugijs/tailwind";

export type UpQuarkProps = {
  alignment: Alignment;
  background: Background;
};

export const UpQuark = ({ alignment, background }: UpQuarkProps) => {
  const align = AlignmentFlavor(alignment);
  const bg = BackgroundFlavor(background);
  const composite = CreateComposite(align, bg);
  return composite.exchange();
};
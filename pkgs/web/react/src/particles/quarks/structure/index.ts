import type {
  Container, Sizing, Spacing,
  Alignment, ContentAlignment, Justification,
} from "@mugijs/tw/types";
import {
  FlavorComposite,
  ContainerFlavor, SizingFlavor, SpacingFlavor,
  AlignmentFlavor, JustificationFlavor, ContentAlignmentFlavor,
} from "@mugijs/tw";

export interface Structure {
  container?: Container;
  sizing?: Sizing;
  spacing?: Spacing;
  alignment?: Alignment;
  justification?: Justification;
  contentAlignment?: ContentAlignment;
}

export const Structure = ({
  container,
  alignment,
  justification,
  contentAlignment,
  sizing,
  spacing,
}: Structure): string => {
  const { exchange } = FlavorComposite(
    ContainerFlavor(container),
    SizingFlavor(sizing),
    SpacingFlavor(spacing),
    AlignmentFlavor(alignment),
    JustificationFlavor(justification),
    ContentAlignmentFlavor(contentAlignment)
  );
  return exchange();
};

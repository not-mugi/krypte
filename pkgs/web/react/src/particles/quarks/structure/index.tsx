import { mugi } from "../../hadrons/mugi";
import { Quark } from "../../foundation";
import type {
  Container, Sizing, Spacing,
  Alignment, ContentAlignment, Justification,
} from "@mugijs/tailwind/types";
import {
  ContainerFlavor, SizingFlavor, SpacingFlavor,
  AlignmentFlavor, JustificationFlavor, ContentAlignmentFlavor,
} from "@mugijs/tailwind";

export interface Structure extends Quark {
  container?: Container;
  alignment?: Alignment;
  justification?: Justification;
  contentAlignment?: ContentAlignment;
  sizing?: Sizing;
  spacing?: Spacing;
}

export const Struct = ({ container, alignment, justification, contentAlignment, sizing, spacing, children }: Structure) => {
  const flavors = [
    ContainerFlavor(container),
    SizingFlavor(sizing),
    SpacingFlavor(spacing),
    AlignmentFlavor(alignment),
    JustificationFlavor(justification),
    ContentAlignmentFlavor(contentAlignment),
  ];
  return <mugi.div flavor={flavors}>{children}</mugi.div>;
};

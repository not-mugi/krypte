import { BoxMechanics, createClass } from "@mugijs/tailwind-core/functions";
// prettier-ignore
import {
  Spatiality, Position, PositionalPlacement,
  BoxContent, ContentFloat, ContentPosition,
  MainAlignment, CrossAlignment, SelfCrossAlignment,
  MainJustification, InlineJustification, SelfInlineJustification,
} from "@mugijs/shared-core/tailwind";
import { KrypteAtomProps, Component } from "@mugijs/shared-core/react";
import { createElement } from "react";

export type BlockConfig = {
  display: Spatiality;
  content: BoxContent;
  position: Position;
  placement: PositionalPlacement;
  float: ContentFloat;
  clear: ContentPosition;
  justification: MainJustification;
  inlineJustification: InlineJustification;
  selfJustification: SelfInlineJustification;
  alignment: MainAlignment;
  crossAlignment: CrossAlignment;
  selfCrossAlignment: SelfCrossAlignment;
};

export type BlockProps = KrypteAtomProps<{
  config: BlockConfig;
  component: Component;
  overrides?: keyof BlockConfig;
}>;

// prettier-ignore
export function NewBlock({ config, overrides, children, component, ...props }: BlockProps) {
  return createElement(
    component,
    {
      ...props,
      className: createClass(config, BoxMechanics),
    },
    children
  );
}

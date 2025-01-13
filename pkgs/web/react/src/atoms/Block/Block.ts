import { createElement, HTMLAttributes } from "react";
// prettier-ignore
import {
  Spatiality, Position, PositionalPlacement,
  BoxContent, ContentFloat, ContentPosition,
  MainAlignment, CrossAlignment, SelfCrossAlignment,
  MainJustification, InlineJustification, SelfInlineJustification,
} from "@mugijs/shared-core/tailwind";
import { Component } from "@mugijs/shared-core/react";
import { BoxMechanics, createClass } from "@mugijs/tailwind-core/functions";

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

export type BlockProps = {
  config: Partial<BlockConfig>;
  component: Component;
  overrides?: Array<keyof BlockConfig>;
} & HTMLAttributes<HTMLElement>;

// prettier-ignore
export function NewBlock({ config, children, className, overrides = [], component, ...props }: BlockProps) {
  return createElement(
    component,
    {
      ...props,
      className: createClass(config, BoxMechanics, overrides, className!),
    },
    children
  );
}
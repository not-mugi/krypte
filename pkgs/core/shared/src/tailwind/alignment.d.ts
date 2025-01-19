/** @alpha */ /** Box Justification */ 
export type MainJustification = "normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch";
/** @alpha */
export type InlineJustification = Extract< MainJustification, "start" | "end" | "center" | "stretch">;
/** @alpha */
export type SelfInlineJustification = Extract< MainJustification, "start" | "end" | "center" | "stretch" | "auto" >;
/** @alpha */
export type Justification = Partial<{
  mainJustification: MainJustification;
  inlineJustification: InlineJustification;
  selfInlineJustification: SelfInlineJustification;
}>;

/** @alpha */ /** Box Alignment */
export type MainAlignment = MainJustification | "baseline";
/** @alpha */
export type CrossAlignment = Exclude< MainAlignment, "normal" | "between" | "stretch" | "around" | "evenly">;
/** @alpha */
export type SelfCrossAlignment = CrossAlignment | "auto";
/** @alpha */
export type Alignment = Partial<{
  mainAlignment: MainAlignment;
  crossAlignment: CrossAlignment;
  selfCrossAlignment: SelfCrossAlignment;
}>;

/** @alpha */ /** Content */
export type ContentPlacement = "center" | "start" | "end" | "between" | "around" | "evenly" | "stretch" | "baseline";
/** @alpha */
export type ContentItemsPlacement = Exclude<ContentPlacement, "between" | "around" | "evenly">;
/** @alpha */
export type ContentSelfPlacement = "auto" | "start" | "end" | "center" | "stretch";
/** @alpha */
export type ContentAlignment = Partial<{
  contentPlacement: ContentPlacement;
  contentItemsPlacement: ContentItemsPlacement;
  contentSelfPlacement: ContentSelfPlacement;
}>;
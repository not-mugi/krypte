/** Box Justification */ 
/** @alpha */
export type Justification = "left" | "right" | "start" | "end" | "center" | "justify" | "between" | "around" | "evenly" | "stretch" | "middle" | "both" | "none" | "auto" | "normal";
/** @alpha */
export type MainJustification = "normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch";
/** @alpha */
export type InlineJustification = Extract< MainJustification, "start" | "end" | "center" | "stretch">;
/** @alpha */
export type SelfInlineJustification = Extract< MainJustification, "start" | "end" | "center" | "stretch" | "auto" >;

/** Box Alignment */
/** @alpha */
export type Alignment = "normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "baseline" | "stretch";
/** @alpha */
export type MainAlignment = MainJustification | "baseline";
/** @alpha */
export type CrossAlignment = Exclude< MainAlignment, "normal" | "between" | "stretch" | "around" | "evenly">;
/** @alpha */
export type SelfCrossAlignment = CrossAlignment | "auto";

/** Content */
/** @alpha */
export type ContentPlacement = "center" | "start" | "end" | "between" | "around" | "evenly" | "stretch" | "baseline";
/** @alpha */
export type ContentItemsPlacement = Exclude<ContentPlacement, "between" | "around" | "evenly">;
/** @alpha */
export type ContentSelfPlacement = "auto" | "start" | "end" | "center" | "stretch";

/** Text */
/** @alpha */
export type TextVerticalAlignment = "top" | "middle" | "bottom";
/** @alpha */
export type TextHorizontalJustification = "start" | "end" | "center" | "justify" | "left" | "right";
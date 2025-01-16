/** @alpha */
    /** Box Justification */ 
export type Justification = "left" | "right" | "start" | "end" | "center" | "justify" | "between" | "around" | "evenly" | "stretch" | "middle" | "both" | "none" | "auto" | "normal";
export type MainJustification = "normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch";
export type InlineJustification = Extract< MainJustification, "start" | "end" | "center" | "stretch">;
export type SelfInlineJustification = Extract< MainJustification, "start" | "end" | "center" | "stretch" | "auto" >;

/** Box Alignment */
export type Alignment = "normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "baseline" | "stretch";
export type MainAlignment = MainJustification | "baseline";
export type CrossAlignment = Exclude< MainAlignment, "normal" | "between" | "stretch" | "around" | "evenly">;
export type SelfCrossAlignment = CrossAlignment | "auto";

/** Content */
export type ContentPlacement = "center" | "start" | "end" | "between" | "around" | "evenly" | "stretch" | "baseline";
export type ContentItemsPlacement = Exclude<ContentPlacement, "between" | "around" | "evenly">;
export type ContentSelfPlacement = "auto" | "start" | "end" | "center" | "stretch";

/** Text */
export type TextVerticalAlignment = "top" | "middle" | "bottom";
export type TextHorizontalJustification = "start" | "end" | "center" | "justify" | "left" | "right";
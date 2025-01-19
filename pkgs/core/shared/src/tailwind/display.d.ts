/** @alpha */ /** Display */
export type BoxSizing = "border" | "content";
/** @alpha */
export type BoxDisplay =  "flex" | "grid" | "block" | "inline" | "hidden" | "flowRoot" | "contents" | "inlineBlock" | "inlineFlex" | "inlineGrid";
/** @alpha */
export type Display = Partial<{ boxSizing: BoxSizing, boxDisplay: BoxDisplay }>;
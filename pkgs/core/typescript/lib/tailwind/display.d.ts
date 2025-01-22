/** @alpha */
export type Display =  "flex" | "grid" | "block" | "inline" | "hidden" | "flowRoot" | "contents" | "inlineBlock" | "inlineFlex" | "inlineGrid";
/** @alpha */ /** Display */
export type BoxSizing = "border" | "content";
/** @alpha */
export type Container = Partial<{ sizing: BoxSizing, display: Display }>;
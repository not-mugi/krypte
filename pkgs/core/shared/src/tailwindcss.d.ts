/** generics for maps */
export type KeyofMap<T> = keyof T;

export type MergedClassType<T extends string, U extends string> = `${T}-${U}`;

/** supported styles */
export type Colors =
  | "mugi"
  | "hat"
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "yellow"
  | "amber"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export type Intensity = "slim" | "regular" | "bold" | "heavy" | "hardcore";

export type FixedExtent = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type PercentageExtent =
  | "1/12"
  | "1/6"
  | "1/4"
  | "1/3"
  | "5/12"
  | "1/2"
  | "7/12"
  | "2/3"
  | "3/4"
  | "5/6"
  | "11/12"
  | "full"
  | "min"
  | "max"
  | "fit"
  | "screen";

export type Extent = FixedExtent & PercentageExtent;

export type Dimensions = { width: Extent; height: Extent } | Extent;

export type Placement =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "inset"
  | "start"
  | "end";

export type Justification =
  | "left"
  | "right"
  | "start"
  | "end"
  | "center"
  | "justify"
  | "between"
  | "around"
  | "evenly"
  | "stretch"
  | "middle"
  | "both"
  | "none"
  | "auto"
  | "normal";

export type Alignment =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "baseline"
  | "stretch";

export type ContentPlacement =
  | "center"
  | "start"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "stretch"
  | "baseline";

export type InlinePlacement = "top" | "middle" | "bottom";

export type TextJustification =
  | "start"
  | "end"
  | "center"
  | "justify"
  | "left"
  | "right";

export type ContentJustification =
  | "left"
  | "right"
  | "both"
  | "none"
  | "start"
  | "end";

export type ObjectPlacement =
  | "leftTop"
  | "top"
  | "rightTop"
  | "right"
  | "rightBottom"
  | "bottom"
  | "leftBottom"
  | "left";

export type BoxSizing = "border" | "content";

export type Spatiality =
  | "flex"
  | "grid"
  | "block"
  | "inline"
  | "hidden"
  | "flowRoot"
  | "contents"
  | "inlineBlock"
  | "inlineFlex"
  | "inlineGrid";

export type ObjectResize =
  | "contain"
  | "cover"
  | "fill"
  | "none"
  | "downscale"
  | "auto";

export type Overflow =
  | "auto"
  | "hidden"
  | "visible"
  | "scroll"
  | "xAuto"
  | "yAuto"
  | "xHidden"
  | "yHidden"
  | "xVisible"
  | "yVisible"
  | "xScroll"
  | "yScroll";

export type OverScroll = "contain" | "none" | "auto";

export type Arrangement =
  | "static"
  | "fixed"
  | "absolute"
  | "relative"
  | "sticky";

export type Visibility = "visible" | "invisible" | "collapse";

export type BorderExtent = "base" | "lg" | "xl" | "xxl";

export type BorderRadiusExtent = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type TextAlignment = "center" | "left" | "right";

export type StackOrder = "none" | "sm" | "md" | "lg" | "inf";

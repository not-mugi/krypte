declare module "krypte_tw" {
  /** generics for maps */
  export type KeyofMap<T> = keyof T;

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
    | "start"
    | "end"
    | "center"
    | "justify"
    | "between"
    | "around"
    | "evenly"
    | "middle"
    | "both"
    | "none";

  export type InlinePlacement = "top" | "middle" | "bottom";

  export type TextJustification =
    | "start"
    | "end"
    | "center"
    | "justify"
    | "left"
    | "right";

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

  export type Content =
    | "contain"
    | "cover"
    | "fill"
    | "none"
    | "downscale"
    | "auto";

  export type ContentOverflow =
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
}

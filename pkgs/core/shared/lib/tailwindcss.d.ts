declare module "krypte_tw" {
  /** generics for maps */
  export type KrypteTwMap<T extends string> = Record<T, string>;

  export type KrypteTwFragMap<T extends string> = Partial<Record<T, string>>;

  export type KrypteTwFragOnlyMap<
    T extends string,
    P extends keyof Partial<Record<T, string>>
  > = Pick<Record<T, string>, P>;

  export type KrypteTwFragExceptMap<
    T extends string,
    P extends keyof Partial<Record<T, string>>
  > = Omit<Record<T, string>, P>;

  type KrypteTwMergedMap<T extends string, B extends string> = {
    [key in `${T}-${B}`]: string;
  };

  type KrypteTwMergedWithoutMap<
    T extends string,
    B extends string,
    E extends string
  > = {
    [key in `${Exclude<T, E>}-${B}`]: string;
  };

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
    | "top"
    | "leftTop"
    | "left"
    | "rightTop"
    | "middle"
    | "leftBottom"
    | "bottom"
    | "rightBottom"
    | "right"
    | "both"
    | "none";

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

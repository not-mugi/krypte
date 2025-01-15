/** @beta */
export type KeyofMap<T> = keyof T;

/** @beta */
export type MergedClassType<T extends string, U extends string> = `${T}-${U}`;

/** @beta */
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

/** @beta */
export type Intensity = "slim" | "regular" | "bold" | "heavy" | "hardcore";

/** @beta */
export type FixedExtent = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

/** @beta */
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

/** @beta */
export type Extent = FixedExtent & PercentageExtent;

/** @beta */
export type SizeExtent = Exclude<Extent, "screen">;

/** @beta */
export type HeightExtent = Exclude<
  Extent,
  "1/12" | "1/4" | "5/12" | "7/12" | "3/4" | "11/12"
>;

/** @beta */
export type Dimensions = { width: Extent; height: Extent } | Extent;

/** @beta */
export type Axis = "x" | "y";

/** @beta */
export type Edges = "top" | "bottom" | "left" | "right";

/** @beta */
export type Logical = "inset" | "start" | "end";

/** @beta */
export type Corners = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

/** @beta */
export type LogicalCorners =
  | "start"
  | "end"
  | "startstart"
  | "startend"
  | "endstart"
  | "endend";

/** @beta */
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

/** @beta */
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

/** @beta */
export type EdgesPlacement = MergedClassType<Edges, FixedExtent>;

/** @beta */
export type LogicalPlacement = MergedClassType<Logical, FixedExtent>;

/** @beta */
export type PositionalPlacement = EdgesPlacement | LogicalPlacement;

/** @beta */
export type EdgesSpacing = MergedClassType<Edges, FixedExtent>;

/** @beta */
export type AxisSpacing = MergedClassType<Axis, FixedExtent>;

/** @beta */
export type LogicalSpacing = MergedClassType<
  Exclude<Logical, "inset">,
  FixedExtent
>;

/** @beta */
export type BetweenSpacing = AxisSpacing;

/** @beta */
export type NegativeBetweenSpacing = MergedClassType<"", BetweenSpacing>;

/** @beta */
export type PositionalSpacing = AxisSpacing | EdgesSpacing | LogicalSpacing;

/** @beta */
export type NegativeEdgesSpacing = MergedClassType<"", EdgesSpacing>;

/** @beta */
export type NegativeAxisSpacing = MergedClassType<"", AxisSpacing>;

/** @beta */
export type NegativeLogicalSpacing = MergedClassType<"", LogicalSpacing>;

/** @beta */
export type NegativePositionalSpacing = MergedClassType<"", PositionalSpacing>;

/** @beta */
export type ContentPlacement =
  | "center"
  | "start"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "stretch"
  | "baseline";

/** @beta */
export type MainJustification =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "stretch";

/** @beta */
export type InlineJustification = Extract<
  MainJustification,
  "start" | "end" | "center" | "stretch"
>;

/** @beta */
export type SelfInlineJustification = Extract<
  MainJustification,
  "start" | "end" | "center" | "stretch" | "auto"
>;

/** @beta */
export type MainAlignment = MainJustification | "baseline";

/** @beta */
export type CrossAlignment = Exclude<
  MainAlignment,
  "normal" | "between" | "stretch" | "around" | "evenly"
>;

/** @beta */
export type SelfCrossAlignment = CrossAlignment | "auto";

/** @beta */
export type InlinePlacement = "top" | "middle" | "bottom";

/** @beta */
export type TextJustification =
  | "start"
  | "end"
  | "center"
  | "justify"
  | "left"
  | "right";

/** @beta */
export type ContentPosition =
  | "left"
  | "right"
  | "both"
  | "none"
  | "start"
  | "end";

/** @beta */
export type ContentFloat = Exclude<ContentPosition, "both">;

/** @beta */
export type ObjectPlacement =
  | "leftTop"
  | "top"
  | "rightTop"
  | "right"
  | "rightBottom"
  | "bottom"
  | "leftBottom"
  | "left";

/** @beta */
export type BoxContent = "border" | "content";

/** @beta */
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

/** @beta */
export type ObjectResize =
  | "contain"
  | "cover"
  | "fill"
  | "none"
  | "downscale"
  | "auto";

/** @beta */
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

/** @beta */
export type OverScroll = "contain" | "none" | "auto";

/** @beta */
export type Position = "static" | "fixed" | "absolute" | "relative" | "sticky";

/** @beta */
export type Visibility = "visible" | "invisible" | "collapse";

/** @beta */
export type BorderExtent = "none" | "sm" | "md" | "lg" | "xl";

/** @beta */
export type BorderRadiusExtent = "none" | "sm" | "md" | "lg" | "xl" | "xxl";

/** @beta */
export type BorderRingExtent = "none" | "sm" | "md" | "lg" | "xl" | "inset";

/** @beta */
export type FullBorderRadiusExtent = BorderRadiusExtent | "full";

/** @beta */
export type SideBorderRadiusExtent = MergedClassType<Edges, BorderRadiusExtent>;

/** @beta */
export type CornerBorderRadiusExtent = MergedClassType<
  Corners,
  BorderRadiusExtent
>;

/** @beta */
export type LogicalBorderRadiusExtent = MergedClassType<
  LogicalCorners,
  BorderRadiusExtent
>;

/** @beta */
export type BorderStyle =
  | "solid"
  | "dashed"
  | "dotted"
  | "double"
  | "hidden"
  | "none";

/** @beta */
export type OutlineStyle = Exclude<BorderStyle, "hidden">;

/** @beta */
export type BorderRingOffset = Exclude<BorderRingExtent, "inset">;

/** @beta */
export type TextAlignment = "center" | "left" | "right";

/** @beta */
export type StackOrder = "none" | "sm" | "md" | "lg" | "inf";

/** @beta */
export type FormElement =
  | "input"
  | "textarea"
  | "select"
  | "multiselect"
  | "checkbox"
  | "radio";

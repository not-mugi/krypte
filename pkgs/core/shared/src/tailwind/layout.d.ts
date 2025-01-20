import { MixedTwClass } from "./utility";
import { MeasurementScales } from "./sizing"

/** @alpha */ /** Object */
export type ObjectFit = "fill" | "contain" | "cover" | "none" | "downscale";
/** @alpha */
export type ObjectPosition = "leftTop" | "top" | "rightTop" | "right" | "rightBottom" | "bottom" | "leftBottom" | "left";

/** @alpha */ /** Overflow */
export type Overflow = "auto" | "hidden" | "visible" | "scroll" | "xAuto" | "yAuto" | "xHidden" | "yHidden" | "xVisible" | "yVisible" | "xScroll" | "yScroll";
/** @alpha */
export type Overscroll = "contain" | "none" | "auto";

/** @alpha */ /** Visibility */
export type Stackorder = "none" | "sm" | "md" | "lg" | "inf";
/** @alpha */
export type Visibility = "visible" | "invisible" | "collapse";

/** @alpha */ /** Position */
export type Axis = "x" | "y";
/** @alpha */
export type Edges = "top" | "right" | "bottom" | "left";
/** @alpha */
export type Corners = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
/** @alpha */
export type LogicalCorners = "start" | "end" | "startstart" | "startend" | "endstart" | "endend";
/** @alpha */
export type Position = "static" | "fixed" | "absolute" | "relative" | "sticky";
/** @alpha */
export type SidesPlacement = MixedTwClass<Edges, MeasurementScales>;
/** @alpha */
export type LogicalPlacement = MixedTwClass< "start" | "end" | "inset", MeasurementScales >;

/** @alpha */ /** Content */
export type ContentGap = MeasurementScales;
/** @alpha */
export type ContentFloat = "left" | "right" | "none" | "start" | "end";
/** @alpha */
export type ContentClear = "left" | "right" | "both" | "none" | "start" | "end";
/** @alpha */
export type ContentPosition = "static" | "fixed" | "absolute" | "relative" | "sticky";

/** @alpha */ /** Layout */
export type Layout = Partial<{
  clear: ContentClear;
  float: ContentFloat;
  overflow: Overflow;
  overscroll: Overscroll;
  visibility: Visibility;
  stackorder: Stackorder;
  objectFit: ObjectFit;
  objectPosition: ObjectPosition;
  position: Position;
  edgePlacement: SidesPlacement;
  logicalPlacement: LogicalPlacement;
}>;
import { MeasurementScales } from "./measurement"
import { MixedTwClass } from "../utility/tailwind";

/** Object */
/** @alpha */
export type ObjectFit = "fill" | "contain" | "cover" | "none" | "downscale";
/** @alpha */
export type ObjectPosition = "leftTop" | "top" | "rightTop" | "right" | "rightBottom" | "bottom" | "leftBottom" | "left";

/** Overflow */
/** @alpha */
export type Overflow = "auto" | "hidden" | "visible" | "scroll" | "xAuto" | "yAuto" | "xHidden" | "yHidden" | "xVisible" | "yVisible" | "xScroll" | "yScroll";
/** @alpha */
export type Overscroll = "contain" | "none" | "auto";

/** Visibility */
/** @alpha */
export type Stackorder = "none" | "sm" | "md" | "lg" | "inf";
/** @alpha */
export type Visibility = "visible" | "invisible" | "collapse";

/** Position */
/** @alpha */
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

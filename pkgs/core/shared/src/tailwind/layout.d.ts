/** @alpha */ //prettier-ignore
import { MixedTwClass } from "../generics/tailwind";
import { MeasurementScales } from "./measurement"

/** Object */
export type ObjectFit = "fill" | "contain" | "cover" | "none" | "downscale";
export type ObjectPosition = "leftTop" | "top" | "rightTop" | "right" | "rightBottom" | "bottom" | "leftBottom" | "left";

/** Overflow */
export type Overflow = "auto" | "hidden" | "visible" | "scroll" | "xAuto" | "yAuto" | "xHidden" | "yHidden" | "xVisible" | "yVisible" | "xScroll" | "yScroll";
export type Overscroll = "contain" | "none" | "auto";

/** Visibility */
export type Stackorder = "none" | "sm" | "md" | "lg" | "inf";
export type Visibility = "visible" | "invisible" | "collapse";

    /** Position */
export type Axis = "x" | "y";
export type Edges = "top" | "right" | "bottom" | "left";
export type Corners = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
export type LogicalCorners = "start" | "end" | "startstart" | "startend" | "endstart" | "endend";

export type PositionalPlacement = MixedTwClass<Edges | "inset" | "start" | "end", MeasurementScales>;
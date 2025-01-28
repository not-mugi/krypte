import { Axis, Edges } from "./layout"
import { CSSClass } from "../utility"
import { MeasurementScales } from "./sizing"

/** @alpha */
export type AxisSpacingMeasurements = CSSClass<Axis, MeasurementScales>
/** @alpha */
export type AxisSpacingNegativeMeasurements = CSSClass<'', AxisSpacingMeasurements>
/** @alpha */
export type SpacingMeasurements = AxisSpacingMeasurements | AxisSpacingNegativeMeasurements
/** @alpha */
export type PaddingMeasurements = MeasurementScales
/** @alpha */
export type AxisPaddingMeasurements = CSSClass<Axis, PaddingMeasurements>
/** @alpha */
export type SidePaddingMeasurements = CSSClass<Edges, PaddingMeasurements>
/** @alpha */
export type LogicalPaddingMeasurements = CSSClass<"start" | "end", PaddingMeasurements>
/** @alpha */
export type AxisMarginMeasurements = CSSClass<Axis, MeasurementScales>
/** @alpha */
export type SideMarginMeasurements = CSSClass<Edges, MeasurementScales>
/** @alpha */
export type LogicalMarginMeasurements = CSSClass<"start" | "end", MeasurementScales>
/** @alpha */
export type NegativeAxisMarginMeasurements = CSSClass<'', AxisMarginMeasurements>
/** @alpha */
export type NegativeSideMarginMeasurements = CSSClass<'', SideMarginMeasurements>
/** @alpha */
export type NegativeLogicalMarginMeasurements = CSSClass<'', LogicalMarginMeasurements>
/** @alpha */
export type MarginMeasurements = AxisMarginMeasurements | SideMarginMeasurements | LogicalMarginMeasurements | NegativeAxisMarginMeasurements | NegativeSideMarginMeasurements | NegativeLogicalMarginMeasurements
/** @alpha */
export type GuttersGap = MeasurementScales
/** @alpha */
export type Spacing = Partial<{ spacing: SpacingMeasurements, margin: MarginMeasurements, padding: PaddingMeasurements }>
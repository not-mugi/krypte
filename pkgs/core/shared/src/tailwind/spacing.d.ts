import { Axis, Edges } from "./layout"
import { MeasurementScales } from "./sizing"
import { MixedTwClass } from "../typescript/tailwind"

/** @alpha */ /** Spacing */
export type AxisSpacingMeasurements = MixedTwClass<Axis, MeasurementScales>
/** @alpha */
export type AxisSpacingNegativeMeasurements = MixedTwClass<'', AxisSpacingMeasurements>
/** @alpha */ /** Spacing */
export type SpacingMeasurements = AxisSpacingMeasurements | AxisSpacingNegativeMeasurements
/** @alpha */ /** Padding */
export type PaddingMeasurements = MeasurementScales
/** @alpha */
export type AxisPaddingMeasurements = MixedTwClass<Axis, PaddingMeasurements>
/** @alpha */
export type SidePaddingMeasurements = MixedTwClass<Edges, PaddingMeasurements>
/** @alpha */
export type LogicalPaddingMeasurements = MixedTwClass<"start" | "end", PaddingMeasurements>
/** @alpha */ /** Margin */
export type AxisMarginMeasurements = MixedTwClass<Axis, MeasurementScales>
/** @alpha */
export type SideMarginMeasurements = MixedTwClass<Edges, MeasurementScales>
/** @alpha */
export type LogicalMarginMeasurements = MixedTwClass<"start" | "end", MeasurementScales>
/** @alpha */
export type NegativeAxisMarginMeasurements = MixedTwClass<'', AxisMarginMeasurements>
/** @alpha */
export type NegativeSideMarginMeasurements = MixedTwClass<'', SideMarginMeasurements>
/** @alpha */
export type NegativeLogicalMarginMeasurements = MixedTwClass<'', LogicalMarginMeasurements>
/** @alpha */
export type MarginMeasurements = AxisMarginMeasurements | SideMarginMeasurements | LogicalMarginMeasurements | NegativeAxisMarginMeasurements | NegativeSideMarginMeasurements | NegativeLogicalMarginMeasurements
/** @alpha */ /** Gap(F/G) */
export type GuttersGap = MeasurementScales
/** @alpha */ /** Spacing */ 
export type Spacing = Partial<{ spacing: SpacingMeasurements, margin: MarginMeasurements, padding: PaddingMeasurements }>
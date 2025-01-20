import type { 
    MeasurementScales,
    SpacingMeasurements, AxisSpacingMeasurements, AxisSpacingNegativeMeasurements, 
    MarginMeasurements, AxisMarginMeasurements, SideMarginMeasurements, LogicalMarginMeasurements,
    NegativeAxisMarginMeasurements, NegativeSideMarginMeasurements, NegativeLogicalMarginMeasurements,
    PaddingMeasurements, AxisPaddingMeasurements, SidePaddingMeasurements, LogicalPaddingMeasurements,
    Spacing
} from "../main";
import { 
    FIXED_SPACING_MAP, NEGATIVE_FIXED_SPACING_MAP, 
    FIXED_MARGIN_MAP, FIXED_AXIS_MARGIN_MAP, FIXED_SIDES_MARGIN_MAP, FIXED_LOGICAL_MARGIN_MAP,
    NEGATIVE_FIXED_AXIS_MARGIN_MAP, NEGATIVE_FIXED_SIDES_MARGIN_MAP, NEGATIVE_FIXED_LOGICAL_MARGIN_MAP,
    FIXED_PADDING_MAP, FIXED_AXIS_PADDING_MAP, FIXED_SIDES_PADDING_MAP, FIXED_LOGICAL_PADDING_MAP,
} from "../maps/spacing";

/** @alpha */
export function getSpacingClass(spacing?: SpacingMeasurements) {
    if(spacing && spacing in FIXED_SPACING_MAP) {
        return FIXED_SPACING_MAP[spacing as AxisSpacingMeasurements];
    }
    if(spacing && spacing in NEGATIVE_FIXED_SPACING_MAP) {
        return NEGATIVE_FIXED_SPACING_MAP[spacing as AxisSpacingNegativeMeasurements];
    }
}

/** @alpha */
export function getMarginClass(margin?: MarginMeasurements) {
    if(margin && margin in FIXED_MARGIN_MAP) {
        return FIXED_MARGIN_MAP[margin as MeasurementScales];
    }
    if(margin && margin in FIXED_SIDES_MARGIN_MAP) {
        return FIXED_SIDES_MARGIN_MAP[margin as SideMarginMeasurements];
    }
    if(margin && margin in FIXED_AXIS_MARGIN_MAP) {
        return FIXED_AXIS_MARGIN_MAP[margin as AxisMarginMeasurements];
    }
    if(margin && margin in FIXED_LOGICAL_MARGIN_MAP) {
        return FIXED_LOGICAL_MARGIN_MAP[margin as LogicalMarginMeasurements];
    }
    if(margin && margin in NEGATIVE_FIXED_SIDES_MARGIN_MAP) {
        return NEGATIVE_FIXED_SIDES_MARGIN_MAP[margin as NegativeSideMarginMeasurements];
    }
    if(margin && margin in NEGATIVE_FIXED_AXIS_MARGIN_MAP) {
        return NEGATIVE_FIXED_AXIS_MARGIN_MAP[margin as NegativeAxisMarginMeasurements];
    }
    if(margin && margin in NEGATIVE_FIXED_LOGICAL_MARGIN_MAP) {
        return NEGATIVE_FIXED_LOGICAL_MARGIN_MAP[margin as NegativeLogicalMarginMeasurements];
    }
}

/** @alpha */
export function getPaddingClass(padding?: PaddingMeasurements) {
    if(padding && padding in FIXED_PADDING_MAP) {
        return FIXED_PADDING_MAP[padding as MeasurementScales];
    }
    if(padding && padding in FIXED_SIDES_PADDING_MAP) {
        return FIXED_SIDES_PADDING_MAP[padding as SidePaddingMeasurements];
    }
    if(padding && padding in FIXED_AXIS_PADDING_MAP) {
        return FIXED_AXIS_PADDING_MAP[padding as AxisPaddingMeasurements];
    }
    if(padding && padding in FIXED_LOGICAL_PADDING_MAP) {
        return FIXED_LOGICAL_PADDING_MAP[padding as LogicalPaddingMeasurements];
    }
}

/** @alpha */
export const spacingBlueprints = () : Spacing => ({});

/** @alpha */
export const SpacingMechanics = {
    spacing : getSpacingClass,
    margin : getMarginClass,
    padding : getPaddingClass,
}
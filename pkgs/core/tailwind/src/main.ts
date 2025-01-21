export * as FlavorMixins from "./mixins/exports"
export * as ClassGetters from "./getters/exports"

/** @alpha */ 
export type {
  /*** utilities ***/
  Constructor, Keyof, MixedTwClass,
  /** display */
  Container, Display, BoxSizing,
  /** alignment */
  Alignment, Justification, ContentAlignment, MainAlignment, CrossAlignment, SelfCrossAlignment, ContentPlacement, ContentItemsPlacement, ContentSelfPlacement, MainJustification, InlineJustification, SelfInlineJustification,
  /** layout */
  Layout, Position, Overflow, Overscroll, Stackorder, Visibility, ContentClear, ContentFloat, ObjectFit, ObjectPosition, SidesPlacement, LogicalPlacement,
  /** border */
  Border, Axis, BorderMeasurements, BorderRingMeasurements, BorderStyle, CornerBorderRadiusMeasurements, FullBorderRadiusMeasurements, LogicalBorderRadiusMeasurements, OutlineStyle, SideBorderRadiusMeasurements, /** color */ Color, Colors, ColorStrength,
  /** sizing */
  Sizing, MeasurementScales, MeasurementRatios, WidthMeasurements, HeightMeasurements, HeightMeasurementRatios, SizeMeasurements, DimensionMeasurements,
  /** typography */
  Typography, TextHorizontalAlign, TextVerticalAlign, TextMeasurementScales, LineHeightMeasurements, LineHeightScales, LineHeightRelativeScales, TextDecoration, TextStyleMeasurementScales, TextTransform, TextOverflow, TextWrap, TextWhitespace, TextWordBreak, TextHyphen,
  /** Form */
  Form, FormElement,
  /** Spacing */
  Spacing, SpacingMeasurements, AxisSpacingMeasurements, AxisSpacingNegativeMeasurements, MarginMeasurements, AxisMarginMeasurements, SideMarginMeasurements, LogicalMarginMeasurements, NegativeAxisMarginMeasurements, NegativeSideMarginMeasurements, NegativeLogicalMarginMeasurements, PaddingMeasurements, AxisPaddingMeasurements, SidePaddingMeasurements, LogicalPaddingMeasurements,
} from "@mugijs/typescript";

/** @alpha */
export type Quirk = { [k: string]: QuirkFlavor };
/** @alpha */
export type QuirkFlavor = { [name: string]: string | QuirkFlavor };
/** @alpha */
export type GetterFunctions<Qi> = { [N in keyof Qi]: (value?: any) => string };
/** @alpha */
export type QuirkInteractions<EF> = { [name: string]: GetterFunctions<EF> };

/** @alpha */
export class Quark {
  #quirks: Quirk = {};
  #interactions: QuirkInteractions<Quirk> = {};

  get quirks(): Quirk {
    return this.#quirks;
  }

  get interactions(): QuirkInteractions<{}> {
    return this.#interactions;
  }

  addquirk(fn : string, flavor : QuirkFlavor) {
    this.#quirks = { ...this.#quirks, [fn] : flavor }
  }

  exchange(): string {
    return Object.entries(this.quirks)
    .map(([property, flavors]) => {
      const get : GetterFunctions<Quirk> = this.interactions[property];
      return Object.entries(flavors)
        .map(([flavor, energy]) =>
          get[flavor](energy)
        )
        .join(" ");
    })
    .join(" ").trim();
  }
}

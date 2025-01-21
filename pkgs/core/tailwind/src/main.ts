export * as FlavorMixins from "./mixins/exports"
export * as ClassGetters from "./getters/exports"

/** @alpha */ 
export type {

  /** utils */
  Constructor, Keyof, CSSClass,

  /** alignment */
  Alignment, Justification, ContentAlignment, 
  MainAlignment, CrossAlignment, SelfCrossAlignment, 
  ContentPlacement, ContentItemsPlacement, ContentSelfPlacement, 
  MainJustification, InlineJustification, SelfInlineJustification,

  /** border */
  Border, Axis, BorderMeasurements, 
  OutlineStyle, SideBorderRadiusMeasurements, 
  BorderRingMeasurements, BorderStyle, CornerBorderRadiusMeasurements, FullBorderRadiusMeasurements, LogicalBorderRadiusMeasurements, 

  /** background */
  Background, BackgroundGradient, BackgroundPlacement, 
  BackgroundAttachment, BackgroundClip, BackgroundOrigin, 
  BackgroundPosition, BackgroundRepeat, BackgroundSize, 

  /** color */ 
  Color, Colors, ColorStrength,

  /** display */
  Container, Display, BoxSizing,

  /** Form */
  Form, FormElement,

  /** layout */
  Layout, Position, Overflow, 
  Overscroll, Stackorder, Visibility, 
  ContentClear, ContentFloat, ObjectFit, 
  ObjectPosition, SidesPlacement, LogicalPlacement,

  /** sizing */
  Sizing, MeasurementScales, MeasurementRatios, 
  WidthMeasurements, HeightMeasurements, 
  HeightMeasurementRatios, SizeMeasurements, DimensionMeasurements,

  /** Spacing */
  Spacing, SpacingMeasurements, AxisSpacingMeasurements, 
  AxisSpacingNegativeMeasurements, MarginMeasurements, AxisMarginMeasurements,
  SideMarginMeasurements, LogicalMarginMeasurements, NegativeAxisMarginMeasurements,
  NegativeSideMarginMeasurements, NegativeLogicalMarginMeasurements, PaddingMeasurements,
  AxisPaddingMeasurements, SidePaddingMeasurements, LogicalPaddingMeasurements,

  /** typography */
  Typography, TextHorizontalAlign, TextVerticalAlign, 
  TextMeasurementScales, LineHeightMeasurements, LineHeightScales, 
  LineHeightRelativeScales, TextDecoration, TextStyleMeasurementScales, 
  TextTransform, TextOverflow, TextWrap, 
  TextWhitespace, TextWordBreak, TextHyphen,
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
  /** @alpha */
  #quirks: Quirk = {};
  /** @alpha */
  #interactions: QuirkInteractions<Quirk> = {};
  /** @alpha */
  get quirks(): Quirk {
    return this.#quirks;
  }
  /** @alpha */
  get interactions(): QuirkInteractions<{}> {
    return this.#interactions;
  }
  /** @alpha */
  addquirk(fn : string, flavor : QuirkFlavor) {
    this.#quirks = { ...this.#quirks, [fn] : flavor }
  }
  /** @alpha */
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

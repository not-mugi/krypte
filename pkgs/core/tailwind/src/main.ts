export * from "./closures/lib"

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

  /** container */
  Container, Display, BoxSizing,

  /** effect */
  Effect, ShadowMeasurements, OpacityMeasurements, BlendMode,

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
export type Exchange = () => string;

/** @alpha */
export interface Flavor<S> { exchange: Exchange, setters : S }

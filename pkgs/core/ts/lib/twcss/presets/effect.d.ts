import { MeasurementScales } from "./sizing"
/** @alpha */
export type ShadowMeasurements = Exclude<MeasurementScales, "xxs" | "xs"> | "none" | "inner";
/** @alpha */
export type OpacityMeasurements = Exclude<MeasurementScales, "xxs"> | "none";
/** @alpha */
export type BlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "colorDodge" | "colorBurn" | "hardLight" | "softLight" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";
/** @alpha */
export type Effect = { shadow? : ShadowMeasurements, opacity? : OpacityMeasurements, mixBlendMode? : BlendMode, backgroundBlendMode? : BlendMode }
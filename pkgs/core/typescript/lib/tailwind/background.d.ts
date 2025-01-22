import { Corners, Edges } from "./layout"
import { CSSClass } from "./utility"
/** @alpha */
export type BackgroundPlacement = Edges | "center"
/** @alpha */
export type BackgroundPosition = BackgroundPlacement | Corners
/** @alpha */
export type BackgroundAttachment = "fixed" | "local" | "scroll"
/** @alpha */
export type BackgroundClip = "border" | "padding" | "content" | "text"
/** @alpha */
export type BackgroundOrigin = "border" | "padding" | "content"
/** @alpha */
export type BackgroundRepeat = "repeat" | "noRepeat" | "repeatX" | "repeatY"
/** @alpha */
export type BackgroundSize = "auto" | "cover" | "contain"
/** @alpha */
export type BackgroundGradient = CSSClass<"gradient", Exclude<BackgroundPosition, "center">> | "none"
/** @alpha */
export type Background = Partial<{
    attachment: BackgroundAttachment,
    clip: BackgroundClip,
    origin: BackgroundOrigin,
    position: BackgroundPosition,
    repeat: BackgroundRepeat,
    size: BackgroundSize,
    gradient: BackgroundGradient
}>
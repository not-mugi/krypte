import { 
    BackgroundRepeat, BackgroundSize,
    Background, BackgroundAttachment, BackgroundClip, 
    BackgroundGradient, BackgroundOrigin, BackgroundPosition, 
} from "../../main";
import { 
    BACKGROUND_POSITION_MAP, 
    BACKGROUND_REPEAT_MAP, BACKGROUND_SIZE_MAP,
    BACKGROUND_ATTACTMENT_MAP, BACKGROUND_CLIP_MAP, 
    BACKGROUND_GRADIENT_MAP, BACKGROUND_ORIGIN_MAP, 
} from "../../classes/background";

export const getBackgroundAttachmentClass = (attachment? : BackgroundAttachment) => 
    attachment && attachment in BACKGROUND_ATTACTMENT_MAP
        ? BACKGROUND_ATTACTMENT_MAP[attachment] : "";

export const getBackgroundClipClass = (clip?: BackgroundClip) => 
    clip && clip in BACKGROUND_CLIP_MAP
        ? BACKGROUND_CLIP_MAP[clip] : "";

export const getBackgroundOriginClass = (origin?: BackgroundOrigin) =>
    origin && origin in BACKGROUND_ORIGIN_MAP
        ? BACKGROUND_ORIGIN_MAP[origin] : "";

export const getBackgroundPositionClass = (position?: BackgroundPosition) =>
    position && position in BACKGROUND_POSITION_MAP
        ? BACKGROUND_POSITION_MAP[position] : "";

export const getBackgroundRepeatClass = (repeat?: BackgroundRepeat) =>
    repeat && repeat in BACKGROUND_REPEAT_MAP
        ? BACKGROUND_REPEAT_MAP[repeat] : "";

export const getBackgroundSizeClass = (size?: BackgroundSize) =>
    size && size in BACKGROUND_SIZE_MAP
        ? BACKGROUND_SIZE_MAP[size] : "";

export const getBackgroundGradientClass = (gradient?: BackgroundGradient) =>
    gradient && gradient in BACKGROUND_GRADIENT_MAP
        ? BACKGROUND_GRADIENT_MAP[gradient] : "";

export const backgroundBlueprint = () : Background => ({})

export const BackgroundMechanics = {
    attachment : getBackgroundAttachmentClass,
    clip : getBackgroundClipClass,
    origin : getBackgroundOriginClass,
    position : getBackgroundPositionClass,
    repeat : getBackgroundRepeatClass,
    size : getBackgroundSizeClass,
    gradient : getBackgroundGradientClass,
}
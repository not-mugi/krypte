import { Effect, BlendMode, OpacityMeasurements, ShadowMeasurements } from "@mugijs/typescript";
import { BACKGROUND_BLEND_MODE_MAP, MIX_BLEND_MODE_MAP, OPACITY_MAP, SHADOW_MAP } from "../../classes/effect";

export const getShadowClass = (shadow? : ShadowMeasurements) => 
    shadow && shadow in SHADOW_MAP 
        ? SHADOW_MAP[shadow] : "";

export const getOpacityClass = (opacity? : OpacityMeasurements) =>
    opacity && opacity in OPACITY_MAP
        ? OPACITY_MAP[opacity] : "";

export const getMixBlendModeClass = (mode? : BlendMode) =>
    mode && mode in MIX_BLEND_MODE_MAP
        ? MIX_BLEND_MODE_MAP[mode] : "";
    
export const getBackgroundBlendModeClass = (mode? : BlendMode) =>
    mode && mode in BACKGROUND_BLEND_MODE_MAP
        ? BACKGROUND_BLEND_MODE_MAP[mode] : "";

export const effectBlueprint = () : Effect => ({})

export const EffectMechanics = {
    shadow : getShadowClass,
    opacity : getOpacityClass,
    mixBlendMode : getMixBlendModeClass,
    backgroundBlendMode : getBackgroundBlendModeClass,
}
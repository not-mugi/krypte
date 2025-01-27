import { Colors } from "../../main";
import { 
  COLOR_MAP, BACKGROUND_COLOR_MAP, 
  BORDER_COLOR_MAP, DECORATION_COLOR_MAP, 
  OUTLINE_COLOR_MAP, RING_COLOR_MAP, SHADOW_COLOR_MAP 
} from "../../classes/color";

/** @alpha */
export const getTextColorClass = (color?: Colors) =>
  color && color in COLOR_MAP ? `${COLOR_MAP[color]}` : "";

/** @alpha */
export const getBackgroundColorClass = (color?: Colors) =>
  color && color in BACKGROUND_COLOR_MAP ? `${BACKGROUND_COLOR_MAP[color]}` : "";

/** @alpha */
export const getBorderColorClass = (color?: Colors) =>
  color && color in BORDER_COLOR_MAP ? `${BORDER_COLOR_MAP[color]}` : "";

/** @alpha */
export const getBorderOutlineColorClass = (color?: Colors) =>
  color && color in OUTLINE_COLOR_MAP ? `${OUTLINE_COLOR_MAP[color]}` : "";

/** @alpha */
export const getBorderRingColorClass = (color?: Colors) =>
  color && color in RING_COLOR_MAP ? `${RING_COLOR_MAP[color]}` : "";

/** @alpha */
export const getTextDecorationColorClass = (color?: Colors) =>
  color && color in DECORATION_COLOR_MAP ? `${DECORATION_COLOR_MAP[color]}` : "";

/** @alpha */
export const getShadowColorClass = (color?: Colors) =>
  color && color in SHADOW_COLOR_MAP ? `${SHADOW_COLOR_MAP[color]}` : "";

/** @alpha */
export const ColorMechanics = {
  color: getTextColorClass,
  background: getBackgroundColorClass,
  border: getBorderColorClass,
  outline: getBorderOutlineColorClass,
  ring: getBorderRingColorClass,
  decoration: getTextDecorationColorClass,
  shadow: getShadowColorClass,
};

import type { 
    TextHorizontalAlign, TextVerticalAlign, 
    TextMeasurementScales, TextStyleMeasurementScales, 
    LineHeightMeasurements, LineHeightScales, LineHeightRelativeScales, 
    TextDecoration, TextTransform, TextOverflow, TextWrap, TextWhitespace, TextWordBreak, TextHyphen 
} from "../tsc";
import { 
    TEXT_LINE_CLAMP_MAP, TEXT_UNDERLINE_OFFSET_MAP, 
    FIXED_LINE_HEIGHT_MAP, RELATIVE_LINE_HEIGHT_MAP, 
    TEXT_HORIZONTAL_ALIGN_MAP, TEXT_VERTICAL_ALIGN_MAP, 
    TEXT_DECORATION_MAP, TEXT_DECORATION_THINKNESS_MAP, 
    TEXT_WORD_BREAK_MAP, TEXT_WRAP_MAP, TEXT_HYPHENS_MAP, 
    TEXT_OVERFLOW_MAP, TEXT_TRANSFORM_MAP, TEXT_WHITESPACE_MAP, 
} from "../maps/typography";

/** @alpha */
export function getTextAlignClass(textAlign?: TextHorizontalAlign) {
  if (textAlign && textAlign in TEXT_HORIZONTAL_ALIGN_MAP) {
    return TEXT_HORIZONTAL_ALIGN_MAP[textAlign];
  }
}

/** @alpha */
export function getTextVerticalAlignClass(verticalAlign?: TextVerticalAlign) {
  if (verticalAlign && verticalAlign in TEXT_VERTICAL_ALIGN_MAP) {
    return TEXT_VERTICAL_ALIGN_MAP[verticalAlign];
  }
}

/** @alpha */
export function getTextLineClampClass(lineClamp?: TextMeasurementScales) {
    if (lineClamp && lineClamp in TEXT_LINE_CLAMP_MAP) {
        return TEXT_LINE_CLAMP_MAP[lineClamp];
    }
}

/** @alpha */
export function getLineHeightClass(lineHeight: LineHeightMeasurements) {
    if (lineHeight && lineHeight in FIXED_LINE_HEIGHT_MAP) {
        return FIXED_LINE_HEIGHT_MAP[lineHeight as LineHeightScales];
    }
    if (lineHeight && lineHeight in RELATIVE_LINE_HEIGHT_MAP) {
        return RELATIVE_LINE_HEIGHT_MAP[lineHeight as LineHeightRelativeScales];
    }
}

/** @alpha */
export function getTextDecorationClass(decoration?: TextDecoration) {
    if (decoration && decoration in TEXT_DECORATION_MAP) {
        return TEXT_DECORATION_MAP[decoration];
    }
}

/** @alpha */
export function getTextDecorationThicknessClass(thickness?: TextStyleMeasurementScales) {
    if (thickness && thickness in TEXT_DECORATION_THINKNESS_MAP) {
        return FIXED_LINE_HEIGHT_MAP[thickness];
    }
}

/** @alpha */
export function getTextUnderlineOffsetClass(offset?: TextStyleMeasurementScales) {
    if (offset && offset in TEXT_UNDERLINE_OFFSET_MAP) {
        return TEXT_UNDERLINE_OFFSET_MAP[offset];
    }
}

/** @alpha */
export function getTextTransformClass(transform?: TextTransform) {
    if (transform && transform in TEXT_TRANSFORM_MAP) {
        return TEXT_TRANSFORM_MAP[transform];
    }
}

/** @alpha */
export function getTextOverflowClass(overflow?: TextOverflow) {
    if (overflow && overflow in TEXT_OVERFLOW_MAP) {
        return TEXT_OVERFLOW_MAP[overflow];
    }
}

/** @alpha */
export function getTextWrapClass(wrap?: TextWrap) {
    if (wrap && wrap in TEXT_WRAP_MAP) {
        return TEXT_WRAP_MAP[wrap];
    }
}

/** @alpha */
export function getTextWhitespaceClass(whitespace?: TextWhitespace) {
    if (whitespace && whitespace in TEXT_WHITESPACE_MAP) {
        return TEXT_WHITESPACE_MAP[whitespace];
    }
}

/** @alpha */
export function getTextWordBreakClass(wordBreak?: TextWordBreak) {
    if (wordBreak && wordBreak in TEXT_WORD_BREAK_MAP) {
        return TEXT_WORD_BREAK_MAP[wordBreak];
    }
}

/** @alpha */
export function getTextHyphenClass(hyphen?: TextHyphen) {
    if (hyphen && hyphen in TEXT_HYPHENS_MAP) {
        return TEXT_HYPHENS_MAP[hyphen];
    }
}

/** @alpha */
export const TypographyMechanics = {
    align : getTextAlignClass,
    verticalAlign : getTextVerticalAlignClass,
    lineClamp : getTextLineClampClass,
    lineHeight : getLineHeightClass,
    decoration : getTextDecorationClass,
    decorationThickness : getTextDecorationThicknessClass,
    underlineOffset : getTextUnderlineOffsetClass,
    transform : getTextTransformClass,
    overflow : getTextOverflowClass,
    wrap : getTextWrapClass,
    whitespace : getTextWhitespaceClass,
    wordBreak : getTextWordBreakClass,
    hyphen : getTextHyphenClass,
}
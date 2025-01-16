import { ContentItemsPlacement, ContentPlacement, ContentSelfPlacement, CrossAlignment, InlineJustification, MainAlignment, MainJustification, SelfCrossAlignment, SelfInlineJustification } from "@mugijs/shared-core"
import { CONTENT_ITEMS_PLACEMENT_MAP, CONTENT_PLACEMENT_MAP, CONTENT_SELF_PLACEMENT_MAP, CROSS_SELF_ALIGNMENT_MAP, INLINE_JUSTIFICATION_MAP, INLINE_SELF_JUSTIFICATION_MAP, MAIN_ALIGNMENT_MAP, MAIN_JUSTIFICATION_MAP } from "../maps/alignment"

export type Alignment = Partial<{
    mainAlignment : MainAlignment,
    crossAlignment : CrossAlignment,
    selfCrossAlignment : SelfCrossAlignment
}>

export type Justification = Partial<{
    mainJustification : MainJustification,
    inlineJustification : InlineJustification,
    selfInlineJustification : SelfInlineJustification,
}>

export type ContentAlignment = Partial<{
    contentPlacement : ContentPlacement,
    contentItemsPlacement : ContentItemsPlacement,
    contentSelfPlacement : ContentSelfPlacement,
}>

export function getMainAlignmentClass(mainAlignment? : MainAlignment) {
    if(mainAlignment && mainAlignment in MAIN_ALIGNMENT_MAP) {
        return MAIN_ALIGNMENT_MAP[mainAlignment]
    }
}

export function getCrossAlignmentClass(crossAlignment? : CrossAlignment) {
    if(crossAlignment && crossAlignment in MAIN_ALIGNMENT_MAP) {
        return MAIN_ALIGNMENT_MAP[crossAlignment]
    }
}

export function getSelfCrossAlignmentClass(selfCrossAlignment? : SelfCrossAlignment) {
    if(selfCrossAlignment && selfCrossAlignment in CROSS_SELF_ALIGNMENT_MAP) {
        return CROSS_SELF_ALIGNMENT_MAP[selfCrossAlignment]
    }
}

export function getMainJustificationClass(mainJustification? : MainJustification) {
    if(mainJustification && mainJustification in MAIN_JUSTIFICATION_MAP) {
        return MAIN_JUSTIFICATION_MAP[mainJustification]
    }
}

export function getInlineJustificationClass(inlineJustification? : InlineJustification) {
    if(inlineJustification && inlineJustification in INLINE_JUSTIFICATION_MAP) {
        return INLINE_JUSTIFICATION_MAP[inlineJustification]
    }
}

export function getSelfInlineJustificationClass(selfInlineJustification? : SelfInlineJustification) {
    if(selfInlineJustification && selfInlineJustification in INLINE_SELF_JUSTIFICATION_MAP) {
        return INLINE_SELF_JUSTIFICATION_MAP[selfInlineJustification]
    }
}

export function getContentPlacementClass(contentPlacement? : ContentPlacement) {
    if(contentPlacement && contentPlacement in CONTENT_PLACEMENT_MAP) {
        return CONTENT_PLACEMENT_MAP[contentPlacement]
    }
}

export function getContentItemsPlacementClass(contentItemsPlacement? : ContentItemsPlacement) {
    if(contentItemsPlacement && contentItemsPlacement in CONTENT_ITEMS_PLACEMENT_MAP) {
        return CONTENT_ITEMS_PLACEMENT_MAP[contentItemsPlacement]
    }
}

export function getContentSelfPlacementClass(contentSelfPlacement? : ContentSelfPlacement) {
    if(contentSelfPlacement && contentSelfPlacement in CONTENT_SELF_PLACEMENT_MAP) {
        return CONTENT_SELF_PLACEMENT_MAP[contentSelfPlacement]
    }
}

export const AlignmentMechanics = {
    mainAlignment : getMainAlignmentClass,
    crossAlignment : getCrossAlignmentClass,
    selfCrossAlignment : getSelfCrossAlignmentClass,
}

export function alignmentBlueprint() : Alignment {
    return {
        mainAlignment : "center",
    }
}

export const JustificationMechanics = {
    mainJustification : getMainJustificationClass,
    inlineJustification : getInlineJustificationClass,
    selfInlineJustification : getSelfInlineJustificationClass,
}

export function justificationBlueprint() : Justification {
    return {
        mainJustification : "center",
    }
}

export const ContentAlignmentMechanics = {
    contentPlacement : getContentPlacementClass,
    contentItemsPlacement : getContentItemsPlacementClass,
    contentSelfPlacement : getContentSelfPlacementClass,
}

export function contentAlignmentBlueprint() : ContentAlignment {
    return {
        contentPlacement : "center",
    }
}

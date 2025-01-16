import { 
    Display, Layout, Alignment, Justification,
    displayBlueprint, layoutBlueprint, alignmentBlueprint, justificationBlueprint
} from "@mugijs/tailwind-core/functions";
// import { BoxDisplay, BoxSizing, ContentClear, ContentFloat } from "@shared-core/tailwind/box";
// import { 
//     MainAlignment, CrossAlignment, SelfCrossAlignment, 
//     MainJustification, InlineJustification, SelfInlineJustification, PositionalPlacement 
// } from "@shared-core/tailwind/placement";

export interface Upflavor {
    _display : Display,
    _layout : Layout
    _alignment : Alignment,
    _justification : Justification,
}

export class UpQuark implements Upflavor {
    _display: Display = displayBlueprint()
    _layout : Layout = layoutBlueprint()
    _justification: Justification = justificationBlueprint();
    _alignment: Alignment = alignmentBlueprint();

    public setBoxDisplay(display : BoxDisplay) {
        this._display.boxDisplay = display
    }

    public setBoxSizing(sizing : BoxSizing) {
        this._display.boxSizing = sizing
    }

    public setDisplay(display : Display) {
        this._display = display
    }

    public setOverflow(overflow : Overflow) {
        this._layout.overflow = overflow
    }

    public setOverscroll(overscroll : Overscroll) {
        this._layout.overscroll = overscroll
    }

    public setFloat(float : ContentFloat) {
        this._layout.float = float
    }

    public setClear(clear : ContentClear) {
        this._layout.clear = clear
    }

    public setPlacement(placement : PositionalPlacement) {
        this._layout.placement = placement
    }

    public setLayout(layout : Layout) {
        this._layout = layout
    }

    public setMainAlignment(mainAlignment : MainAlignment) {
        this._alignment.mainAlignment = mainAlignment
    }

    public setCrossAlignment(crossAlignment : CrossAlignment) {
        this._alignment.crossAlignment = crossAlignment
    }

    public setSelfCrossAlignment(selfCrossAlignment : SelfCrossAlignment) {
        this._alignment.selfCrossAlignment = selfCrossAlignment
    }

    public setAlignment(alignment : Alignment) {
        this._alignment = alignment
    }

    public setMainJustification(mainJustification : MainJustification) {
        this._justification.mainJustification = mainJustification
    }

    public setInlineJustification(crossJustification : InlineJustification) {
        this._justification.inlineJustification = crossJustification
    }

    public setSelfInlineJustification(selfInlineJustification : SelfInlineJustification) {
        this._justification.selfInlineJustification = selfInlineJustification
    }

    public setJustification(justification : Justification) {
        this._justification = justification
    }
}
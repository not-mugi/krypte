import { Exchangable, HasIntereaction } from "..";
import type { Display, Layout, Alignment, Justification } from "@mugijs/tailwind-core/types"
import { displayBlueprint, layoutBlueprint, alignmentBlueprint, justificationBlueprint } from "@mugijs/tailwind-core/functions";

export interface Upflavor extends HasIntereaction {
  _display: Display;
  _layout: Layout;
  _alignment: Alignment;
  _justification: Justification;

  setDisplay(display: Display): void;
  setLayout(layout: Layout): void;
  setAlignment(alignment: Alignment): void;
  setJustification(justification: Justification): void;
}

export class UpQuark extends Exchangable implements Upflavor {
  _display: Display = displayBlueprint();
  _layout: Layout = layoutBlueprint();
  _justification: Justification = justificationBlueprint();
  _alignment: Alignment = alignmentBlueprint();


  public setDisplay(display: Display) {
    this._display = display;
  }

  public setLayout(layout: Layout) {
    this._layout = layout;
  }

  public setAlignment(alignment: Alignment) {
    this._alignment = alignment;
  }

  public setJustification(justification: Justification) {
    this._justification = justification;
  }


}

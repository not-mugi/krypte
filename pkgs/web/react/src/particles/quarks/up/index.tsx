import { AlignmentFlavor, BackgroundFlavor } from "@mugijs/tailwind";
import type { Alignment, Background, Flavor } from "@mugijs/tailwind/types";
import { mugi } from "../../hadrons/mugi";

export type UpQuarkProps = {
  alignment: Alignment;
  background: Background;
};

const align = AlignmentFlavor({ mainAlignment: "center" });
const bg = BackgroundFlavor({ backgroundAttachment : "fixed" });

export interface UpQuarkElement  {

}

export const UpQuark = ({}) => <mugi.div flavor={[align, bg]} >Hello world</mugi.div>;

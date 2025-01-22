import { Quark } from "@mugijs/tailwind";
import { ColorFlavor, BackgroundFlavor } from "@mugijs/tailwind/mixins"

class UpQuark extends BackgroundFlavor(ColorFlavor(Quark)) {}

const up = new UpQuark()
up.setBackground({
    attachment : "fixed"
})

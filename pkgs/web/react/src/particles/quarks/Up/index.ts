import { BackgroundFlavor, AlignmentFlavor  } from "@mugijs/tailwind"

const a = AlignmentFlavor({ mainAlignment : "around" })
a.setters.setCrossAlignment("center")
a.exchange() // outputs "content-center"
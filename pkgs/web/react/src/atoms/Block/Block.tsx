import type { 
    Alignment, Color, Container, 
    ContentAlignment, Justification, Sizing
} from "@mugijs/tw"
import { Atom } from "../atom"
import { createMugiElement, Appearance, Decorative, Structure } from "../../particles"

export interface BlockProps extends Atom {
    sizing?: Sizing,
    color?: Color,
    container?: Container,
    alignment?: Alignment,
    justification?: Justification,
    contentAlignment?: ContentAlignment
}

export default function Block({ color, sizing, component, children } : BlockProps ) {
    const quarks = [ 
        Appearance({ color }),
        Structure({ sizing })
    ]
    return createMugiElement(component)({ quarks, children })
}
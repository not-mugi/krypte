import type { 
    Alignment, Color, Container, 
    ContentAlignment, Effect, Justification, Sizing
} from "@mugijs/tw"
import { Atom } from "../atom"
import { createMugiElement, Appearance, Structure } from "../../particles"
export interface BlockProps extends Atom {
    sizing?: Sizing,
    color?: Color,
    effect?: Effect,
    container?: Container,
    alignment?: Alignment,
    justification?: Justification,
    contentAlignment?: ContentAlignment
}

export default function Block({ children, color, effect, sizing, container, alignment, justification, contentAlignment, ...props } : BlockProps ) {
    const quarks = [ 
        Appearance({ color, effect }),
        Structure({ container, alignment, justification, contentAlignment }),
    ]
    return createMugiElement(props.component)({ quarks, children })
}
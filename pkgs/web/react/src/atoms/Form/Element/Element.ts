import { HTMLAttributes } from "react"
import { BorderConfig, InputElementConfig } from "@mugijs/tailwind-core/functions"

export type ElementProps = {
    border : BorderConfig,
    element : InputElementConfig,
}  & HTMLAttributes<HTMLElement>

export function createNewElementConfig() : Partial<InputElementConfig> {
    return {
        element : "input"
    }
}

export function createNewBorderConfig() : Partial<BorderConfig> {
    return {
        width : "ewrer"
    }
}


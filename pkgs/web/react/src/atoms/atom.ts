import { JSX, ReactNode } from 'react'

export interface Atom {
    component : keyof JSX.IntrinsicElements,
    children? : ReactNode | ReactNode[],
}
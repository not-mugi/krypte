export interface Atom {
    component : keyof React.JSX.IntrinsicElements,
    children? : React.ReactNode | React.ReactNode[],
}
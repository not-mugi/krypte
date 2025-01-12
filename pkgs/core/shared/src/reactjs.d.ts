import { JSX, HTMLAttributes } from "react";

export type KrypteAtomProps<P> = P & HTMLAttributes<HTMLElement>;

export type Component = keyof JSX.IntrinsicElements;

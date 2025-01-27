import { CreateComposite, Flavor } from '@mugijs/tailwind';
import { JSX, HTMLProps, createElement } from 'react'

export type Hadron = HTMLProps<HTMLElement> & { flavor?: Flavor | Flavor[] };

export type HadronSignature = { [component: string]: ( props?: Hadron,) => JSX.Element }

export const mugi : HadronSignature = new Proxy(
  {},
  {
    get(_, prop: string) {
      return (p = {} as Hadron) => {
        let { flavor, ...props } = p

        let css = " ";
        if (Array.isArray(flavor)) {
            const cps = CreateComposite(...flavor)
            css += cps.exchange();
        } else if (flavor) {
            css += flavor?.exchange();
        }

        props.className = (props.className || "" + css).trim();

        return createElement(prop, props, props.children);
      };
    },
  }
);
import { JSX, HTMLProps, createElement } from 'react'

export type Mugi = HTMLProps<HTMLElement> & { quarks?: string | string[] };

export type MugiSignature = { [component: string]: ( props?: Mugi ) => JSX.Element }

export const mugi : MugiSignature = new Proxy({}, {
  get(_, component : string) {
    return (p = {} as Mugi) => {
      let css = ""
      let { quarks, ...props } = p
      if (Array.isArray(quarks)){
        css += quarks.join(" ").trim()
      }
      else if(typeof quarks === "string"){
        css += quarks.trim()
      }
      props.className = (props.className || "" + css).trim();
      return createElement(component, props, props?.children);
    }
  }
})

export function createMugiElement( component: string ) {
  return (props: Mugi) => mugi[component](props)
}
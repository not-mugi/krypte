import type {
  Alignment,
  CrossAlignment,
  MainAlignment,
  SelfCrossAlignment,
} from "../main";
import {
  getMainAlignmentClass as gm,
  getCrossAlignmentClass as gc,
  getSelfCrossAlignmentClass as gsc,
} from "../getters/align";

export type Exchange = () => string;
export type Setters<Q> = {
    [K in keyof Q as `set${Capitalize<string & K>}`]: (value: Q[K]) => void;
};
export type FlavorTrait<Q> = {
  setters: Setters<Q>;
  exchange: Exchange;
};
export type FlavorClosure<Q extends {}> = (quirk?: Q) => FlavorTrait<Q>;

export const CreateComposite = <Q extends {}>(...args: FlavorClosure<Q>[]) => {
  const reduced = args.reduce(
    (acc, curr) => {
      const { setters, exchange } = curr();
      acc.functions.push(exchange);
      acc.setters = { ...acc.setters, ...setters };
      return acc;
    },
    { setters: {} as Setters<Q>, functions: [] as Exchange[], exchange : () => {} }
  );
  reduced.exchange = () => reduced.functions.map((f) => f()).join(" ").trim();
  return reduced;
};

export const AlignmentFlavor : FlavorClosure<Alignment> = () => {
  let alignment: Alignment;

  const setAlignment = (newAlignment: Alignment = {}) => {
    alignment = newAlignment;
    return alignFlavor;
  };

  const setMainAlignment = (mainAlignment?: MainAlignment)  => {
    alignment.mainAlignment = mainAlignment;
  };

  const setCrossAlignment = (crossAlignment?: CrossAlignment) => {
    alignment.crossAlignment = crossAlignment;
  };

  const setSelfCrossAlignment = (selfCrossAlignment?: SelfCrossAlignment) => {
    alignment.selfCrossAlignment = selfCrossAlignment;
  };

  const classExchange = () => {
    return [
      gm(alignment.mainAlignment),
      gc(alignment.crossAlignment),
      gsc(alignment.selfCrossAlignment),
    ].join(" ").trim();
  };

  const alignFlavor = Object.assign(setAlignment, {
    setters: { setMainAlignment, setCrossAlignment, setSelfCrossAlignment },
    exchange: classExchange,
  });

  return alignFlavor;
};


const { setters : { setMainAlignment, setCrossAlignment, setSelfCrossAlignment } } = CreateComposite(AlignmentFlavor);

setMainAlignment?.("around")


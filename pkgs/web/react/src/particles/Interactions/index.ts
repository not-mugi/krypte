import { Quirk, QuirkMechs } from "../Quarks";

export const tailwindInteraction = <Q extends Quirk>(
  quirk: Q,
  mechanics: QuirkMechs<Q>,
) => {
  const out = Object.entries(quirk)
    .map(([name, colors]) => {
      const exchange = mechanics[name as keyof Quirk];
      return Object.entries(colors)
        .map(([property, value]) =>
          exchange[property as keyof typeof exchange](value)
        )
        .join(" ");
    })
    .join(" ");
  return `${out}`.trim();
};

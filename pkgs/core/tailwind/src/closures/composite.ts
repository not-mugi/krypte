import { Exchange, Flavor } from "../main";
/** 
 * @alpha
 * ```
 *  const align = AlignmentFlavor({ mainAlignment : "around" })
 *  const bg = BackgroundFlavor({ backgroundOrigin : "content" })
 *  const { exchange } = FlavorComposite(align, bg)
 *  const twcss = exchange() // "content-around bg-origin-content"
 * ```
 */
export const FlavorComposite = <Q extends Flavor[]>(...args: Q) => {

  const flcmp = args.reduce(
    (acc: { functions: Exchange[], exchange: Exchange }, curr) => {
      const { exchange } = curr;
      acc.functions.push(exchange);
      return acc;
    },
    { functions: [] as Exchange[], exchange : () => "" }
  );
  flcmp.exchange = () => flcmp.functions.map((exc) => exc()).join(" ").trim();
  const { functions, ...result } = flcmp;
  return result;
};
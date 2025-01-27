import { Exchange, Flavor } from "../main";
/** 
 * @alpha
 * ```
 *  const align = AlignmentFlavor({ mainAlignment : "around" })
 *  const bg = BackgroundFlavor({ backgroundOrigin : "content" })
 *  const { exchange } = CreateComposite(align, bg)
 *  const twcss = exchange() // "content-around bg-origin-content"
 * ```
 */
export const CreateComposite = <Q extends Flavor[]>(...args: Q) => {

  const reduced = args.reduce(
    (acc, curr) => {
      const { exchange } = curr;
      acc.functions.push(exchange);
      return acc;
    },
    { functions: [] as Exchange[], exchange : () => {} }
  );

  reduced.exchange = () => reduced.functions.map((f) => f()).join(" ").trim();
  
  return reduced;
};
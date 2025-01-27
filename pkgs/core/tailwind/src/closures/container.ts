import type { Flavor, Container } from "../main";
import { 
    getBoxDisplayClass as gbd,
    getBoxSizingClass as gbs
} from "../getters/container";

/**
 * @alpha
 * ```
 *  const container = { sizing: "content" }
 *  const { exchange } = ContainerFlavor(container)
 *  const twcss = exchange() // "box-content"
 * ```
 */
export const ContainerFlavor = ( container : Container = {} ) : Flavor => {
  const classExchange = () => {
    return [
      gbd(container?.display),
      gbs(container?.sizing),
    ].join(" ").trim();
  };
  return {
    exchange: classExchange,
  };
};
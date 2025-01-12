declare module "krypte_react" {
  import { HTMLAttributes } from "react";

  export type KrypteAtomProps<P, B> = P & HTMLAttributes<B>;
}

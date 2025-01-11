declare module "krypte_react" {
  import { HTMLAttributes } from "react";

  export type KrypteAtom<P, B> = P & HTMLAttributes<B>;
}

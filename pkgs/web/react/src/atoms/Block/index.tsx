import { BlockConfig, BlockProps, NewBlock } from "./Block";

function createNewBlockConfig(): Partial<BlockConfig> {
  return {
    display: "block",
    content: "content",
  };
}

export function Block({ config, component, ...props }: BlockProps) {
  return NewBlock({
    ...props,
    config: { ...createNewBlockConfig(), ...config },
    component: component || "div",
  });
}

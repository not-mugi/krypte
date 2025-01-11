import { TextProps } from "../../../core/declarations/atoms";

export function Text({ children, ...props }: TextProps) {
  return (
    <span className="text-gray-800">
      <p {...props}>{children}</p>
    </span>
  );
}

export function ThemedText({ children, ...props }: TextProps) {
  return (
    <span className="text-gray-800 dark:text-gray-200 mugi:text-hat-100">
      <p {...props}>{children}</p>
    </span>
  );
}

import { SpanProps } from "../../../core/declarations/atoms";

const SpanBase = ({
  width,
  height,
  children,
  theme = "text-gray-800",
}: SpanProps) => (
  <span className={`inline-block w-[${width}] h-[${height}] ${theme}`}>
    {children}
  </span>
);

export function Span(props: SpanProps) {
  return <SpanBase {...props} />;
}

export function ThemedSpan(props: SpanProps) {
  return <SpanBase {...props} theme="text-gray-800 mugi:bg-mugi-100" />;
}

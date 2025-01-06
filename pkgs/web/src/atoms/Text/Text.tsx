export function Text({ children, ...props }) {
  return (
    <span className="text-base text-gray-800 dark:text-gray-200">
      <p {...props}>{children}</p>
    </span>
  );
}

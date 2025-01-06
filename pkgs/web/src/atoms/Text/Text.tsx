

import { ReactNode, HTMLAttributes } from 'react';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function Text({ children, ...props }: TextProps) {
  return (
    <span className="text-base text-gray-800 dark:text-gray-200">
      <p {...props}>{children}</p>
    </span>
  );
}

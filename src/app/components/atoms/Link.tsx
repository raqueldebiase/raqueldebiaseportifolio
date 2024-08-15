// src/components/atoms/Link.tsx
import { HTMLProps } from 'react';

const Link = ({ href, children, ...props }: HTMLProps<HTMLAnchorElement>) => (
  <a href={href} {...props}>
    {children}
  </a>
);

export default Link;

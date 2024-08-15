// src/components/atoms/Link.tsx
import { HTMLProps } from 'react';

const Link = ({ href, children, className, ...props }: HTMLProps<HTMLAnchorElement>) => (
  <a 
    href={href} 
    className={`relative uppercase font-thin text-xl border-b-1 border-transparent hover:border-current focus:border-current transition-colors duration-300 ${className}`} 
    {...props}
  >
    {children}
  </a>
);

export default Link;

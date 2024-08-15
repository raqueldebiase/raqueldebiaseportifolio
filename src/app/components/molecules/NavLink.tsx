// src/components/molecules/NavLinks.tsx
import Link from '../atoms/Link';

const NavLinks = () => (
  <nav className='flex gap-24'>
    <Link href="#projects">projects</Link>
    <Link href="#contacts">contacts</Link>
    <Link href="https://github.com/raqueldebiase/" target="_blank">github</Link>
  </nav>
);

export default NavLinks;

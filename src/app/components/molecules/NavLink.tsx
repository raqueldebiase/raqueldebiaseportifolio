// src/components/molecules/NavLinks.tsx
import Link from '../atoms/Link';

const NavLinks = () => (
  <nav className='flex gap-24'>
    <Link href="#section1">about</Link>
    <Link href="#section2">projects</Link>
    <Link href="#section3">github</Link>
    <Link href="#section3">contacts</Link>
  </nav>
);

export default NavLinks;

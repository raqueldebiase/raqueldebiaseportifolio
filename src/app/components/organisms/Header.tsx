// src/components/organisms/Header.tsx
import NavLinks from "../molecules/NavLink";

const Header = () => (
  <header className='container flex justify-end py-4 md:py-8 text-white'>
    <NavLinks />
  </header>
);

export default Header;

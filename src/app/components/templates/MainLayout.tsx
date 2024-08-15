// src/components/templates/MainLayout.tsx
import Header from '../organisms/Header';
import Hero from '../organisms/Hero';
import Footer from '../organisms/Footer';
import Projects from '../organisms/Projects';
import Contacts from '../organisms/Contacts';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => (
  <div>
    <section className='bg-primary'>
      <Header />
      <Hero />
    </section>
    <main>{children}</main>
    <Projects />
    <Contacts />
    <Footer />
  </div>
);

export default MainLayout;

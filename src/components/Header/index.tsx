import Navbar from './Navbar';
import BurgerMenu from './BurgerMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-800 bg-background">
      <div className="container">
        <nav className="flex items-center justify-end sm:justify-center">
          <Navbar />
          <BurgerMenu />
        </nav>
      </div>
    </header>
  );
}

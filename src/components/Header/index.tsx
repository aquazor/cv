import Navbar from './Navbar';
import BurgerMenu from './BurgerMenu';
import LanguageSelect from './LanguageSelect';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-800 bg-background">
      <div className="container">
        <nav className="flex flex-wrap items-center justify-end py-1.5 sm:py-3">
          <div className="hidden grow justify-center sm:flex">
            <Navbar />
          </div>

          <div className="relative flex items-center gap-2">
            <LanguageSelect />
            <BurgerMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}

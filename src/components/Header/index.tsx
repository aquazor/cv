import Navbar from './Navbar';
import BurgerMenu from './BurgerMenu';
import LanguageSelect from './LanguageSelect';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-800 bg-background">
      <div className="container">
        <nav className="flex items-center gap-2">
          <div className="flex w-full justify-center">
            <Navbar />
          </div>

          <div className="flex items-center gap-2">
            <LanguageSelect />
            <BurgerMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}

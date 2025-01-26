import ArrowIcon from './ArrowIcon';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-neutral-800 bg-background">
      <div className="container">
        <div className="flex items-center justify-center">
          <ul className="flex items-center gap-1 py-1">
            <li>
              <a
                className="group flex items-center gap-1 p-1 font-robotoMono text-lg opacity-80 transition-opacity hover:opacity-100"
                href="https://www.linkedin.com/in/alexkornevskyi/"
                target="_blank"
              >
                LinkedIn
                <ArrowIcon size={16} />
              </a>
            </li>

            <li>
              <a
                className="group flex items-center gap-1 p-1 font-robotoMono text-lg opacity-80 transition-opacity hover:opacity-100"
                href="https://github.com/aquazor"
                target="_blank"
              >
                GitHub <ArrowIcon size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

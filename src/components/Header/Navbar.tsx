import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { PAGES } from '@/constants';

interface IUnderlineStyles {
  width: string | number;
  left: string | number;
}

export default function Navbar() {
  const { pathname } = useRouter();
  const linksListRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState<IUnderlineStyles>({
    left: '50%',
    width: 0,
  });
  const { left, width } = underlineStyle;

  useEffect(() => {
    const handleUnderlinePosition = () => {
      if (linksListRef.current) {
        const activeLink = linksListRef.current.querySelector<HTMLAnchorElement>(
          `a[href="${pathname}"]`,
        );
        if (activeLink) {
          const { offsetWidth, offsetLeft } = activeLink;
          setUnderlineStyle({ width: offsetWidth, left: offsetLeft });
        }
      }
    };

    handleUnderlinePosition();
    window.addEventListener('resize', handleUnderlinePosition);

    return () => {
      window.removeEventListener('resize', handleUnderlinePosition);
    };
  }, [pathname]);

  return (
    <div ref={linksListRef} className="relative hidden py-3 sm:block">
      <ul className="relative flex items-center gap-4 font-robotoMono">
        {PAGES.map(({ path, name }) => (
          <li key={path}>
            <Link
              href={path}
              className={twMerge(
                'block p-1 text-xl opacity-80 transition-opacity hover:opacity-100',
                path === pathname && 'opacity-100',
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <motion.div
        className="absolute bottom-3 h-0.5 bg-orange-500"
        style={{ left, width }}
        animate={{ left, width }}
        transition={{
          type: 'spring',

          stiffness: 500,
          damping: 25,
        }}
      />
    </div>
  );
}

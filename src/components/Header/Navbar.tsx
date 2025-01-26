import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import useCurrentLocale from '@/hooks/useCurrentLocale';

interface IUnderlineStyles {
  width: string | number;
  left: string | number;
}

export default function Navbar() {
  const {
    router: { pathname, locale, defaultLocale },
    localeFile: { pages },
  } = useCurrentLocale();
  const linksListRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState<IUnderlineStyles>({
    left: '50%',
    width: 0,
  });
  const { left, width } = underlineStyle;

  useEffect(() => {
    const handleUnderlinePosition = () => {
      if (linksListRef.current) {
        const normalizedPath =
          locale === defaultLocale
            ? `${pathname}`
            : `/${locale}${pathname === '/' ? '' : pathname}`;
        const activeLink = linksListRef.current.querySelector<HTMLAnchorElement>(
          `a[href="${normalizedPath}"]`,
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
  }, [pathname, locale, defaultLocale]);

  return (
    <div ref={linksListRef} className="relative ml-16 hidden py-3 sm:block">
      <ul className="relative flex items-center gap-4 font-robotoMono">
        {pages.map(({ path, name }) => (
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

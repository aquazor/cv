import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { IoMdMenu } from 'react-icons/io';
import Link from 'next/link';
import { anim } from '@/utils/anim';
import { useDropdownToggle } from '@/hooks/useToggleDropdown';
import useCurrentLocale from '@/hooks/useCurrentLocale';

export default function BurgerMenu() {
  const {
    router: { pathname },
    localeFile: { pages },
  } = useCurrentLocale();
  const { isOpen, ref, handleToggle, handleClose } = useDropdownToggle();

  const menu = {
    initial: {
      top: 100,
      opacity: 0,
    },
    enter: {
      top: '100%',
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
    exit: {
      top: 100,
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 0.25,
        delay: 0.15 + i * 0.05,
      },
    }),
  };

  return (
    <div ref={ref} className="relative py-3 sm:hidden">
      <button onClick={handleToggle} className="relative z-10 block sm:hidden">
        <IoMdMenu size={36} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...anim(menu)}
            className="absolute -right-4 z-[5] bg-neutral-600 px-4 py-2 sm:hidden"
          >
            <ul className="flex flex-col text-right">
              {pages.map(({ path, name }, i) => (
                <motion.li
                  key={path}
                  {...anim(opacity, i)}
                  onClick={() => {
                    if (path === pathname) {
                      return;
                    }
                    handleClose();
                  }}
                >
                  <Link
                    href={path}
                    className={twMerge(
                      'block text-nowrap p-1 text-2xl opacity-80 transition-opacity hover:opacity-100',
                      path === pathname && 'border-b-2 border-orange-500 opacity-100',
                    )}
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

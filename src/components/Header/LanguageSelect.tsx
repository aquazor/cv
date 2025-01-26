import { useRouter } from 'next/router';
import { IoIosArrowDown } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropdownToggle } from '@/hooks/useToggleDropdown';
import { anim } from '@/utils/anim';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'uk', label: 'Ukrainian' },
];

export default function LanguageSelect() {
  const { locale, push, pathname } = useRouter();
  const { isOpen, ref, handleClose, handleToggle } = useDropdownToggle();

  const handleLangChange = (code: string) => {
    if (locale === code) {
      return;
    }
    push(pathname, '', { locale: code });
    handleClose();
  };

  const menu = {
    initial: {
      top: 50,
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
      top: 50,
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
    <div ref={ref} className="relative w-16 border border-gray-700 bg-neutral-800">
      <div
        onClick={handleToggle}
        className="flex cursor-pointer items-center justify-between gap-1 px-2 py-1"
      >
        <span className="block">{locale === 'en' ? 'En' : 'Ua'}</span>
        <IoIosArrowDown
          className={twMerge('transition-transform duration-300', isOpen && 'rotate-180')}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...anim(menu)}
            className="absolute right-0 top-[calc(100%+1rem)] bg-neutral-600 px-3 py-1.5"
          >
            <ul className="space-y-1">
              {languages.map((lang, i) => (
                <motion.li
                  key={lang.code}
                  {...anim(opacity, i)}
                  onClick={() => handleLangChange(lang.code)}
                  className={twMerge(
                    'cursor-pointer opacity-80 hover:opacity-100',
                    locale === lang.code && 'font-bold opacity-100',
                  )}
                >
                  {lang.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

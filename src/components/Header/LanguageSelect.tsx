import { useRouter } from 'next/router';
import { MdLanguage } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropdownToggle } from '@/hooks/useToggleDropdown';
import { anim } from '@/utils/anim';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'uk', label: 'Українська' },
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
      y: 50,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
    exit: {
      y: 50,
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
    <div ref={ref}>
      <button onClick={handleToggle} className="flex items-center justify-between">
        <MdLanguage
          size={30}
          className={twMerge(
            'opacity-80 transition-opacity duration-300 hover:opacity-100 active:opacity-100',
            isOpen && 'opacity-100',
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...anim(menu)}
            className="absolute right-0 top-full mt-1.5 bg-neutral-600 px-3 py-1.5 shadow shadow-orange-500 sm:-right-4"
          >
            <ul className="space-y-1">
              {languages.map((lang, i) => (
                <motion.li
                  key={lang.code}
                  {...anim(opacity, i)}
                  onClick={() => handleLangChange(lang.code)}
                  className={twMerge(
                    'flex cursor-pointer justify-end opacity-80 hover:opacity-100',
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

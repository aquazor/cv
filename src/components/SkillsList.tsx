import { useState } from 'react';
import { motion } from 'framer-motion';
import { anim } from '@/utils/anim';
import { SKILLS } from '@/constants';
import useCurrentLocale from '@/hooks/useCurrentLocale';

export default function SkillsList() {
  const {
    router: { locale },
    localeFile: { skills },
  } = useCurrentLocale();
  const [isOpen, setIsOpen] = useState(false);

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
  };

  const card = {
    initial: {
      y: -20,
      opacity: 0,
      scale: 0.8,
    },
    enter: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.75,
        delay: i * 0.15,
      },
    }),
    exit: (i: number) => ({
      y: 100,
      opacity: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
      },
    }),
  };

  const mark = {
    initial: {
      backgroundSize: '0%, 100%',
    },
    enter: (i: number) => ({
      backgroundSize: '100%, 100%',
      transition: {
        duration: 0.5,
        delay: 0.5 + i * 0.15,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };

  return (
    <ul className="space-y-5 font-robotoMono">
      {SKILLS.map(({ title, values, moreValues }, i) => {
        return (
          <motion.li key={i} {...anim(card, i)}>
            <h5 className="bg-neutral-700 p-1 text-center font-robotoMono text-2xl font-bold lg:text-3xl">
              {locale === 'en' || locale === 'uk' ? title[locale] : 'en'}
            </h5>

            <div className="border border-neutral-700 bg-neutral-800 p-4">
              <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
                {values.map((value, i) =>
                  value.accent ? (
                    <motion.li
                      key={value.name}
                      {...anim(mark, i)}
                      className="w-fit bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1 text-xl font-bold lg:text-2xl"
                    >
                      {value.name}
                    </motion.li>
                  ) : (
                    <li key={value.name} className="w-fit px-1 text-xl lg:text-2xl">
                      {value.name}
                    </li>
                  ),
                )}

                {moreValues && moreValues.length > 0 && (
                  <>
                    {isOpen &&
                      moreValues.map((value) => (
                        <motion.li
                          {...anim(opacity)}
                          key={value.name}
                          className="w-fit px-1 text-xl lg:text-2xl"
                        >
                          {value.name}
                        </motion.li>
                      ))}

                    <button
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="rounded-md border border-orange-500 bg-neutral-600 px-1.5 py-0.5 font-roboto opacity-80 shadow-sm shadow-orange-500 transition-all hover:opacity-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    >
                      {isOpen
                        ? skills.showLess
                        : `${skills.showMore} (${moreValues.length})`}
                    </button>
                  </>
                )}
              </ul>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}

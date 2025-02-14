import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaSquareArrowUpRight } from 'react-icons/fa6';
import { anim } from '@/utils/anim';
import useCurrentLocale from '@/hooks/useCurrentLocale';
import Section from '@/components/Section';
import Stairs from '@/components/layouts/Stairs';
import PageNavigation from '@/components/PageNavigation';
import { SKILLS } from '@/constants';
import NextSneaks from '@/assets/sneakers-logo.svg';

export default function About() {
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
    enter: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.75,
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
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

  const navigation = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Head>
        <title>{skills.metaTitle}</title>
      </Head>
      <Stairs>
        <Section className="grow bg-background">
          <div className="py-5 md:pt-10">
            <motion.div className="mb-3 sm:hidden" {...anim(navigation)}>
              <PageNavigation
                leftLinkProps={{ text: skills.goAbout, href: '/about' }}
                rightLinkProps={{ text: skills.goExp, href: '/experience' }}
              />
            </motion.div>

            <ul className="space-y-5 font-robotoMono">
              {SKILLS.map(({ title, values, moreValues }, i) => {
                return (
                  <motion.li key={i} {...anim(card)}>
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
                            <li
                              key={value.name}
                              className="w-fit px-1 text-xl lg:text-2xl"
                            >
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

            <motion.div className="mt-5 border border-neutral-700" {...anim(card)}>
              <h2 className="bg-neutral-700 p-1 text-center font-robotoMono text-2xl font-bold lg:text-3xl">
                {skills.deployedProjects}
              </h2>

              <div className="bg-neutral-800 p-4">
                <ul>
                  <li className="flex flex-wrap items-center gap-2">
                    <a
                      className="flex items-center gap-2 p-1 font-robotoMono text-xl font-bold text-sky-400 underline underline-offset-4 lg:text-2xl"
                      href="https://next-sneaks.vercel.app/"
                      target="_blank"
                    >
                      <Image
                        className="shrink-0"
                        src={NextSneaks}
                        alt="NextSneaks logo"
                        width={24}
                        height={24}
                      />
                      <span className="text-nowrap">Next-Sneaks</span>{' '}
                      <FaSquareArrowUpRight className="shrink-0" />
                    </a>

                    <p className="text-lg lg:text-xl">{skills.projectDescription} 😎 </p>
                    <h5 className="text-lg lg:text-xl">
                      {skills.builtWith}{' '}
                      <motion.span
                        className="w-fit bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1 text-xl font-bold lg:text-2xl"
                        {...anim(mark, 5)}
                      >
                        Next.js
                      </motion.span>{' '}
                      &{' '}
                      <motion.span
                        className="w-fit bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1 text-xl font-bold lg:text-2xl"
                        {...anim(mark, 6)}
                      >
                        MongoDB
                      </motion.span>
                    </h5>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Section>
      </Stairs>
    </>
  );
}

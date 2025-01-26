import { motion } from 'framer-motion';
import { anim } from '@/utils/anim';
import Section from '@/components/Section';
import Stairs from '@/components/layouts/Stairs';
import ArrowIcon from '@/components/ArrowIcon';

export default function Experience() {
  const header = {
    initial: {
      y: -50,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
    exit: {
      y: 150,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const card = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
    exit: {
      y: 150,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const underline = {
    initial: {
      width: 0,
    },
    enter: (i: number) => ({
      width: '100%',
      transition: { delay: 0.75 + 0.4 * i },
    }),
  };

  const mark = {
    initial: {
      opacity: 0,
      backgroundSize: '0%, 100%',
    },
    enter: (i: number) => ({
      opacity: 1,
      backgroundSize: '100%, 100%',
      transition: {
        duration: 0.5,
        delay: 1 + i * 0.1,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };

  return (
    <Stairs>
      <Section className="grow bg-background">
        <div className="py-5 md:pt-12">
          <ul>
            <li>
              <motion.div {...anim(header)} className="flex items-center gap-2">
                <h4 className="bg-neutral-700 p-1 font-robotoMono text-3xl font-bold md:text-4xl">
                  Yuki Projects
                </h4>

                <a href="https://www.linkedin.com/company/yuki-projects/" target="_blank">
                  <ArrowIcon className="text-3xl" />
                </a>
              </motion.div>

              <div className="pt-4 md:px-4">
                <motion.div
                  {...anim(header)}
                  className="flex items-center justify-between gap-5"
                >
                  <p className="font-robotoMono text-2xl font-bold md:text-3xl">
                    Frontend web developer
                  </p>
                  <span className="underline underline-offset-4">
                    March 2024 – Present
                  </span>
                </motion.div>

                <ul className="mt-2 flex flex-col gap-4 md:flex-row">
                  <motion.li
                    {...anim(card, 0)}
                    className="flex flex-1 gap-2 border border-neutral-700 bg-neutral-800 p-3 text-xl before:mt-2 before:block before:size-2 before:shrink-0 before:bg-orange-500 xl:text-2xl"
                  >
                    <div>
                      <p>
                        Developed a{' '}
                        <span className="relative">
                          <strong>
                            fully responsive
                            <motion.span
                              {...anim(underline, 0)}
                              className="absolute bottom-0 left-0 block h-[2px] bg-orange-500"
                            />
                          </strong>
                        </span>{' '}
                        <span className="relative">
                          <strong>
                            multi-page
                            <motion.span
                              {...anim(underline, 1)}
                              className="absolute bottom-0 left-0 block h-[2px] bg-orange-500"
                            />
                          </strong>
                        </span>{' '}
                        online classifieds platform that brings people together to buy or
                        sell goods and services. This includes:
                      </p>
                      <ul className="mt-2 space-y-1">
                        <li className="flex gap-2 before:mt-2 before:block before:size-1.5 before:shrink-0 before:bg-orange-500">
                          Ad management system: creation, editing and deletion.
                        </li>
                        <li className="flex gap-2 before:mt-2 before:block before:size-1.5 before:shrink-0 before:bg-orange-500">
                          Search and filter functionality for ads by category, location
                          and other criteria.
                        </li>
                        <li className="flex gap-2 before:mt-2 before:block before:size-1.5 before:shrink-0 before:bg-orange-500">
                          Implementation of secure interactions between users.
                        </li>
                      </ul>{' '}
                      <p>
                        <span className="inline-flex flex-wrap gap-1.5 font-robotoMono text-sm font-bold">
                          <motion.span
                            {...anim(mark, 0)}
                            className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1"
                          >
                            #React.js
                          </motion.span>
                          <motion.span
                            {...anim(mark, 1)}
                            className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1"
                          >
                            #TypeScript
                          </motion.span>
                          <motion.span
                            {...anim(mark, 2)}
                            className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1"
                          >
                            #react-router
                          </motion.span>
                          <motion.span
                            {...anim(mark, 3)}
                            className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1"
                          >
                            #Tailwind CSS
                          </motion.span>
                        </span>
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    {...anim(card, 1)}
                    className="flex flex-1 gap-2 border border-neutral-700 bg-neutral-800 p-3 text-xl before:mt-2 before:block before:size-2 before:shrink-0 before:bg-orange-500 xl:text-2xl"
                  >
                    <div>
                      <p>
                        Developed a{' '}
                        <span className="relative">
                          <strong>
                            fully responsive
                            <motion.span
                              {...anim(underline, 2)}
                              className="absolute bottom-0 left-0 block h-[2px] bg-orange-500"
                            />
                          </strong>
                        </span>{' '}
                        user interface for an admin dashboard with draggable elements,
                        comprehensive data visualization in the form of charts and tables,
                        and various other features.{' '}
                      </p>
                      <span className="inline-flex flex-wrap gap-1.5 font-robotoMono text-sm font-bold">
                        <motion.span
                          {...anim(mark, 4)}
                          className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1"
                        >
                          #React.js
                        </motion.span>
                        <motion.span
                          {...anim(mark, 5)}
                          className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1"
                        >
                          #TypeScript
                        </motion.span>
                        <motion.span
                          {...anim(mark, 6)}
                          className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1"
                        >
                          #Material-UI
                        </motion.span>
                      </span>{' '}
                    </div>
                  </motion.li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Section>
    </Stairs>
  );
}

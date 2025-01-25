import { motion } from 'framer-motion';
import { anim } from '@/utils/anim';
import Section from '@/components/Section';
import Stairs from '@/components/layouts/Stairs';
import Photo from '@/assets/photo-02.png';
import Image from 'next/image';

export default function About() {
  const photo = {
    initial: {
      x: '-100%',
      opacity: 0,
      scale: 0.8,
    },
    enter: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 1,
      },
    },
  };

  const text = {
    initial: {
      x: '100%',
    },
    enter: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      x: '100%',
      transition: {
        duration: 1,
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
        duration: 0.75,
        delay: 0.5 + i * 0.25,
      },
    }),
    exit: {
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
      transition: {
        duration: 0.5,
        delay: 1 + i * 0.2,
        ease: [0.65, 0, 0.35, 1],
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
        delay: 1 + i * 0.2,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };

  const borderLeft = {
    initial: {
      height: 0,
    },
    enter: (i: number) => ({
      height: '100%',
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 2 + i * 0.5,
      },
    }),
  };

  return (
    <Stairs>
      <Section className="flex grow items-center justify-center bg-background">
        <div className="py-5 md:pt-12">
          <div className="grid items-center justify-center gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-[350px,1fr] lg:gap-x-10 xl:grid-cols-[450px,1fr]">
            <motion.div {...anim(photo)} className="hidden sm:block lg:row-span-2">
              <Image src={Photo} alt="Photo of me" quality={90} />
            </motion.div>

            <motion.div {...anim(text)} className="flex flex-col gap-6">
              <motion.div
                {...anim(opacity, 0)}
                className="relative bg-neutral-800 py-0.5 pl-3"
              >
                <motion.div
                  {...anim(borderLeft, 0)}
                  className="absolute left-0 top-0 h-full w-[2px] bg-neutral-700"
                />
                <p className="text-lg xl:text-xl">
                  I am a passionate{' '}
                  <motion.span
                    {...anim(mark, 0)}
                    className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                  >
                    Frontend Web Developer
                  </motion.span>{' '}
                  with 1 year of experience creating{' '}
                  <motion.span
                    {...anim(mark, 1)}
                    className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                  >
                    responsive
                  </motion.span>{' '}
                  and{' '}
                  <motion.span
                    {...anim(mark, 2)}
                    className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                  >
                    user-friendly
                  </motion.span>{' '}
                  web applications.
                </p>

                <p className="text-lg xl:text-xl">
                  In my free time, I enjoy meeting with my friends, playing some video
                  games, and working on personal projects.
                </p>
              </motion.div>

              <motion.div
                {...anim(opacity, 1)}
                className="relative bg-neutral-800 py-0.5 pl-3"
              >
                <motion.div
                  {...anim(borderLeft, 1)}
                  className="absolute left-0 top-0 h-full w-[2px] bg-neutral-700"
                />
                <p className="text-lg xl:text-xl">
                  Currently, my focus is on advancing my{' '}
                  <motion.span
                    {...anim(mark, 3)}
                    className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                  >
                    Frontend
                  </motion.span>{' '}
                  expertise, but I am also eager to broaden my horizons in full-stack
                  development.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              {...anim(text)}
              className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1"
            >
              <div>
                <div className="flex justify-center">
                  <motion.p
                    {...anim(opacity, 2)}
                    className="bg-neutral-800 p-2 text-center text-xl font-bold lg:text-2xl"
                  >
                    My goals include:
                  </motion.p>
                </div>

                <motion.div
                  {...anim(opacity, 3)}
                  className="relative mt-2 bg-neutral-800 py-0.5 pl-3"
                >
                  <motion.div
                    {...anim(borderLeft, 2)}
                    className="absolute left-0 top-0 h-full w-[2px] bg-neutral-700"
                  />

                  <ul className="space-y-2">
                    <li className="flex gap-2 before:mt-2 before:block before:size-1.5 before:shrink-0 before:bg-orange-500">
                      <p className="text-lg xl:text-xl">
                        <span className="relative font-robotoMono font-bold">
                          Professional Growth
                          <motion.span
                            {...anim(underline, 4)}
                            className="absolute bottom-0 left-0 block h-[2px] bg-orange-500"
                          />
                        </span>
                        : Expanding my knowledge, mastering new technologies, and
                        enhancing my existing skills.
                      </p>
                    </li>
                    <li className="flex gap-2 before:mt-2 before:block before:size-1.5 before:shrink-0 before:bg-orange-500">
                      <p className="text-lg xl:text-xl">
                        <span className="relative font-robotoMono font-bold">
                          Clear Communication
                          <motion.span
                            {...anim(underline, 5)}
                            className="absolute bottom-0 left-0 block h-[2px] bg-orange-500"
                          />
                        </span>
                        : Encouraging open and constructive communication with teammates
                        and leadership, while maintaining a clear understanding of project
                        objectives.
                      </p>
                    </li>
                    <li className="flex gap-2 before:mt-2 before:block before:size-1.5 before:shrink-0 before:bg-orange-500">
                      <p className="text-lg xl:text-xl">
                        <span className="relative font-robotoMono font-bold">
                          Teamwork
                          <motion.span
                            {...anim(underline, 6)}
                            className="absolute bottom-0 left-0 block h-[2px] bg-orange-500"
                          />
                        </span>
                        : Collaborating with experienced colleagues and engaging in
                        knowledge-sharing opportunities.
                      </p>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                {...anim(opacity, 4)}
                className="relative bg-neutral-800 py-0.5 pl-3"
              >
                <motion.div
                  {...anim(borderLeft, 3)}
                  className="absolute left-0 top-0 h-full w-[2px] bg-neutral-700"
                />
                <p className="text-lg xl:text-xl">
                  I’m excited to contribute to a team where I can continue{' '}
                  <motion.span
                    {...anim(mark, 7)}
                    className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                  >
                    growing
                  </motion.span>
                  ,{' '}
                  <motion.span
                    {...anim(mark, 7)}
                    className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                  >
                    learning
                  </motion.span>
                  , and{' '}
                  <motion.span
                    {...anim(mark, 7)}
                    className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                  >
                    building
                  </motion.span>{' '}
                  impactful web experiences.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>
    </Stairs>
  );
}

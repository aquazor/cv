import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { anim } from '@/utils/anim';
import Section from '@/components/Section';
import Stairs from '@/components/layouts/Stairs';
import Photo from '@/assets/photo-02.png';
import useCurrentLocale from '@/hooks/useCurrentLocale';
import PageNavigation from '@/components/PageNavigation';

export default function About() {
  const {
    localeFile: { about },
  } = useCurrentLocale();

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
        duration: 0.5,
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
        delay: i * 0.25,
      },
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
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
    <>
      <Head>
        <title>{about.metaTitle}</title>
      </Head>
      <Stairs>
        <Section className="flex grow items-center justify-center bg-background">
          <div className="flex flex-col py-5">
            <motion.div className="mb-3 sm:hidden" {...anim(opacity, 0)}>
              <PageNavigation
                leftLinkProps={{ text: about.goHome, href: '/' }}
                rightLinkProps={{ text: about.goSkills, href: '/skills' }}
              />
            </motion.div>

            <div className="grid items-center justify-center gap-x-6 gap-y-4 min-[560px]:grid-cols-2 lg:grid-cols-[350px,1fr] lg:gap-x-10 xl:grid-cols-[450px,1fr]">
              <motion.div
                {...anim(photo)}
                className="hidden min-[560px]:block lg:row-span-2"
              >
                <Image src={Photo} alt="Photo of me" priority quality={100} />
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
                    {about.iam}{' '}
                    <motion.span
                      {...anim(mark, 0)}
                      className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                    >
                      {about.frontendDev}
                    </motion.span>{' '}
                    {about.exp}{' '}
                    <motion.span
                      {...anim(mark, 1)}
                      className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                    >
                      {about.responsive}
                    </motion.span>{' '}
                    {about.and}{' '}
                    <motion.span
                      {...anim(mark, 2)}
                      className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                    >
                      {about.userFriendly}
                    </motion.span>{' '}
                    {about.webApps}.
                  </p>

                  <p className="text-lg xl:text-xl">{about.hobbies}</p>
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
                    {about.focus}{' '}
                    <motion.span
                      {...anim(mark, 3)}
                      className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                    >
                      {about.Frontend}
                    </motion.span>{' '}
                    {about.expertise}, {about.fullStack}.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                {...anim(text)}
                className="flex flex-col gap-6 min-[560px]:col-span-2 lg:col-span-1"
              >
                <div>
                  <div className="flex justify-center">
                    <motion.p
                      {...anim(opacity, 2)}
                      className="bg-neutral-800 p-2 text-center text-xl font-bold lg:text-2xl"
                    >
                      {about.goalsTitle}
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
                            {about.professionalGrowth}
                            <motion.span
                              {...anim(underline, 4)}
                              className="absolute bottom-0 left-0 block h-[2px] bg-orange-500"
                            />
                          </span>
                          : {about.professionalGrowthDesc}.
                        </p>
                      </li>
                      <li className="flex gap-2 before:mt-2 before:block before:size-1.5 before:shrink-0 before:bg-orange-500">
                        <p className="text-lg xl:text-xl">
                          <span className="relative font-robotoMono font-bold">
                            {about.clearCommunication}
                            <motion.span
                              {...anim(underline, 5)}
                              className="absolute bottom-0 left-0 block h-[2px] bg-orange-500"
                            />
                          </span>
                          : {about.clearCommunicationDesc}.
                        </p>
                      </li>
                      <li className="flex gap-2 before:mt-2 before:block before:size-1.5 before:shrink-0 before:bg-orange-500">
                        <p className="text-lg xl:text-xl">
                          <span className="relative font-robotoMono font-bold">
                            {about.teamwork}
                            <motion.span
                              {...anim(underline, 6)}
                              className="absolute bottom-0 left-0 block h-[2px] bg-orange-500"
                            />
                          </span>
                          : {about.teamworkDesc}.
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
                    {about.excitedToContribute}{' '}
                    <motion.span
                      {...anim(mark, 7)}
                      className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                    >
                      {about.growing}
                    </motion.span>
                    ,{' '}
                    <motion.span
                      {...anim(mark, 7)}
                      className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                    >
                      {about.learning}
                    </motion.span>
                    , {about.and}{' '}
                    <motion.span
                      {...anim(mark, 7)}
                      className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-0.5 font-robotoMono font-bold"
                    >
                      {about.building}
                    </motion.span>{' '}
                    {about.impactfulApps}.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Section>
      </Stairs>
    </>
  );
}

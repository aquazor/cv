import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { anim } from '@/utils/anim';
import Section from '@/components/Section';
import Stairs from '@/components/layouts/Stairs';
import ArrowIcon from '@/components/ArrowIcon';
import Photo from '@/assets/photo-01.png';

export default function Home() {
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.5,
      },
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

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

  const header = {
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

  const rainbow = {
    enter: (i: number) => ({
      backgroundPositionX: '100%',
      transition: {
        duration: 2,
        delay: i * 0.15,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop' as const,
      },
    }),
  };

  return (
    <Stairs>
      <Section className="flex grow items-center justify-center bg-background">
        <div className="flex justify-center py-5">
          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <motion.div
              className="flex w-3/5 shrink-0 items-center justify-center sm:w-1/2"
              {...anim(photo)}
            >
              <Image
                src={Photo}
                alt="Photo of me"
                priority
                quality={100}
                className="rounded-full border border-orange-500 p-2"
              />
            </motion.div>

            <motion.div {...anim(header)} className="flex flex-col items-center">
              <motion.h1
                {...anim(opacity, 0)}
                className="flex flex-col text-center sm:text-left"
              >
                <span className="text-4xl lg:text-5xl xl:text-6xl">Hi, my name is </span>
                <span className="text-4xl font-bold text-orange-500 sm:text-5xl lg:text-6xl xl:text-7xl">
                  Oleksandr Kornevskyi
                </span>
              </motion.h1>

              <motion.p className="mt-4 flex flex-col" {...anim(opacity, 1)}>
                <span className="text-4xl lg:text-5xl xl:text-6xl">I am a </span>
                <motion.span className="flex flex-col">
                  <motion.span
                    {...anim(rainbow, 0)}
                    className="bg-[linear-gradient(to_right,#EF4444,#FB923C,#EAB308,#22C55E,#38BDF8,#60A5FA,#C084FC,#EF4444,#FB923C,#EAB308,#22C55E,#38BDF8,#60A5FA,#C084FC)] bg-clip-text font-robotoMono text-4xl font-bold text-transparent [background-size:210%] sm:text-5xl lg:text-6xl xl:text-7xl"
                  >
                    FRONTEND
                  </motion.span>

                  <motion.span
                    {...anim(rainbow, 1)}
                    className="bg-[linear-gradient(to_right,#EF4444,#FB923C,#EAB308,#22C55E,#38BDF8,#60A5FA,#C084FC,#EF4444,#FB923C,#EAB308,#22C55E,#38BDF8,#60A5FA,#C084FC)] bg-clip-text font-robotoMono text-4xl font-bold text-transparent [background-size:210%] sm:text-5xl lg:text-6xl xl:text-7xl"
                  >
                    _WEB
                  </motion.span>

                  <motion.span
                    {...anim(rainbow, 2)}
                    className="bg-[linear-gradient(to_right,#EF4444,#FB923C,#EAB308,#22C55E,#38BDF8,#60A5FA,#C084FC,#EF4444,#FB923C,#EAB308,#22C55E,#38BDF8,#60A5FA,#C084FC)] bg-clip-text font-robotoMono text-4xl font-bold text-transparent [background-size:210%] sm:text-5xl lg:text-6xl xl:text-7xl"
                  >
                    DEVELOPER
                  </motion.span>
                </motion.span>
              </motion.p>

              <motion.div
                className="relative mt-8 after:absolute after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-[width] after:duration-300 hover:after:w-full sm:self-end"
                {...anim(opacity, 2)}
              >
                <Link href={'/about'} className="flex items-center gap-2 text-2xl">
                  About me
                  <ArrowIcon className="text-orange-500" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>
    </Stairs>
  );
}

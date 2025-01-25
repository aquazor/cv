import { motion } from 'framer-motion';
import { SKILLS } from '@/constants';
import { anim } from '@/utils/anim';
import Section from '@/components/Section';
import Stairs from '@/components/layouts/Stairs';

export default function About() {
  //   const header = {
  //     initial: {
  //       y: '-100%',
  //       opacity: 0,
  //     },
  //     enter: {
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         duration: 0.5,
  //       },
  //     },
  //     exit: {
  //       y: '100%',
  //       opacity: 0,
  //       transition: {
  //         delay: 0.15,
  //         duration: 0.5,
  //       },
  //     },
  //   };

  const card = {
    initial: {
      y: -50,
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
      y: 150,
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
    <Stairs>
      <Section className="grow bg-background">
        <div className="py-5 md:pt-12">
          <ul className="space-y-5 font-robotoMono">
            {SKILLS.map((row, i) => (
              <motion.li key={row.title} {...anim(card, i)}>
                <h5 className="bg-neutral-700 p-1 text-center font-robotoMono text-2xl font-bold lg:text-3xl">
                  {row.title}
                </h5>

                <div className="border border-neutral-700 bg-neutral-800 p-4 text-xl lg:text-2xl">
                  <ul className="flex flex-wrap gap-1 sm:gap-2">
                    {row.values.map((value, i) =>
                      value.accent ? (
                        <motion.li
                          key={i}
                          {...anim(mark, i)}
                          className="w-fit bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1 text-xl font-bold lg:text-2xl"
                        >
                          {value.name}
                        </motion.li>
                      ) : (
                        <li key={i} className="w-fit px-1 text-xl lg:text-2xl">
                          {value.name}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>
    </Stairs>
  );
}

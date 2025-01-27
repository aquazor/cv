import Link from 'next/link';
import { motion } from 'framer-motion';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { anim } from '@/utils/anim';
import useCurrentLocale from '@/hooks/useCurrentLocale';
import Section from '@/components/Section';
import Stairs from '@/components/layouts/Stairs';
import SkillsList from '@/components/SkillsList';

export default function About() {
  const {
    localeFile: { skills },
  } = useCurrentLocale();

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
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Stairs>
      <Section className="grow bg-background">
        <div className="flex flex-col py-5">
          <motion.div className="mb-3 sm:hidden" {...anim(opacity)}>
            <div className="flex justify-between">
              <Link
                href={'/about'}
                className="group relative flex items-center gap-1.5 after:absolute after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-[width] after:duration-300 hover:after:w-full"
              >
                <GoArrowLeft className="translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:text-orange-500" />
                {skills.goAbout}
              </Link>

              <Link
                href={'/experience'}
                className="group relative flex items-center gap-1.5 after:absolute after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {skills.goExp}
                <GoArrowRight className="-translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:text-orange-500" />
              </Link>
            </div>
          </motion.div>

          <SkillsList />
        </div>
      </Section>
    </Stairs>
  );
}

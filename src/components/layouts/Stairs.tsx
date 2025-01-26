import useCurrentLocale from '@/hooks/useCurrentLocale';
import { anim } from '@/utils/anim';
import { motion } from 'framer-motion';

export default function Stairs({ children }: { children: React.ReactNode }) {
  const {
    router: { pathname },
    localeFile: { pages },
  } = useCurrentLocale();
  const path = pages.find((page) => page.path === pathname)!.name;

  const stairs = {
    initial: {
      top: 0,
    },
    enter: (i: number) => ({
      top: '100%',
      transition: {
        duration: 0.6,
        delay: i * 0.05,
      },
    }),
    exit: (i: number) => ({
      top: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.05,
      },
    }),
  };

  const overlay = {
    initial: {
      opacity: 0.4,
    },
    enter: {
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0.4,
    },
  };

  const opacity = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      transition: {
        duration: 0.25,
        delay: 0.5,
      },
    },
    exit: {
      transition: {
        duration: 0.25,
        delay: 0.25,
      },
      opacity: 1,
    },
  };

  const mark = {
    initial: {
      backgroundImage: '',
      backgroundSize: '0%, 100%',
    },
    enter: {
      backgroundSize: '100%, 100%',
      backgroundImage: 'linear-gradient(to right, #f97316, #f97316)',
      transition: {
        duration: 0.3,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    exit: {
      backgroundImage: '',
      backgroundSize: '0%, 100%',
    },
  };

  const numberOfColumns = 5;

  return (
    <div className="relative flex grow flex-col">
      <motion.div
        {...anim(overlay)}
        className="pointer-events-none fixed inset-0 z-10 bg-background"
      />
      <div className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center">
        <motion.div className="pointer-events-none select-none" {...anim(opacity)}>
          <motion.span
            {...anim(mark)}
            className="block bg-no-repeat px-3 py-1.5 font-robotoMono text-2xl"
          >
            {path}
          </motion.span>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex min-h-screen">
        {[...Array(numberOfColumns)].map((_, i) => (
          <motion.div
            key={i}
            {...anim(stairs, numberOfColumns - i)}
            className="relative h-full w-full border-r-2 border-background bg-neutral-800 last:border-none"
          />
        ))}
      </div>
      {children}
    </div>
  );
}

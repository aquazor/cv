import { Variants } from 'framer-motion';

export const anim = <T extends Variants>(variants: T, custom?: number) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
    custom,
  };
};

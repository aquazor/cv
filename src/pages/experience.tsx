import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaSquareArrowUpRight } from 'react-icons/fa6';
import { anim } from '@/utils/anim';
import Section from '@/components/Section';
import Stairs from '@/components/layouts/Stairs';
import useCurrentLocale from '@/hooks/useCurrentLocale';
import PageNavigation from '@/components/PageNavigation';

export default function Experience() {
  const {
    localeFile: { experience },
  } = useCurrentLocale();

  const projects = experience.projects;

  const header = {
    initial: { y: -50, opacity: 0 },
    enter: { y: 0, opacity: 1, transition: { duration: 0.75 } },
    exit: { y: 150, opacity: 0, transition: { duration: 1 } },
  };

  const card = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.75, delay: 0.5 } },
    exit: { y: 150, opacity: 0, transition: { duration: 1 } },
  };

  const mark = {
    initial: { opacity: 0, backgroundSize: '0%, 100%' },
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
    <>
      <Head>
        <title>{experience.metaTitle}</title>
      </Head>
      <Stairs>
        <Section className="grow bg-background">
          <div className="py-5">
            <motion.div className="mb-5" {...anim(opacity)}>
              <PageNavigation
                leftLinkProps={{ text: experience.goSkills, href: '/skills' }}
                rightLinkProps={{ text: experience.goHome, href: '/' }}
              />
            </motion.div>
            {projects.map((project, index) => (
              <ul key={index}>
                <li>
                  <motion.div {...anim(header)} className="flex items-center gap-2">
                    <h4 className="bg-neutral-700 p-1 font-robotoMono text-3xl font-bold md:text-4xl">
                      {project.companyName}
                    </h4>
                    <a href={project.companyLink} target="_blank">
                      <FaSquareArrowUpRight className="text-3xl" />
                    </a>
                  </motion.div>
                  <div className="pt-4 md:px-4">
                    <motion.div
                      {...anim(header)}
                      className="flex items-center justify-between gap-5"
                    >
                      <p className="font-robotoMono text-2xl font-bold md:text-3xl">
                        {project.role}
                      </p>
                      <span className="underline underline-offset-4">
                        {project.duration}
                      </span>
                    </motion.div>
                    <ul className="mt-2 flex flex-col gap-4 md:flex-row">
                      {project.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          {...anim(card, i)}
                          className="flex flex-1 gap-2 border border-neutral-700 bg-neutral-800 p-3 text-xl before:mt-2 before:block before:size-2 before:shrink-0 before:bg-orange-500 xl:text-2xl"
                        >
                          <div>
                            <p>{highlight.title}</p>

                            {highlight.description && (
                              <ul className="mt-2 space-y-1">
                                {highlight.description.map((desc, j) => (
                                  <li
                                    key={j}
                                    className="flex gap-2 before:mt-2 before:block before:size-1.5 before:shrink-0 before:bg-orange-500"
                                  >
                                    {desc}
                                  </li>
                                ))}
                              </ul>
                            )}

                            <span className="inline-flex flex-wrap gap-1.5 font-robotoMono text-sm font-bold">
                              {highlight.technologies.map((tech, k) => (
                                <motion.span
                                  key={k}
                                  {...anim(mark, k)}
                                  className="bg-[linear-gradient(to_right,#f97316,#f97316)] bg-no-repeat px-1"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </Section>
      </Stairs>
    </>
  );
}

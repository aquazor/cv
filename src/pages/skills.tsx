import Section from '@/components/Section';
import Stairs from '@/components/layouts/Stairs';
import SkillsList from '@/components/SkillsList';

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

  return (
    <Stairs>
      <Section className="grow bg-background">
        <div className="py-5 md:pt-12">
          <SkillsList />
        </div>
      </Section>
    </Stairs>
  );
}

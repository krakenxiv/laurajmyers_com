import Link from 'next/link';
import styles from './professional-voice-instruction.module.scss';

export const metadata = {
  title:
    'Laura Myers | Portland, OR | Private Voice Instruction + Lessons &mdash; Laura Myers 971-275-3557',
  description:
    'Laura Myers has taught private instruction in PDX, OR for almost 10 years. She specializes in improved vocal control, first time students, reduced stage fright.',
};

export default function ProfessionalVoiceInstruction() {
  return (
    <>
      <h1>Private voice lessons and instruction</h1>
      <h2>
        Become a better singer now! Improve voice control and manage your
        butterflies!
      </h2>
      <div>
        <p>
          I provide training in vocal and performance technique to people of all
          levels of ability in the Portland, Oregon area. I bring over 20 years
          of experience to you with lessons tailored to each students needs. We
          will work together to improve technique and remove stumbling blocks.
          And don&apos;t worry, lessons are fun!
        </p>
        <p>
          Performance anxiety, pitch control, breath control, increased stamina
          and range are all areas which I cover.
        </p>
        <p>Call or contact me for rates and availability.</p>
        <p>
          References available upon request. Reduced price with the purchase of
          a series.
        </p>
        <p>
          Laura
          <br />
          <Link href="mailto:getvocalnow@gmail.com?subject=Inquiry%20from%20Laurajmyers.com"></Link>{' '}
          getvocalnow@gmail.com{' '}
          <Link href="tel:971-275-3557">(971) 275-3557</Link>
        </p>
      </div>
    </>
  );
}

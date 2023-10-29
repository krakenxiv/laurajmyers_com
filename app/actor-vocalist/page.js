import globalStyles from '../scss/_global.module.scss';
import styles from './actor-vocalist.module.scss';

export const metadata = {
  title:
    'Laura Myers | Acting + Singing + Voice Over | Portland, OR &mdash; Laura Myers 971-275-3557',
  description:
    'Laura Myers has been acting and singing onstage for over 20 years. An experienced vocalist, she has appeared on tv, radio, and stages in SF, LA, and PDX, OR.',
};

export default function ActorVocalist() {
  return (
    <>
      <h1>Acting, improv, and singing for over 2 decades</h1>
      <h2>
        Learn how to overcome your fears in a friendly reassuring environment.
      </h2>
      <div>
        <p>Laura has extensive experience on stage and on television.</p>
      </div>
      <img
        src="/assets/images/hs_1.jpg"
        className={globalStyles.imageCentered}
      />
      <img
        src="/assets/images/hs_2.jpg"
        className={globalStyles.imageCentered}
      />
      <img
        src="/assets/images/hs_3.jpg"
        className={globalStyles.imageCentered}
      />
      <img
        src="/assets/images/hs_4.jpg"
        className={globalStyles.imageCentered}
      />
    </>
  );
}

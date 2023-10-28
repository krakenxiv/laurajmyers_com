import Link from 'next/link';
import styles from './contact-us.module.scss';

export const metadata = {
  title:
    'Laura Myers | Contact Me | Schedule Voice Lessons + Instructio &mdash; Laura Myers 971-275-3557',
  description:
    'Contact Laura Myers today to schedule private voice lessons, for a quote, or to contact her about appearing in your current productions.',
};

export default function ContactUs() {
  return (
    <>
      <h1>Contact Laura Myers</h1>
      <h2>Schedule an appointment or ask a question.</h2>
      <div className={styles.contactForm}>
        <p>
          Please contact me via this form, emailing me at{' '}
          <Link href="mailto:getvocalnow@gmail.com?subject=Inquiry%20from%20Laurajmyers.com">
            getvocalnow@gmail.com
          </Link>{' '}
          or by calling me at{' '}
          <Link href="tel:971-275-3557">(971) 275-3557</Link>.
        </p>
        <form
          name="contact"
          method="POST"
          netlify
          data-netlify="true"
          action="/form-success"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="yourname">First Name:</label>
            <input type="text" name="firstname" id="firstname" />
            <label htmlFor="yourname">Last Name:</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div>
            <label htmlFor="youremail">Your Email:</label>
            <input type="email" name="email" id="youremail" />
          </div>
          <div>
            <label htmlFor="yourmessage">Message:</label>
            <textarea name="message" id="yourmessage"></textarea>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}

"use client";

import { useState } from 'react';
import { redirect } from 'next/navigation'
import Link from 'next/link';
import globalStyles from '../scss/_global.module.scss';
import styles from './contact-us.module.scss';

export default function ContactUs() {

  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  let redirectPath = null

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setStatus('pending');
      setError(null);
      const contactForm = event.target;
      const formData = new FormData(contactForm);
      const res = await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
      });
      if (res.status === 200) {
        setStatus('ok');
        redirectPath = `/form-success`
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }finally {
      if (redirectPath  === '/form-success') {
        redirect(redirectPath);
      }
    }
  };
  return (
    <>
      <h1>Contact Laura Myers</h1>
      <h2>Schedule an appointment or ask a question.</h2>
      <div className={styles.contactFormContainer}>
        <p>
          Please contact me via this form, emailing me at{' '}
          <Link href="mailto:getvocalnow@gmail.com?subject=Inquiry%20from%20Laurajmyers.com">
            getvocalnow@gmail.com
          </Link>{' '}
          or by calling me at{' '}
          <Link href="tel:971-275-3557">(971) 275-3557</Link>.
        </p>


        <form name="contact" onSubmit={handleFormSubmit} action="/form-success" className={styles.contactForm}>
          <input type="hidden" name="form-name" value="contact" />
          {status === 'error' && ( 
            <div className={styles.error}>
              <p>There was an error submitting this form. Please contact me by phone or email.</p>
              <p>Error: {error}</p>
            </div>
          )}
          <div className={styles.subjectHeadr}>
            Name <span className={styles.required}>(required)</span>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column50} ${styles.column50}`}>
              <label htmlFor="yourname">First Name:</label>
              <input type="text" name="firstname" id="firstname" required />
            </div>
            <div className={`${globalStyles.column50} ${styles.column50}`}>
              <label htmlFor="yourname">Last Name:</label>
              <input type="text" name="lastname" id="lastname" required />
            </div>
          </div>
          <div className={styles.subjectHeadr}>
            Subject <span className={styles.required}>(required)</span>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={`${globalStyles.column100} ${styles.checkboxes}`}>
              <div className={styles.checkbox}>
                <input type="checkbox" id="singing" name="singing" />
                <label htmlFor="singing">Singing</label>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" id="publicSpeaking" name="publicSpeaking" />
                <label htmlFor="publicSpeaking">Public Speaking</label>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" id="acting" name="acting" />
                <label htmlFor="acting">Acting</label>
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" id="other" name="other" />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className={styles.subjectHeadr}>
            Email <span className={styles.required}>(required)</span>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={globalStyles.column100}>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div className={styles.subjectHeadr}>Phone</div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={globalStyles.column100}>
              <label htmlFor="phone">Phone Number</label>
              <input type="phone" name="phone" id="phone" />
            </div>
          </div>
          <div className={styles.subjectHeadr}>
            Additional Information{' '}
            <span className={styles.required}>(required)</span>
          </div>
          <div className={`${globalStyles.row} ${styles.row}`}>
            <div className={globalStyles.column100}>
              <label htmlFor="yourmessage">How can I help you? </label>
              <textarea name="message" id="yourmessage" required></textarea>
            </div>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}



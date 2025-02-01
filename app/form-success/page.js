import styles from './form-success.module.scss';
import { redirect } from 'next/navigation';

export default function FormSuccess() {
  // redirect while business is closed.
  redirect(`/`);
  // return (
  //   <>
  //     <h1>Contact information received!</h1>
  //     <h1>I will contact you shortly. Thank you!</h1>
  //   </>
  // );
}

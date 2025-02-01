'use client';
import Link from 'next/link';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const currentRoute = usePathname();
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.headerHomeLink}>
        <span>Laura Myers</span>
        {/* <span>971-275-3557</span> */}
      </Link>
      {/* <nav>
        <Link
          href="/"
          className={
            currentRoute === '/' ? styles.activeLink : styles.nonactiveLink
          }
        >
          Home
        </Link>
        <Link
          href="/professional-voice-instruction"
          className={
            currentRoute === '/professional-voice-instruction'
              ? styles.activeLink
              : styles.nonactiveLink
          }
        >
          Professional Voice Instruction
        </Link>
        <Link
          href="/stage-fright"
          className={
            currentRoute === '/stage-fright'
              ? styles.activeLink
              : styles.nonactiveLink
          }
        >
          Stage Fright
        </Link>
        <Link
          href="/public-speaking"
          className={
            currentRoute === '/public-speaking'
              ? styles.activeLink
              : styles.nonactiveLink
          }
        >
          Public Speaking
        </Link>
        <Link
          href="/actor-vocalist"
          className={
            currentRoute === '/actor-vocalist'
              ? styles.activeLink
              : styles.nonactiveLink
          }
        >
          Actor/Vocalist
        </Link>
        <Link
          href="/resume"
          className={
            currentRoute === '/resume'
              ? styles.activeLink
              : styles.nonactiveLink
          }
        >
          Resume
        </Link>
        <Link
          href="/contact-us"
          className={
            currentRoute === '/contact-us'
              ? styles.headerContactActive
              : styles.headerContactNonactive
          }
        >
          Contact Us
        </Link>
      </nav> */}
    </header>
  );
};

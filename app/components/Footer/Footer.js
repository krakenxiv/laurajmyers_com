import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Laura Myers All Rights Reserved. <span className={styles.version}>Version 1.2.122124.</span></span>
    </footer>
  );
};

import { Playpen_Sans, Josefin_Sans } from 'next/font/google';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import './layout.scss';

export const playpen = Playpen_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const josefinSans = Josefin_Sans({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Laura Myers 971-275-3557',
  description:
    "Laura Myers is a professional voice instructor and actor in Portland, OR. Laura's talents include acting, singing, voice over work, comedic acting, and improv.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

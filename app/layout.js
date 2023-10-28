import { Inter } from "next/font/google";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Laura Myers 971-275-3557",
  description:
    "Laura Myers is a professional voice instructor and actor in Portland, OR. Laura's talents include acting, singing, voice over work, comedic acting, and improv.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

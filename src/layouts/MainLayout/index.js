import Head from "next/head";

import styles from "./index.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const navs = [
  {
    href: "/",
    label: "Home",
    iconText: "bi bi-house-fill",
  },
  {
    href: "/works",
    label: "Works",
    iconText: "bi bi-code-slash",
  },
  {
    href: "/notes",
    label: "Notes",
    iconText: "bi bi-journal-text",
  },
];

const footerLinks = [
  {
    link: "https://www.linkedin.com/in/chi-wai-chan-ba5870137/",
    iconText: "bi bi-linkedin",
  },
  {
    link: "https://github.com/chanchiwai-ray",
    iconText: "bi bi-github",
  },
  {
    link: "mailto:chanchiwai@g.ecc.u-tokyo.ac.jp",
    iconText: "bi bi-envelope-fill",
  },
];

export default function MainLayout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header navs={navs} />
      <main>{children}</main>
      <Footer links={footerLinks} />
    </div>
  );
}

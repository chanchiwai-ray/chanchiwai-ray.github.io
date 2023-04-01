import Link from "next/link";

import styles from "./index.module.css";

export default function Header({ navs }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link href="/" id="/" className="navbar-brand" aria-current="page">
          <span> Chi Wai CHAN</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-align-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navs && navs.length > 1
              ? navs.map((nav, idx) => (
                  <li key={idx} className="nav-item">
                    <Link href={nav.href} id={nav.href} className="nav-link" aria-current="page">
                      <span className={nav.iconText}> {nav.label}</span>
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

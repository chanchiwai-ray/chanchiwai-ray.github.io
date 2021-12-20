import Link from "next/link";

import styles from "./index.module.css";

export default function Breadcrumb({ history, ...props }) {
  return (
    <nav aria-label="breadcrumb" className={`${styles.container}`}>
      <ol className={`${styles.breadcrumb} breadcrumb`}>
        <li className="breadcrumb-item">
          <i
            className="bi bi-list"
            data-bs-toggle="collapse"
            data-bs-target={props.dataBsTarget}
            role="button"
          ></i>
        </li>
        {history
          ? history.map((path, key) => (
              <Link key={key} href={key !== history.length - 1 ? path : "#"}>
                <li className="breadcrumb-item">
                  <span
                    className={`${styles.breadcrumbItem} ${
                      key === history.length - 1 ? styles.breadcrumbActiveItem : ""
                    }`}
                  >
                    {path
                      .split("/")
                      .slice(-1)[0]
                      .replace(/[0-9\-\_]/g, " ")}
                  </span>
                </li>
              </Link>
            ))
          : null}
      </ol>
    </nav>
  );
}

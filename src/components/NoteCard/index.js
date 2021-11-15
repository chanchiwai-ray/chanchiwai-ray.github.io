import Link from "next/link";

import styles from "./index.module.css";

export default function NoteCard({ title, subtitle, description, href }) {
  return (
    <Link href={href || "#"}>
      <div className={`card ${styles.card}`}>
        <div className="card-body">
          <h5 className="card-title">{title.replace(/[\-\_]/g, " ")}</h5>
          {subtitle ? (
            <p
              className="card-subtitle mb-2 fw-light text-muted"
              style={{ fontSize: "0.9rem" }}
            >
              {subtitle}
            </p>
          ) : null}
          <p className="card-text">{description}</p>
        </div>
      </div>
    </Link>
  );
}

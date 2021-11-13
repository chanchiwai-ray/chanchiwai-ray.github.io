import styles from "./index.module.css";

export default function ListItem({
  title,
  subtitle,
  date,
  location,
  description,
  bulletPoints,
}) {
  const id = title.replaceAll(" ");
  return (
    <div className="mb-3">
      <div
        className={`${styles.header} row bg-info m-0`}
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
      >
        <div className="col-lg-6">
          <span className="fs-lg-5 fw-bold">{title}</span>
        </div>
        <div className="col-lg-6 text-lg-end">
          <span className="fs-lg-5 fw-bold">{date}</span>
        </div>
        <div className="col-lg-6">
          <span className="d-none d-lg-block">{subtitle}</span>
        </div>
        <div className="col-lg-6 text-lg-end">
          <span className="d-none d-lg-block">{location}</span>
        </div>
      </div>
      <div className={`${styles.body} show`} id={id}>
        {description ? <p className="fst-italic">{description}</p> : null}
        {bulletPoints && bulletPoints.length > 0 ? (
          <ul className={styles.bulletPoints}>
            {bulletPoints.map((point, idx) => (
              <li key={idx}>
                <span className={styles.bulletPointText}>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

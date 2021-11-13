import styles from "./index.module.css";

export default function ProjectCard({
  image,
  title,
  subtitle,
  description,
  href,
  hrefLabel,
}) {
  return (
    <div className={`card ${styles.card}`}>
      {image ? (
        <div className={`${styles.cardImageContainer}`}>
          <img src={image} className={`${styles.cardImage} rounded card-img-top`} />
        </div>
      ) : null}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {subtitle ? (
          <p
            className="card-subtitle mb-2 fw-light text-muted"
            style={{ fontSize: "0.9rem" }}
          >
            {subtitle}
          </p>
        ) : null}
        <p className="card-text">{description}</p>
        <a href={href || "#"} className="btn btn-dark">
          {hrefLabel}
        </a>
      </div>
    </div>
  );
}

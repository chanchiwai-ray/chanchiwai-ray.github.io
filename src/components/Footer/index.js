import styles from "./index.module.css";

export default function Footer({ links }) {
  return (
    <footer className={`${styles.footer}`}>
      <ul className="d-flex justify-content-center p-0 m-2">
        {links && links.length > 1
          ? links.map((link, idx) => (
              <li key={idx} className={`${styles["icon-li"]}`}>
                <a href={link.link}>
                  <span className={`${styles.icon} ${link.iconText}`}></span>
                </a>
              </li>
            ))
          : null}
      </ul>
      <div className="text-center m-2">
        <span className="d-block text-muted">
          © Chi Wai CHAN, 2021. All right reserved.
        </span>
      </div>
    </footer>
  );
}

import Link from "next/link";

import styles from "./index.module.css";

export default function Sidebar({ navItems, state, activePageId }) {
  // Each item should contains: id, href, label
  const addNavItem = (item, key) => {
    return (
      <Link key={key} href={item.href}>
        <div
          className={`${styles.link} ${
            item.id === activePageId ? styles.linkFocus : ""
          }`}
        >
          <span className={`${styles.linkText}`}>
            <i className="bi bi-caret-right"></i>
            {item.label}
          </span>
        </div>
      </Link>
    );
  };

  return (
    <div className={`${styles.container}`}>
      {!navItems ? null : navItems.map((item, key) => addNavItem(item, key))}
    </div>
  );
}

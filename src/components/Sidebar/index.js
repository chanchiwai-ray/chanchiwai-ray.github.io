import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./index.module.css";

//className={`${styles.link} ${item.label === activePageID ? styles.linkFocus : ""}`}
export default function Sidebar({ navItems, state, activePageID }) {
  const addNavItem = (item, key) => (
    <Link key={key} href={item.href}>
      <div
        className={`${styles.link} ${
          item.label === activePageID ? styles.linkFocus : ""
        }`}
      >
        <span className={`${styles.linkText} d-none d-lg-block`}>
          <i
            className={`${
              item.label === activePageID
                ? "bi bi-caret-down-fill"
                : "bi bi-caret-right"
            }`}
          ></i>
          {item.label}
        </span>
      </div>
    </Link>
  );

  return (
    <div in={state} className={styles.container}>
      {!navItems ? null : navItems.map((item, key) => addNavItem(item, key))}
    </div>
  );
}

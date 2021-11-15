import Head from "next/head";
import Link from "next/link";

import styles from "./index.module.css";
import Sidebar from "../../components/Sidebar";

export default function NoteLayout({ sideNavs, data, paths }) {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-12">
          <nav aria-label="breadcrumb" className={`${styles.subNav}`}>
            <ol className={`${styles.subNavList} breadcrumb`}>
              <Link href="/notes">
                <li className="breadcrumb-item">Home</li>
              </Link>
              {paths
                ? paths.map((path, key) => (
                    <Link
                      key={key}
                      href={`/notes/${paths.slice(0, key + 1).join("/")}`}
                    >
                      <li className="breadcrumb-item">
                        <span className={`${styles.navText}`}>
                          {path.replace(/[0-9\-\_]/g, " ")}
                        </span>
                      </li>
                    </Link>
                  ))
                : null}
            </ol>
          </nav>
        </div>
        <div className="col-lg-2 d-none d-lg-block">
          <Sidebar navItems={sideNavs} state={true} activePageId={"Notes"} />
        </div>
        <div className="col-lg-10">
          <h1>{data.title}</h1>
          <p className="text-muted">{data.date}</p>
          <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
        </div>
      </div>
    </div>
  );
}

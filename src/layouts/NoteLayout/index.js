import Link from "next/link";

import styles from "./index.module.css";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumb";

export default function NoteLayout({ sidebarNavs, data, paths, activePageId }) {
  let history = paths.map((path, key) => paths.slice(0, key + 1).join("/"));
  history.splice(0, 0, ""); // insert one history at the beginning
  history = history.map((path) => `/notes${path ? "/" + path : ""}`);

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-12">
          <Breadcrumb history={history} dataBsTarget="#sidebar" />
        </div>
        <div className="col-lg-3 mb-3 mb-lg-0 show" id="sidebar">
          <Sidebar navItems={sidebarNavs} activePageId={activePageId} />
        </div>
        <div className="col">
          <h1>{data.title}</h1>
          <p className="text-muted">{data.date}</p>
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: data.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}

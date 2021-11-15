import { getAllNoteIds, getNoteData, getNoteFiles } from "../../lib/notes";
import MainLayout from "../../layouts/MainLayout";
import NoteLayout from "../../layouts/NoteLayout";

export default function Notes({ noteData, sidebarNavs, paths }) {
  return (
    <MainLayout>
      <NoteLayout
        data={noteData}
        sideNavs={sidebarNavs.map((nav) => ({
          ...nav,
          label: nav.name.replace(/\.md$/, "").replace(/[0-9_\-\/\\]/g, " "),
        }))}
        paths={paths}
      />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllNoteIds();
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const noteData = await getNoteData(params.id);
  const sidebarNavs = getNoteFiles(params.id.slice(0)[0]);
  console.log(sidebarNavs, "12");
  const paths = params.id;
  return {
    props: {
      paths,
      noteData,
      sidebarNavs,
    },
  };
}

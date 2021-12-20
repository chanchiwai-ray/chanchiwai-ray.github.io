import { getAllNoteIds, getNoteData, getNoteFiles } from "../../lib/notes";
import MainLayout from "../../layouts/MainLayout";
import NoteLayout from "../../layouts/NoteLayout";

export default function Notes({ paths, noteData, sidebarNavs, activePageId, param }) {
  return (
    <MainLayout>
      <NoteLayout
        data={noteData}
        paths={paths}
        sidebarNavs={sidebarNavs}
        activePageId={activePageId}
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
  const paths = params.id;
  const noteData = await getNoteData(params.id);
  const sidebarNavs = getNoteFiles(params.id.slice(0)[0]);
  const activePageId = params.id.join("");
  return {
    props: {
      paths,
      noteData,
      sidebarNavs,
      activePageId,
    },
  };
}

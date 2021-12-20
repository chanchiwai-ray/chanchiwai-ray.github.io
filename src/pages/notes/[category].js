import { getTopLevelNoteCategories, getNoteFiles } from "../../lib/notes";
import MainLayout from "../../layouts/MainLayout";
import NoteLayout from "../../layouts/NoteLayout";

export default function Notes({ paths, noteData, sidebarNavs }) {
  return (
    <MainLayout>
      <NoteLayout paths={paths} data={noteData} sidebarNavs={sidebarNavs} />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const categories = getTopLevelNoteCategories();
  const paths = categories.map((category) => {
    return {
      params: {
        category: category.name,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sidebarNavs = getNoteFiles(params.category);
  const paths = [[params.category]];
  const noteData = { title: "" };
  return {
    props: {
      paths,
      noteData,
      sidebarNavs,
    },
  };
}

import { getTopLevelNoteCategories, getNoteFiles } from "../../lib/notes";
import MainLayout from "../../layouts/MainLayout";
import NoteLayout from "../../layouts/NoteLayout";

export default function Notes({ noteData, sidebarNavs, paths }) {
  return (
    <MainLayout>
      <NoteLayout
        sideNavs={sidebarNavs.map((nav) => ({
          ...nav,
          label: nav.name.replace(/\.md$/, "").replace(/[0-9_\-\/\\]/g, " "),
        }))}
        data={noteData}
        paths={paths}
      />
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
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sidebarNavs = getNoteFiles(params.category);
  const paths = [params.category];
  const noteData = { title: "" };
  return {
    props: {
      paths,
      noteData,
      sidebarNavs,
    },
  };
}

import { getTopLevelNoteCategories } from "../../lib/notes";
import MainLayout from "../../layouts/MainLayout";
import NoteCard from "../../components/NoteCard";

export default function Notes({ categories }) {
  return (
    <MainLayout title="Works - Chi Wai CHAN">
      <div className="container">
        {categories.map((category, key) => (
          <NoteCard key={key} href={category.href} title={category.name} />
        ))}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const categories = getTopLevelNoteCategories();
  return {
    props: {
      categories,
    },
  };
}

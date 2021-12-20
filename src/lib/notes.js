import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import slug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import remarkToc from "remark-toc";
import rehypeMathjax from "rehype-mathjax";
import rehypeStringify from "rehype-stringify";

//
// These utility functions are expecting a 'notes' directory in the project's
// root directory. In the 'notes', there should be containing different
// categories of notes that are defined by the directory name. Under each
// category, there should be only markdown files (.md extension) and should not
// contain more directories. The structure is shown below:
//
//               notes
//                 |
//      -----------------------
//      |          |          |
//     dirA       ....       dirB
//      |         ....        |
// f1.md f2.md    ....   f1.md f2.md
//

const noteDirectory = path.join(process.cwd(), "notes");

// Recursively build up the relative path lists.
// Example:
// noteDirectory = /home/username/notes/
// /home/username/notes/dir1/f1.md
// /home/username/notes/dir1/f2.md
// /home/username/notes/dir2/f1.md
// /home/username/notes/dir2/subdir2/f2.md
// --> [ [dir1, f1], [dir1, f2], [dir2, f1], [dir2, subdir2, f2] ]
function readdirSyncRecursively(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  const pathLists = [];

  pathLists.push(
    ...files
      .filter((file) => !file.isDirectory())
      .map((f) => {
        const fullpath = path.join(directory, f.name.replace(/\.md$/, ""));
        const pathList = fullpath.replace(`${noteDirectory}/`, "").split("/");
        return pathList;
      })
  );

  files
    .filter((file) => file.isDirectory())
    .forEach((dir) => {
      pathLists.push(...readdirSyncRecursively(path.join(directory, dir.name)));
    });

  return pathLists;
}

export function getAllNoteIds(directory) {
  const pathLists = readdirSyncRecursively(path.join(noteDirectory, directory || ""));

  // Be careful with the output structure, also see:
  // https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
  return pathLists.map((pathList) => {
    return {
      params: {
        id: pathList,
      },
    };
  });
}

export async function getNoteData(id) {
  const fullpath = path.join(noteDirectory, id.join("/") + ".md");
  const fileContent = fs.readFileSync(fullpath, "utf8");

  const matterResult = matter(fileContent);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse, { fragment: true })
    .use(remarkToc, { tight: true, heading: "Table of Contents" })
    .use(remarkMath)
    .use(remarkRehype)
    .use(slug)
    .use(rehypeAutolinkHeadings)
    .use(remarkGfm)
    .use(rehypeMathjax)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = String(processedContent);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getTopLevelNoteCategories() {
  const files = fs.readdirSync(noteDirectory, { withFileTypes: true });
  return files
    .filter((file) => file.isDirectory())
    .map((dir) => ({ name: dir.name, href: `/notes/${dir.name}` }));
}

export function getNoteFiles(category) {
  const files = fs.readdirSync(path.join(noteDirectory, category), {
    withFileTypes: true,
  });
  return files
    .filter((file) => !file.isDirectory())
    .map((file) => {
      const filename = file.name.replace(/\.md$/, "");
      return {
        id: category + filename,
        filename: filename,
        href: `/notes/${category}/${filename}`,
        label: filename.replace(/[0-9_\-\/\\]/g, " ").trim(),
      };
    });
}

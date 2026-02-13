import { Authors, allAuthors } from "contentlayer/generated"
import { MDXLayoutRenderer } from "pliny/mdx-components"
import { coreContent } from "pliny/utils/contentlayer"

import { genPageMetadata } from "@/lib/seo"
import AuthorLayout from "./AuthorLayout"

export const metadata = genPageMetadata({ title: "About" })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === "default") as Authors
  const authorInfo = coreContent(author)

  return (
    <>
      <AuthorLayout content={authorInfo}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}

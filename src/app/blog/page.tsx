import { allBlogs } from "contentlayer/generated"
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer"

import { genPageMetadata } from "@/app/seo"
import siteMetadata from "@/data/siteMetadata"
import BlogLayout from "@/ui/layouts/BlogLayout"
import ListLayoutWithTags from "@/ui/layouts/ListLayoutWithTags"

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: "Blog" })

export default async function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages,
  }

  return (
    <BlogLayout>
      <ListLayoutWithTags
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
        siteMetadata={siteMetadata}
      />
    </BlogLayout>
  )
}

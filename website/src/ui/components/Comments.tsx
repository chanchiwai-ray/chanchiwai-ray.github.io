"use client"

import { Comments as CommentsComponent, CommentsConfig } from "pliny/comments"
import { useState } from "react"

export default function Comments({ slug, comments }: { slug: string; comments: CommentsConfig }) {
  const [loadComments, setLoadComments] = useState(false)

  if (!comments?.provider) {
    return null
  }

  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={comments} slug={slug} />
      ) : (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
    </>
  )
}

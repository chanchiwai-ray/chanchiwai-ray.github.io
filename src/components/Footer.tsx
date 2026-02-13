"use client"

import Link from "./Link"
import { Authors } from "contentlayer/generated"
import { useEffect, useState } from "react"

import { SocialIcon } from "@/components/SocialIcon"

interface Props {
  siteRepo: string
  content: Omit<Authors, "_id" | "_raw" | "body">
}

export default function Footer({ siteRepo, content }: Props) {
  const [year, setYear] = useState("")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="x" href={content.x?.link ? content.x.link : ""} />
          <SocialIcon kind="mail" href={`mailto:${content.email}`} />
          <SocialIcon kind="github" href={content.github?.link ? content.github.link : ""} />
          <SocialIcon kind="linkedin" href={content.linkedin?.link ? content.linkedin.link : ""} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{content.name}</div>
          <div>{` • `}</div>
          <div>{year && `© ${year}`}</div>
          <div>{` • `}</div>
          <Link href={siteRepo + "/issues"}>Report Issues</Link>
        </div>
      </div>
    </footer>
  )
}

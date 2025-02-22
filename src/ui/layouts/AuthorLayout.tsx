import type { Authors } from "contentlayer/generated"
import { ReactNode } from "react"

import Image from "@/ui/components/Image"
import { SocialIcon } from "@/ui/components/SocialIcon"

interface Props {
  children: ReactNode
  content: Omit<Authors, "_id" | "_raw" | "body">
}

export default function AuthorLayout({ children, content }: Props) {
  // info
  const name = content.name
  const avatar = content.avatar
  const company = content.company
  const occupation = content.occupation
  const location = content.location
  // social networks
  const x = content.x?.link || ""
  const email = `mailto:${content?.email || ""}`
  const github = content.github?.link || ""
  const linkedin = content.linkedin?.link || ""
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image src={avatar} alt="avatar" width={192} height={192} className="rounded-full" />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="text-gray-500 dark:text-gray-400">{location}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="x" href={x} />
              <SocialIcon kind="mail" href={email} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

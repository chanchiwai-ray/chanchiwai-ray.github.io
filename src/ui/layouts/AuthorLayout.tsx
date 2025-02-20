import type { Authors } from "contentlayer/generated"
import { ReactNode } from "react"

import projects from "@/data/projects"
import Image from "@/ui/components/Image"

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
  // all technologies
  const techs: Map<string, number> = new Map()
  for (const project of projects) {
    for (const t of project.technologies) {
      techs.set(t, (techs.get(t) || 0) + 1)
    }
  }

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
            <div className="py-3"></div>
            <div className="flex flex-row flex-wrap">
              {Array.from(techs).map((t) => (
                <div
                  key={t[0].replace(" ", "-")}
                  className="rounded-md shadow-md flex-grow p-0.5 m-1 border border-sky-500 dark:border-indigo-400/50 text-center text-gray-500 dark:text-gray-400 text-xs"
                >
                  {t[0]}
                </div>
              ))}
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

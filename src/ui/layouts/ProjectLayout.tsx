"use client"

import { useState } from "react"

import { Project } from "@/data/projects"
import Card from "@/ui/components/Card"

function Heading({ title }: { title: string }) {
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {title}
      </h1>
    </div>
  )
}

function SideBar({
  title,
  techs,
  currentTech,
  setTech,
}: {
  title: string
  techs: Map<string, number>
  currentTech: string
  setTech: (tech: string) => void
}) {
  const sortedTechs = Array.from(techs).sort((a, b) => b[1] - a[1])
  return (
    <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
      <div className="px-6 py-4">
        <button onClick={() => setTech("")}>
          {currentTech === "" ? (
            <h3 className="font-bold uppercase text-primary-500" onClick={() => setTech("")}>
              {title}
            </h3>
          ) : (
            <h3 className="font-bold uppercase" onClick={() => setTech("")}>
              {title}
            </h3>
          )}
        </button>
        <ul>
          {techs &&
            sortedTechs.map((t, i) => {
              return (
                <li key={i} className="my-1">
                  <button onClick={() => setTech(t[0])}>
                    {currentTech === t[0] ? (
                      <p
                        aria-label={`View projects techged with ${t[0]}`}
                        className="px-3 text-sm font-medium uppercase text-primary-500"
                      >
                        {`${t[0]} (${t[1]})`}
                      </p>
                    ) : (
                      <p
                        aria-label={`View projects techged with ${t[0]}`}
                        className="px-3 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                      >
                        {`${t[0]} (${t[1]})`}
                      </p>
                    )}
                  </button>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

function ListContent({
  projects,
  setTech,
}: {
  projects: Project[]
  setTech: (tech: string) => void
}) {
  return (
    <ul>
      {projects.map((p) => {
        return (
          <li key={p.name} className="pb-5">
            <Card
              title={p.name}
              description={p.description}
              image={p.image}
              link={p.link}
              technologies={p.technologies}
              setTech={setTech}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default function ProjectLayout({ projects }: { projects: Project[] }) {
  const [tech, setTech] = useState("")

  const filteredProjects = projects.filter((p) => {
    return p.technologies.includes(tech)
  })

  const techs: Map<string, number> = new Map()
  for (const project of projects) {
    for (const t of project.technologies) {
      techs.set(t, (techs.get(t) || 0) + 1)
    }
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <Heading title="Projects" />
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Projects
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <SideBar title="All techs" techs={techs} currentTech={tech} setTech={setTech} />
          <ListContent projects={tech ? filteredProjects : projects} setTech={setTech} />
        </div>
      </div>
    </div>
  )
}

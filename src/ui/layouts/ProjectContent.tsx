"use client"

import { useState } from "react"

import { Project } from "@/data/projects"
import Image from "@/ui/components/Image"
import Link from "@/ui/components/Link"

const PROJECTS_PER_PAGE = 3

function SideBar({
  title,
  techs,
  currentTech,
  setTech,
  setPage,
}: {
  title: string
  techs: Map<string, number>
  currentTech: string
  setTech: (tech: string) => void
  setPage: (page: number) => void
}) {
  const sortedTechs = Array.from(techs).sort((a, b) => b[1] - a[1])
  return (
    <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
      <div className="px-6 py-4">
        <button onClick={() => setTech("")}>
          {currentTech === "" ? (
            <h3
              className="font-bold uppercase text-primary-500"
              onClick={() => {
                setTech("")
                setPage(1)
              }}
            >
              {title}
            </h3>
          ) : (
            <h3
              className="font-bold uppercase"
              onClick={() => {
                setTech("")
                setPage(1)
              }}
            >
              {title}
            </h3>
          )}
        </button>
        <ul>
          {techs &&
            sortedTechs.map((t, i) => {
              return (
                <li key={i} className="my-1">
                  <button
                    onClick={() => {
                      setTech(t[0])
                      setPage(1)
                    }}
                  >
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

function Pagination({
  totalPages,
  currentPage,
  setPage,
}: {
  totalPages: number
  currentPage: number
  setPage: (page: number) => void
}) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        <button
          className="disabled:opacity-50"
          disabled={!prevPage}
          onClick={() => setPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          className="disabled:opacity-50"
          disabled={!nextPage}
          onClick={() => setPage(currentPage + 1)}
        >
          Next
        </button>
      </nav>
    </div>
  )
}

function Card({
  title,
  description,
  image,
  link,
  technologies,
  setTech,
  setPage,
}: {
  title: string
  description: string
  image: string
  link: string
  technologies: string[]
  setTech: (tech: string) => void
  setPage: (page: number) => void
}) {
  return (
    <div
      className={`${
        image && "h-full"
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {image &&
        (link ? (
          <Link href={link} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={image}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={image}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="text-2xl font-bold leading-8 tracking-tight">
          {link ? (
            <Link href={link} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div className="flex flex-wrap">
          {technologies?.map((tech: string) => (
            <button
              key={tech}
              onClick={() => {
                setTech(tech)
                setPage(1)
              }}
            >
              <p className="mr-3 pt-1 text-sm font-medium uppercase text-primary-500">
                {tech.split(" ").join("-")}
              </p>
            </button>
          ))}
        </div>
        <div className="prose my-3 max-w-none text-gray-500 hover:text-gray-400">{description}</div>
        {link && (
          <Link
            href={link}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  )
}
function ListContent({
  projects,
  totalPages,
  currentPage,
  setTech,
  setPage,
}: {
  projects: Project[]
  totalPages: number
  currentPage: number
  setTech: (tech: string) => void
  setPage: (page: number) => void
}) {
  return (
    <>
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
                setPage={setPage}
              />
            </li>
          )
        })}
        <Pagination totalPages={totalPages} currentPage={currentPage} setPage={setPage} />
      </ul>
    </>
  )
}

export default function ProjectContent({ projects }: { projects: Project[] }) {
  const [tech, setTech] = useState("")
  const [page, setPage] = useState(1)

  const filteredProjects = projects.filter((p) => {
    return p.technologies.includes(tech)
  })

  const techs: Map<string, number> = new Map()
  for (const project of projects) {
    for (const t of project.technologies) {
      techs.set(t, (techs.get(t) || 0) + 1)
    }
  }

  let totalPages: number = 0
  let displayProjects: Project[] = []
  if (tech === "") {
    totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
    displayProjects = projects.slice((page - 1) * PROJECTS_PER_PAGE, page * PROJECTS_PER_PAGE)
  } else {
    totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
    displayProjects = filteredProjects.slice(
      (page - 1) * PROJECTS_PER_PAGE,
      page * PROJECTS_PER_PAGE
    )
  }

  return (
    <>
      <SideBar
        title="All techs"
        techs={techs}
        currentTech={tech}
        setTech={setTech}
        setPage={setPage}
      />
      <ListContent
        projects={displayProjects}
        totalPages={totalPages}
        currentPage={page}
        setTech={setTech}
        setPage={setPage}
      />
    </>
  )
}

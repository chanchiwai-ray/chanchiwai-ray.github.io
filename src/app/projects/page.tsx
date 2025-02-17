import { genPageMetadata } from "@/app/seo"
import projects from "@/data/projects"
import ProjectLayout from "@/ui/layouts/ProjectLayout"

export const metadata = genPageMetadata({ title: "Projects" })

export default function Projects() {
  return <ProjectLayout projects={projects} />
}

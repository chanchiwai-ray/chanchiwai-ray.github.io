import { genPageMetadata } from "@/lib/seo"
import projects from "@/lib/projects"
import ProjectContent from "./ProjectContent"
import ProjectLayout from "./ProjectLayout"

export const metadata = genPageMetadata({ title: "Projects" })

export default function Projects() {
  return (
    <ProjectLayout>
      <ProjectContent projects={projects} />
    </ProjectLayout>
  )
}

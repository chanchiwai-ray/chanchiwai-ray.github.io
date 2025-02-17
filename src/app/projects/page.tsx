import { genPageMetadata } from "@/app/seo"
import projects from "@/data/projects"
import Card from "@/ui/components/Card"
import ProjectLayout from "@/ui/layouts/ProjectLayout"

export const metadata = genPageMetadata({ title: "Projects" })

export default function Projects() {
  return (
    <ProjectLayout>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projects.map((d) => (
            <Card
              key={d.name}
              title={d.name}
              description={d.description}
              imgSrc={d.image}
              href={d.link}
              technologies={d.technologies}
            />
          ))}
        </div>
      </div>
    </ProjectLayout>
  )
}

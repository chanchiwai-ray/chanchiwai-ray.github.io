import type { Blog } from "contentlayer/generated"
import { PlinyConfig } from "pliny/config"
import Bleed from "pliny/ui/Bleed"
import { CoreContent } from "pliny/utils/contentlayer"
import { ReactNode } from "react"

import Comments from "@/ui/components/Comments"
import Image from "@/ui/components/Image"
import Link from "@/ui/components/Link"
import PageTitle from "@/ui/components/PageTitle"
import ScrollTopAndComment from "@/ui/components/ScrollTopAndComment"
import SectionContainer from "@/ui/components/SectionContainer"

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  siteMetadata: PlinyConfig
}

export default function PostMinimal({ content, next, prev, children, siteMetadata }: LayoutProps) {
  const { slug, title, images } = content
  const displayImage =
    images && images.length > 0 ? images[0] : "https://picsum.photos/seed/picsum/800/400"

  return (
    <SectionContainer>
      <ScrollTopAndComment provider={siteMetadata.comments?.provider} />
      <article>
        <div>
          <div className="space-y-1 pb-10 text-center dark:border-gray-700">
            <div className="w-full">
              <Bleed>
                <div className="relative aspect-[2/1] w-full">
                  <Image src={displayImage} alt={title} fill className="object-cover" />
                </div>
              </Bleed>
            </div>
            <div className="relative pt-10">
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
          <div className="prose max-w-none py-4 dark:prose-invert">{children}</div>
          {siteMetadata.comments && (
            <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
              <Comments slug={slug} comments={siteMetadata.comments} />
            </div>
          )}
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              {prev && prev.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${prev.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </Link>
                </div>
              )}
              {next && next.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${next.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Next post: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}

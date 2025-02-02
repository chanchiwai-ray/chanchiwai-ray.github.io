import Link from "./Link"

import { SocialIcon, SocialIconProps } from "@/ui/components/SocialIcon"

export default function Footer({
  author,
  ListOfSocialIconProps,
}: {
  author: string
  ListOfSocialIconProps: SocialIconProps[]
}) {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          {ListOfSocialIconProps.map((socialIconProps, index) => {
            return (
              <SocialIcon
                key={index}
                kind={socialIconProps.kind}
                href={socialIconProps.href}
                size={socialIconProps.size}
              />
            )
          })}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="https://github.com/chanchiwai-ray/chanchiwai-ray.github.io">
            Report Issues
          </Link>
        </div>
      </div>
    </footer>
  )
}

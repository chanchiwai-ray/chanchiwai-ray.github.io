import Link from "./Link"
import MobileNav from "./MobileNav"
import SearchButton from "./SearchButton"
import ThemeSwitch from "./ThemeSwitch"

const Header = ({
  stickyNav,
  headerTitle,
  headerNavLinks,
  searchProvider,
}: {
  stickyNav: boolean
  headerTitle: string
  headerNavLinks: Record<string, string>[]
  searchProvider: string | undefined
}) => {
  let headerClass = "flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10"
  if (stickyNav) {
    headerClass += " sticky top-0 z-50"
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={headerTitle}>
        <div className="flex items-center justify-between">
          {typeof headerTitle === "string" ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">{headerTitle}</div>
          ) : (
            headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto pr-2 sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="m-1 block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton provider={searchProvider} />
        <ThemeSwitch />
        <MobileNav headerNavLinks={headerNavLinks} />
      </div>
    </header>
  )
}

export default Header

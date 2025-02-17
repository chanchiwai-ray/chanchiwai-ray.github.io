import Image from "./Image"
import Link from "./Link"

const Card = ({ title, description, image, link, technologies, setTech }) => {
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
            <button key={tech} onClick={() => setTech(tech)}>
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

export default Card

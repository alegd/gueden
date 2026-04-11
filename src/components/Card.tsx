import Image from './Image';
import { CustomLink as Link } from './Link';

const Card = ({ title, description, imgSrc, href }) => (
  <div className="p-4 md:w-1/2 max-w-[544px] md">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="md:h-36 lg:h-48 object-center object-cover"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="md:h-36 lg:h-48 object-center object-cover"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 font-medium text-2xl leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-3 max-w-none text-gray-500 dark:text-gray-400 prose">{description}</p>
        {href && (
          <Link
            href={href}
            className="font-medium text-base text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 leading-6"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default Card;

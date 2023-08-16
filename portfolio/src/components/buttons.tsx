import Link from 'next/link'

export function SectionButton({link, title, description}: {link: string, title: string, description:string}) {
  return (
    <Link
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-opacity-30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transform transition-transform hover:scale-105"
      // target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[24ch] text-sm opacity-50`}>
        {description}
      </p>
    </Link>
  )
}

export function ExternalButton({link, title, description}: {link: string, title: string, description:string}) {
  return (
    <a
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-opacity-30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transform transition-transform hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[24ch] text-sm opacity-50`}>
        {description}
      </p>
    </a>
  )
}



export function TextButton({pageUrl, title}: {pageUrl: string, title: string}) {
  return (
    <Link
      href={pageUrl}
      className="flex max-w-xl min-w-0 group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-opacity-30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transform transition-transform hover:scale-105"
      rel="noopener noreferrer"
    >
      <p className={`m-0 text-sm opacity-60`}>
        {title}
      </p>
    </Link>
  )
}

export function ExternalTextButton({pageUrl, title}: {pageUrl: string, title: string}) {
  return (
    <Link
      href={pageUrl}
      className="flex max-w-xl group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-opacity-30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transform transition-transform hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className={`m-0 text-sm opacity-60`}>
        {title}
      </p>
    </Link>
  )
}

export function PortfolioReturnButton({section}:{section:string}) {
  return <TextButton pageUrl={`/eportfolio#${section}`} title="&lt;- Return to ePortfolio to continue reading..." />
}
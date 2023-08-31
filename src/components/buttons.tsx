import Link from 'next/link'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { ArrowBack, LinkOutlined, AttachFileOutlined } from '@mui/icons-material'

export function SectionButton({link, title, description}: {link: string, title: string, description:string}) {
  return (
    <Link
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 
        transition-colors 
          hover:border-gray-300 hover:dark:border-neutral-700 
          hover:bg-gray-100/30 hover:dark:bg-gray-500/30 active:bg-gray-400/20 active:dark:bg-neutral-600/30
          hover:dark:bg-neutral-300/20 
        transition-all duration-300 ease-in-out
        transition-transform transform
          hover:scale-105 active:scale-100 
          hover:shadow-md"
      // target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <ArrowForward/>
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
      className="group rounded-lg border border-transparent px-5 py-4 
        transition-colors 
          hover:border-gray-300 hover:dark:border-neutral-700 
          hover:bg-gray-100/30 hover:dark:bg-gray-500/30 active:bg-gray-400/20 active:dark:bg-neutral-600/30
          hover:dark:bg-neutral-300/20 
        transition-all duration-300 ease-in-out
        transition-transform transform
          hover:scale-105 active:scale-100 
          hover:shadow-md"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <ArrowForward/>
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
      className="flex max-w-xl min-w-0 group rounded-lg 
        border 
          border-transparent p-4 
        transition-colors 
          hover:border-gray-300 hover:dark:border-neutral-700
          hover:bg-gray-100/30 hover:dark:bg-neutral-300/20 
        transform transition-transform 
          hover:scale-105 active:scale-100 
        transition-all duration-300 ease-in-out 
          hover:shadow-lg"
      rel="noopener noreferrer"
    >
      <p className={`m-0 text-sm opacity-70 dark:opacity-80`}>
        {title}
      </p>
    </Link>
  )
}

export function ExternalTextButton({pageUrl, title}: {pageUrl: string, title: string}) {
  return (
    <Link
      href={pageUrl}
      className="flex max-w-xl group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-opacity-30 hover:dark:border-neutral-700 hover:dark:bg-neutral-300/20 transform transition-transform hover:scale-105 active:scale-100 transition-all duration-300 ease-in-out hover:shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className={`m-0 text-sm opacity-60 dark:opacity-80`}>
        <LinkOutlined/> {title}
      </p>
    </Link>
  )
}


export function FileTextButton({pageUrl, title}: {pageUrl: string, title: string}) {
  return (
    <Link
      href={pageUrl}
      className="flex max-w-xl group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-opacity-30 hover:dark:border-neutral-700 hover:dark:bg-neutral-300/20 transform transition-transform hover:scale-105 active:scale-100 transition-all duration-300 ease-in-out hover:shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className={`m-0 text-sm opacity-60 dark:opacity-80`}>
        <AttachFileOutlined/> {title}
      </p>
    </Link>
  )
}

export function PortfolioReturnButton({section}:{section:string}) {
  return (
    <div className="py-12">
      <Link
        href={`/eportfolio#${section}`}
        className="flex max-w-xl group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-opacity-30 hover:dark:border-neutral-700 hover:dark:bg-neutral-300/20 transform transition-transform hover:scale-105 active:scale-100 transition-all duration-300 ease-in-out hover:shadow-lg"
        rel="noopener noreferrer"
      >
        <p className={`m-0 text-sm opacity-70 text-blue-700 dark:opacity-80`}>
          <ArrowBack/>&nbsp;Return to ePortfolio to continue reading...
        </p>
      </Link>
    </div>
  )
}

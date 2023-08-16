import Link from 'next/link'

export function Favicon() {
  return (
    <Link href="/#home" className="mr-auto scale-125 opacity-100 transform transition-transform hover:scale-150">
      <img src="/index/ZR-Logo.svg" alt="Home" className="h-6 w-6" />
    </Link>
  );
}

export function NavButton({ title, href }: {title: string;href: string;}) {
  return (
    <Link
      href={href}
      className="ml-4 px-3 py-2 rounded opacity-0  transition-all duration-300 ease-in-out group-hover:opacity-100 transition-transform group-hover:translate-y-1 hover:scale-105 hover:bg-gray-500 hover:bg-opacity-30"
    >
      {title}
    </Link>
  );
}

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full group bg-gradient-to-b from-white to-transparent transition-all hover:backdrop-blur duration-300 ease-in-out p-7">
      <div className="container mx-auto flex items-center justify-between">
        <Favicon/>

        <div className="flex items-center justify-end space-x-4">
          <NavButton title="About" href="/#about-me" />
          <NavButton title="Projects" href="/projects" />
          <NavButton title="ePortfolio" href="/eportfolio" />
          <NavButton title="Blogs" href="/blogs" />
          <NavButton title="Art" href="/art" />
          <NavButton title="Contacts" href="/#contacts" />
        </div>
      </div>
    </div>
  );
}


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




export function Footer() {
  return (
    <div className="w-full border-t py-4 h-16 bg-gray-100 ">
      <div className="text-center text-sm text-gray-600">
          <p>2023 &copy; Huaidian (Daniel) Hou all rights reserved.</p>
          <Link className="text-blue-600 underline" href="/acknowledgement">Acknowledgements</Link>
      </div>
    </div>
  );
}



export function Favicon({ href }: {href:string}) {
  return (
    <a href={href} className="mr-auto opacity-100">
      <img src="/index/ZR-Logo.svg" alt="Home" className="h-6 w-6" />
    </a>
  );
}

export function NavButton({ title, href }: {title: string;href: string;}) {
  return (
    <a 
      href={href}
      className="ml-4 px-3 py-2 rounded opacity-0 group-hover:opacity-100 hover:bg-gray-300 hover:bg-opacity-50 transform transition-transform hover:scale-105"
    >
      {title}
    </a>
  );
}
  

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full group bg-transparent hover:bg-opacity-90 hover:bg-gray-100 hover:bg-blend-soft-light border-b border-transparent hover:border-gray-400 transition-transform transform hover:-translate-y-1 p-5">
      <div className="container mx-auto flex items-center justify-between">
        <Favicon href="/" />

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
    <a
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-opacity-30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
    </a>
  )
}

export function ExternalButton({link, title, description}: {link: string, title: string, description:string}) {
  return (
    <a
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-opacity-30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
    <div className="w-full border-t py-2 h-4">
      <div className="text-center text-sm text-gray-600">
          2023 &copy; Huaidian Hou all rights reserved.
      </div>
    </div>
  );
}



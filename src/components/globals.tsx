import Link from 'next/link'

export function Favicon() {
  return (
    <Link href="/" className="mr-auto scale-125 opacity-100 transition-all duration-200 transform transition-transform group-hover:translate-y-1 hover:scale-150 active:scale-125">
      <img fetchPriority='high' src="/static/index/favicon.svg" alt="Home" className="h-6 w-6" />
    </Link>
  );
}

export function NavButton({ title, href }: {title: string;href: string;}) {
  return (
    <Link
      href={href}
      className="ml-4 px-3 py-2 rounded opacity-0
        transition-all duration-200 ease-in-out
          group-hover:opacity-100 
          hover:bg-gray-500/20 hover:dark:bg-neutral-200/20 active:bg-gray-600/30 active:dark:bg-neutral-400/40
        transition-transform 
          group-hover:translate-y-1 
          hover:scale-105 active:scale-100"
    >
      {title}
    </Link>
  );
}

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full group 
    bg-gradient-to-b from-white dark:from-gray-800 to-transparent
    transition-all hover:backdrop-blur
    duration-300 ease-in-out p-7">
      {/* hover:backdrop-blur */}
      <div className="container mx-auto flex items-center justify-between">
        <Favicon/>

        <div className="flex items-center justify-end space-x-4">
        <NavButton title="Home" href="/" />
          <NavButton title="About" href="/#about-me" />
          <NavButton title="Academics" href="/academics" />
          <NavButton title="Research" href="/research" />
          {/* <NavButton title="ePortfolio" href="/eportfolio" /> */}
          {/*<NavButton title="Blogs" href="/blogs" />*/}
          {/*<NavButton title="Art" href="/art" />*/}
          <NavButton title="Contacts" href="/#contacts" />
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="w-full border-t py-4 h-16 bg-gray-100 dark:bg-gray-800">
      <div className="text-center text-sm text-gray-600 dark:text-gray-100">
          <p>2023 &copy; Huaidian (Daniel) Hou all rights reserved.</p>

          <div className="flex flex-row gap-8 justify-center">
            <Link className="text-blue-600 dark:text-blue-300 underline" href="/acknowledgement">Acknowledgements</Link>
            <Link className="text-blue-600 dark:text-blue-300 underline" href="/use_component">Want to use my React components?</Link>
          </div>
      </div>
    </div>
  );
}


export function Credits({title, link, type}: {title: string, link: string, type: number}) {
  
}
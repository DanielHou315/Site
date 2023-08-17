import Image from 'next/image'
import { SectionButton, ExternalButton} from '@components/buttons'

export default function Home() {
  return (
    <main className="flex w-11/16 flex-col items-center justify-between">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      
      <div id="home" className="min-h-screen p-20">
        <div className="relative flex items-center space-y-8 flex-col lg:flex-row lg:space-y-0 justify-center py-16">

          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full"
            src="/index/Huaidian_Photo.jpg"
            alt="Huaidian Hou"
            width={220}
            height={220}
            priority
          />
        
          <p className="relative dark self-center px-16 font-shui text-5xl">
            Huaidian&nbsp;Daniel&nbsp;Hou
          </p>
        </div>

        <div className="mb-32 grid text-center justify-center md:max-w-5xl md:w-full md:mb-0 sm:grid-cols-2 md:text-left md:grid-cols-3 ">

          <SectionButton 
            title="About&nbsp;Me" 
            description="Find out everything about me in one minute!"
            link="/#about-me"
          />

          <SectionButton 
            title="Projects" 
            description="Browse my past projects."
            link="/projects"
          />

          <SectionButton 
            title="ePortfolio" 
            description="ePortfolio for U-M CoE Honors Program!"
            link="/eportfolio" 
          />

          <SectionButton 
            title="Blogs" 
            description="Explore my technical (and pseudo-technical) blogs."
            link="/blogs"
          />

          <SectionButton 
            title="Art" 
            description="See how I do random things in my free time!"
            link="/art"
          />

          <SectionButton 
            title="Contacts" 
            description="Connnect me on LinkedIn, Github, or via e-mail!"
            link="/#contacts"
          />
    
        </div>

      </div>



      <div id="about-me" className="h-screen border-t p-4">
        <h1
          className="self-center text-6xl font-shui text-center font-mono dark:text-white"
        >
          About&nbsp;Me
        </h1>

      </div>

      <div id="contacts" className="h-4/6 border-t p-4">
        <h1 className="self-center text-6xl font-shui text-center font-mono dark:text-white p-8">
          Contacts
        </h1>

        <div className="mb-32 grid text-center justify-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left space-x-4">

          <ExternalButton title="Github" description='Connect with me on Github' link='https://github.com/DanielHou315'/>
          <ExternalButton title="Linkedin" description='Connect with me on Linkedin' link='https://linkedin.com/in/huaidian-hou'/>
          <ExternalButton title="E-mail" description='Email me' link='mailto:houhd@umich.edu'/>
          
        </div>

      </div>
    </main>
  )
}

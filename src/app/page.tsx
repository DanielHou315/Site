import { SectionButton, ExternalButton} from '@components/buttons'
import { SkillCard } from '@/components/cards'
import Link from 'next/link'


const learningList: [string, string][] = [
  ["Robot Operating System (ROS)", "https://ros.org"],
  ["Qt", "https://qt.org"]
]


const experienceList: [string, string][] = [
  ["C/C++", "https://ros.org"],
  ["Qt", "https://qt.org"]
]




export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      
      <div id="home" className="min-h-screen">
        <div className="relative flex items-center space-y-8 flex-col lg:flex-row lg:space-y-0 justify-center py-16">

          <img
            fetchPriority='high'
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full"
            src="/static/index/Huaidian_Photo.jpg"
            alt="Huaidian Hou"
            width={220}
            height={220}
          />
        
          <p className="relative dark self-center px-16 font-shui text-5xl">
            Huaidian&nbsp;Daniel&nbsp;Hou
          </p>
        </div>

        <div className="mb-32 grid text-center justify-center md:mb-0 sm:grid-cols-2 sm:text-left md:grid-cols-3 ">

          <SectionButton 
            title="About&nbsp;Me" 
            description="Find out everything about me in one minute!"
            link="/#about-me"
          />
          <SectionButton 
            title="Academics" 
            description="See my Academic Record."
            link="/academics"
          />

          <SectionButton 
            title="Research" 
            description="Browse my current and past research/projects."
            link="/research"
          />

          <SectionButton 
            title="ePortfolio" 
            description="ePortfolio for U-M CoE Honors Program!"
            link="/eportfolio" 
          />
          
          {/* 
          <SectionButton 
            title="Blogs" 
            description="Explore my personal blogs!"
            link="/blogs"
          />
          */}
          
          {/* 
          <SectionButton 
            title="Art" 
            description="Read about my hobbies :)"
            link="/art"
          />
          */}

          <SectionButton 
            title="Contacts" 
            description="Connnect me on LinkedIn, Github, or via e-mail!"
            link="/#contacts"
          />
    
        </div>

      </div>



      <div id="about-me" className="min-h-screen border-t pt-28">
        <h1
          className="self-center text-6xl font-shui text-center font-mono"
        >
          About&nbsp;Me
        </h1>

        <div className="pt-12">
          <p>
            As a passionate computer scientist and creative artist, my passion focuses on sculpting intelligence for the benefit of our communities. My ultimate goal is to build intelligent, capable, helpful, and fair robots for our communities, and I continue to expand my toolboxes towards that goal. 
          </p>

          <div className="flex flex-row py-4 gap-8 justify-center">
            <Link href="/static/index/Huaidian_Hou_CV.pdf"><p className="text-blue-600 underline">Download CV (One-page)</p></Link>
          </div>


          <div>
            <h2 className="text-bold text-lg pt-12">My Toolbox: </h2>

            <div className="
              flex flex-col grid justify-center sm:grid-cols-2 md:grid-cols-3 gap-8 py-6">
              <SkillCard title="C++" iconFile="/static/index/icons/C++.svg"/>
              <SkillCard title="Python" iconFile="/static/index/icons/python.svg"/>
              <SkillCard title="Typescript" iconFile="/static/index/icons/typescript.svg"/>
              
              <SkillCard title="Django" iconFile="/static/index/icons/django.svg"/>
              <SkillCard title="Numpy" iconFile="/static/index/icons/numpy.svg"/>
              <SkillCard title="Next.js" iconFile="/static/index/icons/nextjs.svg"/>
              
              <SkillCard title="ROS" iconFile="/static/index/icons/ros.svg"/>
              <SkillCard title="Docker" iconFile="/static/index/icons/docker.svg"/>
              <SkillCard title="Linux Systems" iconFile="/static/index/icons/linux.svg"/>
            </div>


            <h2 className="pt-12 text-bold text-xl">I am Learning: </h2>

            <div className="flex flex-col grid justify-center sm:grid-cols-2 md:grid-cols-3 gap-8 py-6">
              <SkillCard title="PyTorch" iconFile="/static/index/icons/pytorch.svg"/>
              <SkillCard title="Hugging Face Transformers" iconFile="/static/index/icons/huggingface.svg"/>
              <SkillCard title="OpenCV" iconFile="/static/index/icons/opencv.svg"/>

              <SkillCard title="Convolutional Neural Nets" iconFile="/static/index/icons/machine-learning.svg"/>
              <SkillCard title="Reinforcement Learning" iconFile="/static/index/icons/machine-learning.svg"/>
              <SkillCard title="Robotic Manipulation" iconFile="/static/index/icons/machine-learning.svg"/>
            </div>

            <h2 className="pt-12 text-bold text-xl">My Artistic (Hobbyist) Tools: </h2>

            <div className="flex flex-col grid justify-center sm:grid-cols-2 md:grid-cols-3 gap-8 py-6">
              <SkillCard title="Adobe Premiere Pro" iconFile="/static/index/icons/adobe_pr.svg"/>
              <SkillCard title="Adobe Photoshop" iconFile="/static/index/icons/adobe_ps.svg"/>
              <SkillCard title="Adobe Illustrator" iconFile="/static/index/icons/adobe_ai.svg"/>
              <SkillCard title="Dassault SolidWorks" iconFile="/static/index/icons/solidworks.svg"/>
              <SkillCard title="Sketchup Pro" iconFile="/static/index/icons/sketchup.svg"/>
              <SkillCard title="Autodesk Fusion 360" iconFile="/static/index/icons/fusion.png"/>
              <SkillCard title="Lumion" iconFile="/static/index/icons/lumion.svg"/>
              <SkillCard title="PrusaSlicer" iconFile="/static/index/icons/prusa.png"/>
            </div>
          </div>
        </div>
      </div>

      <div id="contacts" className="border-t p-4">
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

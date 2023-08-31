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
          {/* 
          <SectionButton 
            title="Projects" 
            description="Browse my past projects."
            link="/projects"
          />
          */}

          <SectionButton 
            title="ePortfolio" 
            description="ePortfolio for U-M CoE Honors Program!"
            link="/eportfolio" 
          />
          
          {/* 
          <SectionButton 
            title="Blogs" 
            description="Explore my technical (and pseudo-technical) blogs."
            link="/blogs"
          />
          */}
          
          {/* 
          <SectionButton 
            title="Art" 
            description="See how I do random things in my free time!"
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

        <div className="p-4 pt-12">
          <p>
            As a passionate computer scientist and creative artistit, my passion focuses on sculpting intelligence for the benefit of our communities. My ultimate goal is to build intelligent, capable, helpful, and fair robots for our communities, and I continue to expand my toolboxes towards that goal. 
          </p>

          <div className="py-4 text-center">
            <Link href="/static/index/Huaidian_Hou_CV.pdf"><p className="text-blue-600 underline">Download CV</p></Link>
          </div>

          <div>

            <div className="">
              <h2 className="text-bold text-lg pt-12">My Toolbox: </h2>

              <div className="flex flex-col text-center">
                <div className="
                  grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
                  <SkillCard title="C++" iconFile="/static/index/icons/C++.svg"/>
                  <SkillCard title="Python" iconFile="/static/index/icons/python.svg"/>
                  <SkillCard title="Typescript" iconFile="/static/index/icons/typescript.svg"/>
                  <SkillCard title="Scikit-Learn" iconFile="/static/index/icons/sklearn.svg"/>
                  <SkillCard title="Numpy" iconFile="/static/index/icons/numpy.svg"/>
                  <SkillCard title="ROS" iconFile="/static/index/icons/ros.svg"/>
                  <SkillCard title="React.js" iconFile="/static/index/icons/react.svg"/>
                  <SkillCard title="Docker" iconFile="/static/index/icons/docker.svg"/>
                </div>

              </div>
            </div>


            <div className="pt-12">
              <h2 className="text-bold text-xl">I am Learning: </h2>

              <div className="flex flex-col text-center">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
                  <SkillCard title="ConvNets" iconFile="/static/index/icons/machine-learning.svg"/>
                  <SkillCard title="Reinforcement Learning" iconFile="/static/index/icons/machine-learning.svg"/>
                  <SkillCard title="Residual Networks" iconFile="/static/index/icons/machine-learning.svg"/>
                  <SkillCard title="Robotic Manipulation" iconFile="/static/index/icons/machine-learning.svg"/>
                  <SkillCard title="PyTorch" iconFile="/static/index/icons/pytorch.svg"/>
                  <SkillCard title="Hugging Face Transformers" iconFile="/static/index/icons/huggingface.svg"/>
                  <SkillCard title="OpenCV" iconFile="/static/index/icons/opencv.svg"/>
                </div>
              </div>
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

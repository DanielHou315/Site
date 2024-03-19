import { CourseCard, ProjectCard } from "@/components/cards"
import { H1Text } from "@/components/styling";

export default function WorkPage() {
  return (
    <div className="items-center justify-between min-h-screen pt-24">
      {/* <h1
        className="self-center text-6xl font-shui text-center dark:text-white border-b"
      >
        Work Experiences
      </h1> */}

      <H1Text text="Work Experiences" font="shui" />

      <div>
        <h3 className="text-xl font-bold text-center p-4 pt-8">Active Work Experiences</h3>

        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <ProjectCard title="EECS 376" description="Instructional Aide" imageUrl="/index/icons/eecs376.png" pageUrl="https://eecs376.org" year="2024" tag="Student Instructor"/>
          
          <ProjectCard title="U-M Shapiro Design Lab" description="Design Lab Intern" imageUrl="/index/icons/um_lib.png" pageUrl="https://www.lib.umich.edu/visit-and-study/creation-and-learning-spaces/shapiro-design-lab" year="2022-Present" tag="Student Intern"/>
          
        </div>
        
        <h3 className="text-xl font-bold text-center p-4">Past Work Experiences</h3>
        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <ProjectCard title="Minsheng Fintech Co. Ltd" description="Research Intern" imageUrl="/index/icons/minsheng.svg" pageUrl="http://en.cmbc.com.cn/" year="2023" tag="Research Intern"/>
          <ProjectCard title="Dreame Technologies" description="Algorithm Engineer Intern" imageUrl="/index/icons/dreame.png" pageUrl="https://www.dreametech.com/" year="2021" tag="Research Intern"/>
        </div>
      </div>
    </div>
  )
}
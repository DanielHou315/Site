import { CourseCard, ProjectCard } from "@/components/cards"

export default function WorkPage() {
  return (
    <div className="items-center justify-between min-h-screen pt-24">
      <h1
        className="self-center text-6xl font-shui text-center dark:text-white border-b"
      >
        Work Experiences
      </h1>

      <div>
        <h3 className="text-xl font-bold text-center p-4 pt-8">Active Work Experiences</h3>

        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <ProjectCard title="EECS 376" description="Instructional Aide" imageUrl="/static/index/icons/eecs376.png" pageUrl="https://eecs376.org" year="2024" tag="Student Instructor"/>
          
          <ProjectCard title="U-M Shapiro Design Lab" description="Design Lab Intern" imageUrl="/static/index/icons/um_lib.png" pageUrl="https://www.lib.umich.edu/visit-and-study/creation-and-learning-spaces/shapiro-design-lab" year="2022-Present" tag="Student Intern"/>
          
        </div>
        
        <h3 className="text-xl font-bold text-center p-4">Past Work Experiences</h3>
        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <ProjectCard title="Minsheng Fintech Co. Ltd" description="Research Intern" imageUrl="/static/index/icons/minsheng.svg" pageUrl="http://en.cmbc.com.cn/" year="2023" tag="Research Intern"/>
        </div>
      </div>
    </div>
  )
}
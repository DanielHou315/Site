import { CourseCard, ProjectCard } from "@/components/cards"

export default function WorkPage() {
  return (
    <div className="items-center justify-between min-h-screen pt-24">
      <h1
        className="self-center text-6xl font-shui text-center dark:text-white border-b"
      >
        Work Experiences
      </h1>

      <p className="py-8">
        Here is a list of my Work Experiences
      </p>

      <div>
        <h3 className="text-xl font-bold text-center p-4">Active Work Experiences</h3>

        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <ProjectCard title="Shapiro Design Lab" faculty="Design Lab Student Inern" imageUrl="/static/index/icons/eecs442.png" pageUrl=""/>
          
        </div>
        
        <h3 className="text-xl font-bold text-center p-4">Past Work Experiences</h3>
        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <CourseCard title="EECS 281" description="Data Structures and Algorithms" iconFile="/static/index/icons/C++.svg"/>
          <CourseCard title="EECS 301" description="Probabilistic Methods in Engineering" iconFile="/static/index/icons/eecs301.png"/>
          <CourseCard title="EECS 376" description="Foundations of Computer Science" iconFile="/static/index/icons/eecs376.png"/>
        </div>
      </div>
    </div>
  )
}
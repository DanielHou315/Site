import { CourseCard } from "@/components/cards"

export default function AcademicsPage() {
  return (
    <div className="min-h-screen items-center justify-between">
      <h1 className="self-center text-6xl font-shui text-center dark:text-white border-b p-8">
        Academics
      </h1>

      <div className="p-4">
        <h3 className="text-xl font-bold text-center pb-4">In a Nutshell</h3>
        <ul className="list-disc px-16">
          <li>Institution: University of Michigan, Ann Arbor, College of Engineering</li>
          <li>Major: Computer Science</li>
          <li>Minor: Mathematics</li>
          <li>GPA: 4.0/4.0</li>
          <li>Honors:</li>
          <ul className="list-disc px-4">
            <li>James B. Angell Scholar (2024)</li>
            <li>Engineering Honors Program (2023)</li>
            <li>Branstorm Freshman Prize (2023)</li>
            <li>Engineering Dean&apos;s List (2022-2023)</li>
          </ul>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-center p-4">Featured Courses</h3>

        <h3 className="text-large">2024 Winter (in progress)</h3>
        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <CourseCard title="EECS 442" description="Computer Vision" iconFile="/static/index/icons/eecs442.png"/>
          <CourseCard title="EECS 445" description="Machine Learning" iconFile="/static/index/icons/eecs445.png"/>
          <CourseCard title="EECS 501" description="Probability and Random Processes" iconFile="/static/index/icons/eecs301.png"/>
        </div>
        
        <h3 className="text-large">2023 Fall</h3>
        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <CourseCard title="EECS 281" description="Data Structures and Algorithms" iconFile="/static/index/icons/C++.svg"/>
          <CourseCard title="EECS 301" description="Probabilistic Methods in Engineering" iconFile="/static/index/icons/eecs301.png"/>
          <CourseCard title="EECS 376" description="Foundations of Computer Science" iconFile="/static/index/icons/eecs376.png"/>
          <CourseCard title="MATH 217" description="Linear Algebra" iconFile="/static/index/icons/math217.svg"/>
        </div>

        <h3 className="text-large">2023 Winter</h3>
        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <CourseCard title="EECS 280" description="Programming and Intro Data Structures" iconFile="/static/index/icons/C++.svg"/>
          <CourseCard title="EECS 203" description="Discrete Mathematics" iconFile="/static/index/icons/eecs203.png"/>
        </div>
      </div>
      
    </div>
  )
}
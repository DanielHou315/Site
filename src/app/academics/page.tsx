import { CourseCard } from "@/components/cards";
import { CenterText } from '@components/styling';
import { TextButton,SectionButton } from "@/components/buttons";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen items-center justify-between">
      <h1 className="self-center text-6xl font-shui text-center dark:text-white border-b p-8">
        Academics
      </h1>

      <h2 className="text-xl font-bold text-center p-4"> In a Nutshell </h2>
      <div className="items-center justify-center pb-36">
        <CenterText leftText="Institution" rightText="University of Michigan"/>
        <CenterText leftText="Major" rightText="Computer Science"/>
        <CenterText leftText="Department" rightText="College of Engineering"/>
        <CenterText leftText="Minor" rightText="Mathematics"/>
        <CenterText leftText="GPA (Major GPA)" rightText="4.0 (4.0)"/>
        <CenterText leftText="Honors" rightText="College of Engineering Honors Student (since 2023)"/>
        <CenterText leftText=" " rightText="James B. Angell Scholar (2024)"/>
        <CenterText leftText=" " rightText="Branstorm Freshman Prize (2023)"/>
        <CenterText leftText=" " rightText="Engineering Dean's List (2022-2023)"/>
      </div>
      

      <div>
        <h3 className="text-xl font-bold text-center p-4">Featured Courses</h3>

        <h3 className="text-large font-bold">2024 Winter Term (in progress)</h3>
        <div className="p-6">
          <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <CourseCard title="EECS 442" description="Computer Vision" iconFile="/index/icons/eecs442.png"/>
            <CourseCard title="EECS 445" description="Machine Learning" iconFile="/index/icons/eecs445.png"/>
            <CourseCard title="EECS 501" description="Probability and Random Processes" iconFile="/index/icons/eecs301.png"/>
          </div>
          <TextButton pageUrl="/research" title="I also do Research this semester!" />
        </div>
        
        <h3 className="text-large font-bold">2023 Fall Term</h3>
        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <CourseCard title="EECS 281" description="Data Structures and Algorithms" iconFile="/index/icons/C++.svg"/>
          <CourseCard title="EECS 301" description="Probabilistic Methods in Engineering" iconFile="/index/icons/eecs301.png"/>
          <CourseCard title="EECS 376" description="Foundations of Computer Science" iconFile="/index/icons/eecs376.png"/>
          <CourseCard title="MATH 217" description="Linear Algebra" iconFile="/index/icons/math217.svg"/>
        </div>

        <h3 className="text-large font-bold">2023 Winter Term</h3>
        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <CourseCard title="EECS 280" description="Programming and Intro Data Structures" iconFile="/index/icons/C++.svg"/>
          <CourseCard title="EECS 203" description="Discrete Mathematics" iconFile="/index/icons/eecs203.png"/>
        </div>

        <h3 className="text-large font-bold">2022 Fall Term</h3>
        <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          <CourseCard title="ENGR 100" description="Introduction to Engineering" iconFile="/index/icons/engr100.jpeg"/>
          <CourseCard title="DIGITAL 258" description="Humanities Themes in Digital Studies" iconFile="/index/icons/digital258.png"/>
        </div>
      </div>
      
    </div>
  )
}
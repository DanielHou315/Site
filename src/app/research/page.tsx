import { CourseCard, ProjectCard } from "@/components/cards"

export default function ResearchPage() {
  return (
    <div className="items-center justify-between min-h-screen pt-24">
      <h1
        className="self-center text-6xl font-shui text-center dark:text-white border-b"
      >
        Research & Projects
      </h1>

      <p className="py-8">
        Continuing on the path towards my goal of building intelligence for humanity while exploring the field of computer sience, I have worked/have been working on the following projects. 
      </p>


      {/* Active Research Projects */}
      <h3 className="text-xl font-bold text-center p-4">Active Research Projects</h3>

      <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-12 p-6">
        <ProjectCard title="Mu-RoAM" description="MDP Project with Prof. Shai Revzen" imageUrl="/static/post/research/muroam.png" pageUrl="/research/muroam" year="2023" tag="U-M"/>
        
        <ProjectCard title="LoG(M)" description="MATH 440 Lab of Geometry" imageUrl="/static/post/research/logm.gif" pageUrl="/research/logm" year="2023" tag="U-M"/>
      </div>
      


      {/* Past Research Projects */}
      <h3 className="text-xl font-bold text-center p-4">Past Research Projects</h3>

      <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        <ProjectCard title="SAGS" description="Spatial Audio Guidance System" imageUrl="/static/post/research/sags.jpeg" pageUrl="https://github.com/DanielHou315/Spatial-Audio-Guidance-System" year="2021" tag="Haverford"/>
        
        <ProjectCard title="OTune" description="VEX Robot Odometry Tuning Utility with VR Trackers" imageUrl="/static/post/research/otune.jpeg" pageUrl="https://github.com/DanielHou315/OTune" year="2022" tag="Haverford"/>
        
        <ProjectCard title="ELib" description="VEX Robot Motion Profiling and Conrol Library from Team 169E 2021-2022 Season" imageUrl="/static/post/research/elib.jpeg" pageUrl="https://github.com/DanielHou315/ELib" year="2022" tag="Haverford"/>

        <ProjectCard title="CNN Evacuation Parameter" description="Evacuation Parameter Prediction with ConvNets with Dr. Lingxiao Wang" imageUrl="/static/post/research/evacuation.jpeg" pageUrl="https://www.mdpi.com/1099-4300/24/2/198" year="2021" tag="FIAS"/>
      </div>


      {/* Hobbiest Projects */}
      {/* <h3 className="text-xl font-bold text-center p-4">Hobbies Projects</h3>

      <div className="flex flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        <ProjectCard title="QClap" description="QR-Code enabled Slateboard with Asset Management" imageUrl="/static/post/research/otune.jpeg" pageUrl="https://github.com/DanielHou315/OTune" year="2023" tag="U-M"/>
        
        <ProjectCard title="SFCalc" description="Significant Figure Calculator for U-M Chem 130" imageUrl="/static/post/research/sags.jpeg" pageUrl="https://github.com/DanielHou315/Spatial-Audio-Guidance-System" year="2023" tag="U-M"/>

        <ProjectCard title="Aalytics Reflector" description="Web Analytics Reflector for Digital 258 at U-M" imageUrl="/static/post/research/elib.jpeg" pageUrl="https://github.com/DanielHou315/ELib" year="2022" tag="U-M"/>

        <ProjectCard title="Hermes Crawler" description="VEX Robot Motion Profiling and Conrol Library from Team 169E 2021-2022 Season" imageUrl="/static/post/research/elib.jpeg" pageUrl="https://github.com/DanielHou315/ELib" year="2022" tag="Individual"/>
      </div> */}

    </div>
  )
}
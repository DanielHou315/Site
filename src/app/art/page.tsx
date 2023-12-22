import { ProjectCard } from "@/components/cards"

export default function ArtPage() {
  return (
    <div className="items-center justify-between min-h-screen pt-24">
      <h1 className="self-center text-6xl font-shui text-center dark:text-white border-b">
        Art
      </h1>

      <div>

        <p className="py-4">
        I have a wide variety of Intererests in the field of Digital Arts! This passion took off during my Arts Foundations class in high school, where I first had a capable laptop and having the pleasure of studying digital arts with Ms. Blatt. I was first introduced to digital modeling and was immediately attracted to it. Since then, my journey in digital art creation have begun. 
        </p>
        
        <p className="py-4">
        My connection with the arts had a long and expensive historic tie. Read here. 
        </p>

        <div>
          <p>Pieces</p>
          {/* <div className="grid md:grid-cols-2 gap-12 p-8">
            <ProjectCard title="Wings of Meditation" imageUrl="/static/index/Huaidian_Photo.jpg" pageUrl="/" />
            <ProjectCard title="300 SL" imageUrl="/static/index/Huaidian_Photo.jpg" pageUrl="/" />
            <ProjectCard title="Shui Font" imageUrl="/static/index/Huaidian_Photo.jpg" pageUrl="/" />
            <ProjectCard title="Infini-Loop" imageUrl="/static/index/Huaidian_Photo.jpg" pageUrl="/" />

            <ProjectCard title="The House" imageUrl="/static/index/Huaidian_Photo.jpg" pageUrl="/" />
            <ProjectCard title="Miniature Furniture" imageUrl="/static/index/Huaidian_Photo.jpg" pageUrl="/" />
            <ProjectCard title="The Mandawolverine" imageUrl="/static/index/Huaidian_Photo.jpg" pageUrl="/" />
            <ProjectCard title="3D Models" imageUrl="/static/index/Huaidian_Photo.jpg" pageUrl="/" />
            <ProjectCard title="Leader Cream" imageUrl="/static/index/Huaidian_Photo.jpg" pageUrl="/" />
          </div> */}
          
        </div>
      </div>
    </div>
  )
}
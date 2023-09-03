import { FileTextButton, PortfolioReturnButton, ExternalTextButton } from '@components/buttons'
import HeadphonesIcon from '@mui/icons-material/Headphones';

export default function RoadAheadPage() {
  return (
    <div className="flex flex-col pt-24">
      <h1
        className="self-center text-6xl font-shui text-center font-mono dark:text-white border-b"
      >
        The Road First Heard By<sup className="text-2xl">1</sup>
      </h1>
      <br></br>

      <div className="place-content-center">

        <div className="pb-4">
          <p><b>By: </b>Huaidian Hou</p>
          <p><b>Released:</b> Aug 16, 2023</p>
          <p><b>Last Edited:</b> Aug 30, 2023</p>
        </div>

        {/* <div className="rounded-lg bg-gray-200/40">
          <p className="p-2 text-xs opacity-70">Cover Image Source: <a href="https://developer.apple.com/videos/play/wwdc2021/10265/" className="underline"> Apple.com</a></p>
        </div> */}

        <p className="py-4 font-roboto">
          The outbreak of COVID-19 had profound effects on many of us, marking the first time I truly connected with news from America and deepening my compassion for those less fortunate. One day in sunny spring, as I ambled down a street thinking about a video game, the spatial sound signature of a passing car halted me. It felt weirdly similar to my gaming experiences: the spatial audio feature of the game allowed me to identify directions of the &ldquo;enemy&rdquo; objects, and so does sound in real world. An idea sparked: could I harness this digital technology in that game and reverse the output to make real-life navigation simpler for those who are unable to see the road ahead? This is the origin story of Spatial Audio Navigation System (SAGS). 
        </p>

        <p className="py-2 text-red-500"> <HeadphonesIcon/> Please wear headphone and listen to best experience this video demonstration!</p>

        <div className="grid-rows-1 video-responsive row-auto">
          <iframe 
            width="640" 
            height="360" 
            src="https://www.youtube.com/embed/5KMiXsBnYDU" 
            title="SAGS v1.1 Demonstration" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>

          <p className="text-xs py-2 opacity-60 italic"> 
            Video: Spatial Audio Navigation Device Demonstration and Explanation
          </p>
        </div>

        <p className="py-4 font-roboto">
          With this vision, I embarked on a research journey, meeting with visually impaired individuals to better grasp their needs. While we discussed the needs of the users and my proposed methods, we also evaluated a few devices on market that they experienced or were already using. After extensive assessment and conversation, we agreed that the core idea of Spatial Audio in combination with computer vision was a unique signature not found on any other product even from big corporates like Google or Facebook, and one that would greatly improve comfort and confident of the users.
        </p>

        <p className="py-4 font-roboto">
          Rest assured of the meanings and purpose, I dived into technical development for a SAGS prototupe. During development, I dived into the mechanics of object recognition. I soon integrated a real-time spatial audio generator, OpenAL, with object detection models, running locally in real time on an Nvidia Xavier NX developer board. This combination allowed users to perceive and respond to the movement of nearby cars and people through real-time auditory cues. After putting everything together, I was proud to demonstrate my first invention to selected few users.
        </p>


        <ExternalTextButton pageUrl="https://github.com/DanielHou315/Spatial-Audio-Guidance-System" title="See SAGS Source Code on Github"/>
        
        <p className="py-4 font-roboto">
          Testing the prototype on busy streets was eye-opening, but also exposed numerous problems. While the system initially aimed to filter out noises from multiple moving objects using a rule-based approach, the real world proved unpredictable. My risk-based scoring system was no match for the myriad scenarios on a bustling street. It became clear: to genuinely assist the visually impaired, I need to go beyond fixed rules.
        </p>

        <p className="py-4 font-roboto">
          Learning the technical challenges ahead, I also realize the valuable reflections gained from this experience. Every challenge I faced, every imperfection I uncovered, reinforced a deeper truth: engineering is not just about problem-solving, but about empathetic innovation. The street tests might not have gone perfectly, but they showed me how the world can be a better place with my contributions and affirmed my commitment to creating meaningful, inclusive technologies for those who need them most.
        </p>

        <div className="min-w-xl">  
          <FileTextButton pageUrl="/static/post/eportfolio/the-road-first-heard-by/SAGS_v1_Technical_Specification.pdf" title="Download SAGS v1 Technical Specification"/>
        </div>

      </div>

      <PortfolioReturnButton section="p2-card"/>
      
      {/* Credits Section */}
            
      <div id="credits" className="pt-8 border-t">
        <h3 className="text-lg font-bold text-center pb-4">Credits</h3>

        <p className="py-2 px-8">
          The title of this story and its content are inspired by or use resoures from these awesome sources: 
        </p>

        <div className="mb-32 flex-col place-content-center md:max-w-5xl md:w-full md:mb-0 px-4">
          <ExternalTextButton pageUrl="https://www.poetryfoundation.org/poems/44272/the-road-not-taken" title="1. The Road Not Taken"/>
          <ExternalTextButton pageUrl="https://developer.apple.com/videos/play/wwdc2021/10265/" title="2. Cover Image: Spatial Audio - Apple.com"/>
        </div>
      </div>

    </div>
  )
}
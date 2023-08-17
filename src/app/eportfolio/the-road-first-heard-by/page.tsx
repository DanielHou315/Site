import { ExternalTextButton, PortfolioReturnButton } from '@components/buttons'

export default function EPTemplate() {
  return (
    <div className="flex w-11/16 flex-col items-center justify-between">
      <div className="min-h-screen p-8 py-24">
        <h1
          className="self-center text-6xl font-shui text-center font-mono dark:text-white border-b"
        >
          The Road First Heard By
        </h1>
        <br></br>

        <div className="place-content-center max-w-3xl p-4">

          <div className="pb-4">
            <p><b>By: </b>Huaidian Hou</p>
            <p><b>Released:</b> Aug 16, 2023</p>
            <p><b>Last Edited:</b> Aug 16, 2023</p>
          </div>

          <div className="rounded-lg bg-gray-200/40">
            <p className="p-2 text-xs opacity-70">Cover Image Source: <a href="https://developer.apple.com/videos/play/wwdc2021/10265/" className="underline"> Apple.com</a></p>
          </div>

          <p className="py-4 font-roboto">
            The outbreak of COVID-19 had profound effects on many of us, marking the first time I truly connected with news from America and deepening my compassion for those less fortunate. One breezy day, as I ambled down a street lost in thoughts of a video game, the spatial sound of a passing car jolted me. It felt eerily similar to my gaming experience. An idea sparked: could I harness this digital technology in game to make real-life navigation simpler for the visually impaired?
          </p>

          <div className="grid-rows-1 video-responsive row-auto">
            <iframe 
              width="640" 
              height="360" 
              src="https://www.youtube.com/embed/5KMiXsBnYDU" 
              title="SAGS v1.1 Demonstration" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>

          <p className="py-4 font-roboto">
            With this vision, I embarked on a research journey, meeting with visually impaired individuals to better grasp their needs. Using my foundational knowledge from the &ldquo;Python for Everybody&rdquo; course at the University of Michigan, I dived into the mechanics of object recognition. I soon integrated a real-time spatial audio generator, OpenAL, with object detection models. This combination allowed me to perceive and respond to the movement of nearby cars and people through auditory cues.
          </p>
          
          <p className="py-4 font-roboto">
            Testing the prototype on busy streets was eye-opening. While the system initially aimed to filter out noises from multiple moving objects using a rule-based approach, the real world proved unpredictable. My risk-based scoring system was no match for the myriad scenarios on a bustling street. It became clear: to genuinely assist the visually impaired, I&apos;d need to go beyond set rules.
          </p>
          <p className="py-4 font-roboto">
            This journey, filled with both accomplishments and setbacks, has become a pivotal chapter in my story. Every challenge I faced, every imperfection I uncovered, reinforced a deeper truth: engineering is not just about problem-solving, but about empathetic innovation. It&apos;s about recognizing a need in society and using the tools at one&apos;s disposal to craft a solution. It&apos;s about the intertwined journey of self-discovery and societal betterment. The street tests might not have gone perfectly, but they reaffirmed my commitment to creating meaningful, inclusive technologies for those who need them most.
          </p>

          <div className="min-w-xl">  
            <ExternalTextButton pageUrl="/static/post/the-road-first-heard-by/SAGS_v1_Technical_Specification.pdf" title="Download SAGS v1 Technical Specification"/>
          </div>

        </div>

        <PortfolioReturnButton section="p2-card"/>


        
        
      </div>
    </div>
  )
}
import { ArticleCard } from "@components/cards"
import { ExternalTextButton } from '@components/buttons'

export default function EPortfolio() {
  return (
      <div className="flex flex-col pt-24">

        {/* Title Section */}

        <h1 className="self-center text-6xl font-shui text-center font-mono dark:text-white border-b">
          E&nbsp;Portfolio
        </h1>

        <h1 className="pt-6 pb-12">Q: Tell us about a community or cause that you are passionate about and are part of or want to be involved in.</h1>


        {/*Introduction Section */}


        <div className="flex flex-col gap-16">
          <div id="p0" className="space-y-4">
            <h2 className="py-2 font-bold text-md">Chapter Zero: My Philisophy</h2>
            <p id="p1-intro">
              As a Michigan engineer, I have set my lifelong journey toward sculpting intelligence for the benefit of our communities. I aspire to build intelligent robotic systems because robotics is the beautiful combination of digitation and reality. Through digital signal processing, commanding and interacting with a tangible moving robot is the most unreal and exciting thing I can ever imagine. Through the power of physical manipulations, robots can become vast empowerment of humans in various forms and can greatly advance the quality of life and productivity of the human race. This is why I aspire to build intelligent robots for the good of our communities and our world. 
            </p>

            <p>
              These ambitious pursuits has its origins in humble beginnings. Through trials of errors, extensive research, and with a daring mind to break set boundaries, I am continuously developing a set of work habits and mentalities customized for future success. Today, as I ardently work to craft artificial intelligence systems that champion accessibility and equity, it is worth reflecting on where my lifelong pursuit of accessibility in artificial intelligence originated.
            </p>
          </div>


          {/* First Year Section */}

          <div id="p1">
            <h2 className="py-2 font-bold text-md">Chapter I: Sparks of AGI<sup>1</sup> </h2>

            <div id="p1-card" className="flex place-content-center p-6">
              <ArticleCard 
                title="Sparks of AGI" 
                description="Automated GuardIng system: passion and experience with robotics translated to personal discovery of new field..." 
                imageUrl="/static/post/eportfolio/sparks-of-agi/sparks-of-agi-1.jpg"
                pageUrl="/eportfolio/sparks-of-agi"
              />
            </div>

            <p id="p2-intro">
              From my first brush with automation, I quickly became immersed in the experience of refining robots towards semi-automation. Yet, it was not until a year later that I extended recognition of the potential of such technology innot tangibly making a difference in the lives of many...
            </p>
          </div>



          {/* SAGS Section */}

          <div id="p2">
            <h2 className="py-2 font-bold text-md">Chapter II: The Road First Heard By<sup>2</sup></h2>
            

            <div id="p2-card" className="flex place-content-center p-8">
              <ArticleCard 
                title="The Road First Heard By" 
                description="I can hear the road: story of a blind navigation device inspired by video games during pandemic..." 
                imageUrl="/static/post/eportfolio/the-road-first-heard-by/spatial-audio-apple.jpg"
                pageUrl="/eportfolio/the-road-first-heard-by"
              />
            </div>
            <p id="p3-intro">
              Recognizing the limits of my initial endeavors and driven by the greater cause, I eagerly delved into theoretical work that could facilitate advanced decision-making. As I embarked on my penultimate year at VEX Robotics, I was fueled with a determination to showcase the culmination of years of learning. It is a Pure Pursuit.
            </p>
          </div>

          

          {/* Pure Pursuit Section */}

          <div id="p3">
            <h2 className="py-2 font-bold text-md">Chapter III: A Pure Pursuit<sup>3</sup></h2>
            
            <div id="p3-card" className="flex place-content-center p-6">
              <ArticleCard 
                title="A Pure Pursuit" 
                description="As senior year dawned, my days were colored with a mix of hands-on tinkering and devouring literature on control theories..." 
                imageUrl="/static/post/eportfolio/a-pure-pursuit/a-pure-pursuit-1.jpg"
                pageUrl="/eportfolio/a-pure-pursuit"
              />
            </div>

            <p id="p4-intro">
              Soon, I started on my freshman year at the University of Michigan, fueled by a singular mission: to deepen my knowledge and maximize my commitment within my communities with intelligent systems. At Michigan, I soon realized that sometimes, a mission is all you need to push boundaries and explore realms beyond one&apos;s wildest dreams.
            </p>
          </div>


          {/* U-M Section */}

          <div id="p4">
            <h2 className="py-2 font-bold text-md">Chapter IV: A Mission is All You Need<sup>4</sup></h2>
            

            <div id="p4-card" className="flex place-content-center p-6">
              <ArticleCard 
                title="A Mission is All You Need" 
                description="Stepping into high school with a decade-long love for LEGO, the magnetic allure of the VEX robotics competition team was irresistible..." 
                imageUrl="/static/post/eportfolio/a-mission-is-all-you-need/Obsidian-sc.jpg"
                pageUrl="/eportfolio/a-mission-is-all-you-need"
              />
            </div>

            <p>
              From those first sparks in a high school robotics competition to the halls of Michigan Engineering, my journey has been transformative. Each chapter has been more than just a learning curve—it&apos;s been a revelation, a deep dive into the boundless potential of technology intertwined with the responsibility that accompanies creation. 
            </p>
          </div>


          {/* Conclusion Section */}

          <div id="p5" className="space-y-4">
            <h2 className="font-bold text-md">Chapter V: What Comes Next</h2>
            <p>
              From the experience with Spatial Audio Guidance System, I realized the importance of branching out for inspirations. It is exactly a completely unrelated gaming experience that sparked an ideation of a helpful device. With Michigan Engineering Honors seminars, I am aspired to actively meet engineers from different fields and inspire each other to continue to innovate in our respective fields. 
            </p>

            <p>
              Eager to further gain experiences innovating and experimenting for the good of our communities, I look forward to taking the challenge of an extra capstone project where I will have the freedom to research and realize my dreams in the field of robotics, devising robots and algorithms that makes our campus more accessible for minority groups. 
            </p>

            <p>
              As I stand at this juncture, looking both backward at my achievements and forward to the horizon of possibilities, I am reminded of the intrinsic mission of engineering. As I continue to forge ahead, my commitment is unwavering: to innovate with purpose, to create with conscience, and to always remain a student, eager to learn, adapt, and grow as an Michigan Honors Engineer.
            </p>


          </div>
        </div>

        <div id="authorship" className="py-8">
          <p><b>By: </b>Huaidian Hou</p>
          <p><b>Released: </b>Aug 16, 2023</p>
          <p><b>Last Edited: </b>Aug 31, 2023</p>
        </div>


        {/* Credits Section */}
        
        <div id="credits" className="pt-8 border-t">
          <h3 className="text-lg font-bold text-center pb-4">Credits</h3>

          <p className="py-2 px-8">
            The titles of the above short stories are inspired by these awesome authors of academia and liberal arts:
          </p>

          <div className="mb-32 flex-col place-content-center md:max-w-5xl md:w-full md:mb-0 px-4">
            <ExternalTextButton pageUrl="https://arxiv.org/abs/2303.12712" title="1. Sparks of Artificial General Intelligence: Early experiments with GPT-4"/>
            <ExternalTextButton pageUrl="https://www.poetryfoundation.org/poems/44272/the-road-not-taken" title="2. The Road Not Taken"/>
            <ExternalTextButton pageUrl="https://www.ri.cmu.edu/pub_files/pub3/coulter_r_craig_1992_1/coulter_r_craig_1992_1.pdf" title="3. Implementation of the Pure Pursuit Path Tracking Algorithm"/>
            <ExternalTextButton pageUrl="https://arxiv.org/abs/1706.03762" title="4. Attention is All You Need"/>
          </div>

        </div>
        
      </div>
  )
}
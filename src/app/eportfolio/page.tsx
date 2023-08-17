import { ArticleCard } from "@components/cards"
import { ExternalTextButton } from '@components/buttons'

export default function EPortfolio() {
  return (
    <div className="flex w-11/16 flex-col items-center justify-between">

      <div className="min-h-screen p-8 max-w-3xl pt-24">





        {/* Title Section */}

        <h1 className="self-center text-6xl font-shui text-center font-mono dark:text-white border-b">
          E&nbsp;Portfolio
        </h1>
        <h1 className="text-xl self-left py-4">What cause do you work for?</h1>








        {/* Pure Pursuit Section */}

        <div id="p1" className="py-4 border-b">
          <h2 className="py-2 font-bold text-md">Chapter I: Sparks of AGI</h2>
          <p id="p1-intro text-sm" className="font-roboto">
            My journey toward sculpting intelligence for the benefit of our communities has its origins in humble beginnings. Today, as I ardently work to craft artificial intelligence systems that champion accessibility and equity, it&apos;s worth reflecting on where it all began: with an initial spark of the Automated GuardIng system (AGI).
          </p>

          <div id="p1-card" className="flex place-content-center p-6">
            <ArticleCard 
              title="Sparks of AGI" 
              description="Stepping into high school with a decade-long love for LEGO, the magnetic allure of the VEX robotics..." 
              imageUrl="/static/post/eportfolio/sparks-of-agi/sparks-of-agi-1.jpeg"
              pageUrl="/eportfolio/sparks-of-agi"
            />
          </div>
        </div>






        {/* SAGS Section */}

        <div id="p2" className="py-4 border-b">
          <h2 className="py-2 font-bold text-md">Chapter II: The Road First Heard By</h2>
          <p id="p2-intro">
            From my first brush with automation, I quickly became engrossed in the notion of refining robots towards semi-automation. Yet, it wasn&apos;t until a year later that I encountered a profound moment of clarity: I realized that the potential of such technology went beyond just benefiting me—it could tangibly make a difference in the lives of many...
          </p>

          <div id="p2-card" className="flex place-content-center p-6">
            <ArticleCard 
              title="The Road First Heard By" 
              description="COVID-19 was a life-changing (unfortunately for many, literally) period of time..." 
              imageUrl="/static/post/eportfolio/the-road-first-heard-by/spatial-audio-apple.png"
              pageUrl="/eportfolio/the-road-first-heard-by"
            />
          </div>
        </div>

        

        {/* Pure Pursuit Section */}

        <div id="p3" className="py-4 border-b">
          <h2 className="py-2 font-bold text-md">Chapter III: A Pure Pursuit</h2>
          <p id="p3-intro">
            Recognizing the limits of my initial endeavors and driven by the greater cause, I eagerly delved into theoretical work that could facilitate intricate decision-making. As I embarked on my penultimate year at VEX Robotics, post the college application process, I was fueled with a determination to showcase the culmination of my years of learning. It is a Pure Pursuit.
          </p>

          <div id="p3-card" className="flex place-content-center p-6">
            <ArticleCard 
              title="A Pure Pursuit" 
              description="As senior year dawned, my days were colored with a mix of hands-on tinkering and devouring literature on control theories..." 
              imageUrl="/static/post/eportfolio/a-pure-pursuit/a-pure-pursuit-1.jpeg"
              pageUrl="/eportfolio/a-pure-pursuit"
            />
          </div>
        </div>


        {/* U-M Section */}

        <div id="p4" className="py-4 border-b">
          <h2 className="py-2 font-bold text-md">Chapter IV: A Mission is All You Need</h2>
          <p id="p4-intro">
            Empowered by my journey with VEX, I embarked on my freshman year at the University of Michigan, fueled by a singular mission: to deepen my knowledge and amplify my impact within my communities. At Michigan, I quickly realized that sometimes, a mission is all you need to push boundaries and explore realms beyond one&apos;s wildest dreams.
          </p>

          <div id="p4-card" className="flex place-content-center p-6">
            <ArticleCard 
              title="A Mission is All You Need" 
              description="Stepping into high school with a decade-long love for LEGO, the magnetic allure of the VEX robotics competition team was irresistible..." 
              imageUrl="/static/post/eportfolio/a-mission-is-all-you-need/Obsidian-sc.png"
              pageUrl="/eportfolio/a-mission-is-all-you-need"
            />
          </div>
        </div>


        {/* Conclusion Section */}

        <div id="p5" className="space-y-6 py-4">
          <h2 className="py-2 font-bold text-md">Chapter V: What Comes Next</h2>
          <p>
            From those first sparks in a high school robotics competition to the halls of Michigan Engineering and the real-world application at Minsheng Fintech, my journey has been transformative. Each chapter has been more than just a learning curve—it&apos;s been a revelation, a deep dive into the boundless potential of technology intertwined with the responsibility that accompanies creation. My odyssey into the realm of AI, robotics, and digital systems was not merely about making machines think but about understanding the far-reaching consequences of those thoughts.
          </p>
          <p>
            As I stand at this juncture, looking both backward at my achievements and forward to the vast horizon of possibilities, I&apos;m reminded of the intrinsic beauty of engineering. It&apos;s an art form painted with the brush of mathematics, charged with the duty of equitable service to humanity. As I continue to forge ahead, my commitment is unwavering: to innovate with purpose, to create with conscience, and to always remain a student, eager to learn, adapt, and grow. For in the synthesis of cutting-edge technology and compassionate design lies the future I aspire to build as an Michigan Honors Engineer...
          </p>
        </div>


        <div id="authorship" className="py-8">
          <p><b>By: </b>Huaidian Hou</p>
          <p><b>Released: </b>Aug 16, 2023</p>
          <p><b>Last Edited: </b>Aug 16, 2023</p>
        </div>


        {/* Credits Section */}
        
        <div id="credits" className="pt-8 border-t">
          <h3 className="text-lg font-bold text-center pb-4">Article Name Credits</h3>

          <p className="py-2 px-8">
            The titles of the short stories in this portfolio are inspired by these awesome authors of academia and liberal arts:
          </p>

          <div className="mb-32 flex-col place-content-center md:max-w-5xl md:w-full md:mb-0 px-4">
            <ExternalTextButton pageUrl="https://arxiv.org/abs/2303.12712" title="-&gt; Sparks of Artificial General Intelligence: Early experiments with GPT-4"/>
            <ExternalTextButton pageUrl="https://www.poetryfoundation.org/poems/44272/the-road-not-taken" title="-&gt; The Road Not Taken"/>
            <ExternalTextButton pageUrl="https://www.ri.cmu.edu/pub_files/pub3/coulter_r_craig_1992_1/coulter_r_craig_1992_1.pdf" title="-&gt; Implementation of the Pure Pursuit Path Tracking Algorithm"/>
            <ExternalTextButton pageUrl="https://arxiv.org/abs/1706.03762" title="-&gt; Attention is All You Need"/>
          </div>

        </div>
        
      </div>
    </div>
  )
}
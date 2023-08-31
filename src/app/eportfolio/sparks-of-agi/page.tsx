import Image from 'next/image'
import { PortfolioReturnButton, ExternalTextButton } from '@components/buttons'

export default function SparksOfAGI() {
  return (
    <div>
      <h1
        className="self-center text-6xl font-shui text-center font-mono dark:text-white border-b"
      >
        Sparks&nbsp;of&nbsp;AGI<sup className="text-xl">1</sup>
      </h1>

      <br></br>


      <div className="p-4">

        <div className="pb-4">
          <p><b>By: </b>Huaidian Hou</p>
          <p><b>Released:</b> Aug 16, 2023</p>
          <p><b>Last Edited:</b> Aug 30, 2023</p>
        </div>

        <p className="py-4 font-roboto">
          Stepping into high school with a decade-long love for LEGO, the magnetic allure of the VEX robotics competition team was irresistible. After all, our school had held the title of Pennsylvania State Champions for a decade. Determined to continue the legacy, I dived headlong into the mechanics, believing that mimicking the dedication of my predecessors would promise success. While I immersed myself in the shop, refining and iterating designs, I was made aware there were challenges that mechanics alone could not resolve.
        </p>

        <div>

          <div className="self-center p-6 float-none md:float-right">
            <img className="rounded-3xl shadow-xl" src="/static/post/eportfolio/sparks-of-agi/turning_point_field_noted.jpg" width={420} alt="Sparks of AGI"/>
            <p className="text-xs py-2 opacity-60 italic">Image: VEX 2018-2019 Challenge: Turning Point</p>
          </div>
          
          <p className="self-left py-4 font-roboto">
            The task for that year seemed straightforward: navigate the field, gather balls, and shoot them towards some rotatable goals. Yet, a catch lay in the fine print — at any given time, our robot could only carry three balls. My first times as a robot operator were, to put it mildly, clumsy. The thrill of the game often left me oblivious to the rule. Once, a warning came during a local tournament, penalizing me for overstepping the limit. This setback was a catalyst: if my mistakes were inevitable, maybe I could delegate the counting to the robot itself?
          </p>

          <p className="self-left py-4 font-roboto">
            By observation, I realized that I could model the robot as a &ldquo;cache&rdquo; with a fixed maximum size, so if I were able to monitor the in-queue and out-queue actions of the balls, it would be easy to subtract the two counts and get the number of balls carried by the robot. To achieve that goal, I devised a system quipped with two ultrasonic sensors to detect ball passes: one at the intake and another at the shooter. They each were connected to a counter keeping a live count of the balls traversing each sensor. Should the count meet the limit, the robot would autonomously halt its intake mechanism, saving me from another oversight.
          </p>

          <div className="self-center p-6 float-none md:float-left">
            <img className="rounded-3xl shadow-xl" src="/static/post/eportfolio/sparks-of-agi/sparks-of-agi-1.jpg" width={360} height={240} alt="Sparks of AGI"/>
            <p className="text-xs py-2 opacity-60 italic">Image: Last robot of the season with completed detection system</p>
          </div>

          <p className="self-left py-4 font-roboto">
            As simple as this system sounds, numerous try-and-error were conducted in order to produce a consistent and reliable solution: The initial usage of touch-based sensors required a fair amount of activation force, even with a long plastic lever, causing issues with deviated shooting trajectories. Browsing through the allowed component library, the solution I found was using light sensors to track a combination of color and brightness changes. This solved the force problem, but light sensors were also not infallible as lighting conditions change from competition to competition. To address this issue as much as possible, I covered as much part of the detection zone with black stickers to prevent glare and designed a calibration process that took place in the initial seconds of a match while the ball intake system was not activated. 
          </p>

          <p className="self-left py-4 font-roboto">
            Moreover, since the ball may enter the intake mechanism from different directions in front of the robot, I also had to engineer a solution that could direct balls towards a small tunnel where my sensor could detect each one of them in time. This led to my first exposure to vector mathematics: using 3D coordinates on the robot to digitally design rails that attached to the robot seemlessly. After two months of careful hardware selection, programming, manufacturing, and tuning of the system in various conditions, the system was finally running consistently in all my practice and competitions. No warning or penalty was given to me anymore for the rest of that season. 
          </p>
        </div>

        <p className="self-left py-4 font-roboto">
          This rudimentary yet effective solution was my saving grace in subsequent tournaments, shielding me from rule breaches. Beyond its functional utility, it signified my initiation into the world of &ldquo;robotic intelligence&rdquo; and automation. With the design of a simple rule-based system, the first sparks of my passion for automated intelligence were ignited.
        </p>

        <div>
          <iframe width="720" height="360" src="https://www.youtube.com/embed/Wm7X3IUz6ok" title="169 VEX Turning Point Worlds Reveal" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <p className="text-xs py-2 opacity-60 italic"> 
            Video: World Championship Robot Reveal by my team<sup>2</sup>
          </p>
        </div>
      </div>


      

      <PortfolioReturnButton section="p1-card"/>
      
      
      {/* Credits Section */}
            
      <div id="credits" className="pt-8 border-t">
        <h3 className="text-lg font-bold text-center pb-4">Credits</h3>

        <p className="py-2 px-8">
          The title of this story and its content are inspired by or use resoures from these awesome sources: 
        </p>

        <div className="mb-32 flex-col place-content-center md:max-w-5xl md:w-full md:mb-0 px-4">
          <ExternalTextButton pageUrl="https://arxiv.org/abs/2303.12712" title="1. Sparks of Artificial General Intelligence: Early experiments with GPT-4"/>
          <ExternalTextButton pageUrl="https://youtu.be/Wm7X3IUz6ok" title="2. 169 VEX Turning Point Reveal"/>
        </div>
      </div>

    </div>
  )
}
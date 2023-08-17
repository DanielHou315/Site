import Image from 'next/image'
import { PortfolioReturnButton } from '@components/buttons'

export default function SparksOfAGI() {
  return (
    <div className="flex w-11/16 flex-col items-center justify-between">
      <div className="min-h-screen p-8 py-24">
        <h1
          className="self-center text-6xl font-shui text-center font-mono dark:text-white border-b"
        >
          Sparks&nbsp;of&nbsp;AGI
        </h1>

        <br></br>


        <div className="place-content-center max-w-3xl p-4">

          <div className="pb-4">
            <p><b>By: </b>Huaidian Hou</p>
            <p><b>Released:</b> Aug 16, 2023</p>
            <p><b>Last Edited:</b> Aug 16, 2023</p>
          </div>

          <p className="py-4 font-roboto">
            Stepping into high school with a decade-long love for LEGO, the magnetic allure of the VEX robotics competition team was irresistible. After all, our school had proudly held the title of Pennsylvania State Champions for a decade. Riding on the coattails of this legacy, I dived headlong into the mechanics, believing that mimicking the dedication of my predecessors would guarantee success. I immersed myself in the shop, refining and iterating designs, consulting with coaches and senior members. But an epiphany awaited me: there were challenges that mechanics alone couldn&apos;t surmount.
          </p>

          <div>
            <div className="self-center p-6 float-none md:float-right">
              <Image className="rounded-3xl shadow-xl" src="/static/post/eportfolio/sparks-of-agi/sparks-of-agi-1.jpg" width={360} height={240} alt="Sparks of AGI"/>
            </div>
            <p className="self-left py-4 font-roboto">
              The year&apos;s task seemed straightforward: navigate the field, gather balls, and shoot them towards nine designated goals. Yet, a catch lay in the fine print — at any given time, our robot could only harbor three balls. My initial attempts as a robot operator were, to put it mildly, clumsy. The thrill of the game often left me oblivious to this rule. A jarring reminder came during a local tournament, penalizing me for overstepping the limit. This setback was a catalyst. If my own vigilance was fallible, perhaps I could delegate this task to the robot itself?
            </p>

            <p className="self-left py-4 font-roboto">
              With a determination born of frustration, I devised a system. Equipped with two sensors—one at the intake and another at the shooter—it kept a vigilant count of the balls traversing through. Should the count verge on exceeding the limit, the robot would autonomously halt its intake, saving me from another oversight.
            </p>
          </div>

          <p className="self-left py-4 font-roboto">
            This rudimentary yet effective solution was my saving grace in subsequent tournaments, shielding me from rule breaches. Beyond its functional utility, it signified my initiation into the world of automation. At that moment, with the foundation of a simple rule-based system, <b>the first sparks of my passion for automated intelligence were ignited. </b>
          </p>
        </div>

        <PortfolioReturnButton section="p1-card"/>

      </div>
    </div>
  )
}
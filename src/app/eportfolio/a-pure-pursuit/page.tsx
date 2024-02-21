// import Image from 'next/image'
import { ExternalTextButton, PortfolioReturnButton } from '@components/buttons'

export default function APurePursuit() {
  return (
    <div className="flex flex-col pt-24">
        <h1
          className="self-center text-6xl font-shui text-center font-mono dark:text-white border-b"
        >
          A Pure Pursuit <sup className="text-2xl">1</sup>
        </h1>
        <br></br>

        <div className="place-content-center">

          <div className="pb-4">
            <p><b>By: </b>Huaidian Hou</p>
            <p><b>Released: </b>Aug 16, 2023</p>
            <p><b>Last Edited: </b>Aug 30, 2023</p>
          </div>


          <b>The Birth of Ambition</b>
          <p className="py-4 ">
            As senior year dawned, my days were colored with a mix of hands-on tinkering and devouring literature on control theory and robotic manipulation. Fueled by an insatiable curiosity and a hint of audacity, I envisioned an ambitious project: a sophisticated framework layered over Purdue PROS, designed to seamlessly integrate every nuance of motor control and robot operation into one cohesive, user-friendly API.
          </p>
        
          
          <div className="flex">

            {/* <div className="self-center pl-6 float-none md:float-right">

              <img fetchPriority='high' className="rounded-3xl shadow-xl overflow-hidden" src="/post/eportfolio/a-pure-pursuit/a-pure-pursuit-3.jpg" alt="Image" width={320} height={180}/>
              <p className="text-xs py-2 opacity-60 italic">Image: Action Shot of Pure Pursuit in the Tuning</p>

            </div> */}
            
           
          </div>

          <div className="py-4">

            <div className="float-none pr-6 py-2 md:float-left">
              <img fetchPriority='high' className="rounded-3xl shadow-xl overflow-hidden" src="/post/eportfolio/a-pure-pursuit/pure_pursuit_lookahead1.png" alt="Image" width={360} height={360}/>
                <p className="text-xs py-2 opacity-60 italic">Image: Ilustration of the Pure Pursuit Algorithm<sup>3</sup></p>

              <img fetchPriority='high' className="rounded-3xl shadow-xl overflow-hidden" src="/post/eportfolio/a-pure-pursuit/pure_pursuit_core.png" alt="Image" width={360} height={360}/>
                <p className="text-xs py-2 opacity-60 italic">Image: Core Pure Pursuit Algorithm</p>
            </div>
            

            <b>Building Blocks to Mastery</b>
            <p className="py-4">
              Starting from scratch, I dove deep, crafting C++ class wrappers for each sensor our robot would rely on. Then came the mastery of PID motor control. But the jewel in this engineering crown was the &apos;Pure Pursuit&apos; algorithm, a marvel I had discovered thanks to <a href="https://www.youtube.com/watch?v=eysHlvHFTFw" className="text-blue-600 underline">the brilliance of team 60470S<sup>2</sup></a>. This gem was interwoven with a positioning system, a project which I was already knee-deep in, harnessing the precision of wheel odometry and the consistency of IMUs. Juggling college applications and late-night coding marathons, I successfully derived the core mathematics for wheel odometry. In that euphoric moment of achievement, it was Hamilton&apos;s words that rang true for me: &ldquo;For all kids out there who dare to dream the impossible.&rdquo;
            </p>


            <b>Trials, Triumphs, and Midnight Epiphanies</b>
            <p className="py-4">
              Then came the World Championships. With the clock ticking down, our robot still had quirks to iron out. One unforgettable night, with my teammates lost in slumber and the quiet hum of machinery my only companion, I found myself deep-diving into debugging the Pure Pursuit stack. And there, in the dim glow of laptop screens and arena lights, our robot executed a near-flawless trajectory. My friend Arnav&apos;s stunned admiration, &ldquo;That was the most beautiful thing I&apos;ve ever seen!&rdquo; still rings around my ear as the best compliment ever.
            </p>
            
          </div>

          <div className="h-full">
            <div className="self-center pl-6 pt-4 float-none md:float-right">
              <img fetchPriority='high' className="rounded-3xl shadow-xl overflow-hidden" src="/post/eportfolio/a-pure-pursuit/a-pure-pursuit-1.jpg" alt="Image" width={360} height={180}/>
              <p className="text-xs py-2 opacity-60 italic">Image: Team 169 Robots at 2022 VEX World Championship</p>
            </div>  

            <p className="pb-4">
              The ecstasy was not merely about our robot&apos;s smooth movements. It was about the embodiment of life and intelligence in metal and code. The robot danced, not just as a piece of machinery, but as a living entity, realizing the vision of its creator. I had birthed intelligence. I had crafted life.
            </p>

            <b className="py-4">A Final Reflection</b>
            <p className="py-4 ">
              Now, looking back, I understand that engineering is not merely a profession. It is an art, an elegant choreography that melds the abstract beauty of mathematics with tangible, impactful creation. That night, amongst algorithms and metallic machinery, I was not just an engineer; I was a maestro, conducting a symphony of innovation.
            </p>
          </div>

          <ExternalTextButton title="See ELib Framework source code on Github" pageUrl="https://github.com/DanielHou315/ELib"/>

        </div>

        <PortfolioReturnButton section="p3-card"/>

      {/* Credits Section */}
            
      <div id="credits" className="pt-8 border-t">
        <h3 className="text-lg font-bold text-center pb-4">Credits</h3>

        <p className="py-2 px-8">
          The title of this story and its content are inspired by or use resoures from these awesome sources: 
        </p>

        <div className="mb-32 flex-col place-content-center md:max-w-5xl md:w-full md:mb-0 px-4">
          <ExternalTextButton pageUrl="https://www.ri.cmu.edu/pub_files/pub3/coulter_r_craig_1992_1/coulter_r_craig_1992_1.pdf" title="1. Implementation of the Pure Pursuit Path Tracking Algorithm"/>
          <ExternalTextButton pageUrl="https://www.youtube.com/watch?v=eysHlvHFTFw" title="2. 315 Prog Skills | VEX Tipping Point 60470S"/>
          <ExternalTextButton pageUrl="https://www.mathworks.com/help/nav/ug/pure-pursuit-controller.html" title="3. Pure Pursuit Controller - MathWorks"/>
        </div>
      </div>
    </div>

  )
}
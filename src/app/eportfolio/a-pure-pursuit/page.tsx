import Image from 'next/image'
import { ExternalTextButton, PortfolioReturnButton } from '@components/buttons'

export default function APurePursuit() {
  return (
    <div className="flex w-11/16 flex-col items-center justify-between">
      <div className="min-h-screen p-8 py-24">
        <h1
          className="self-center text-6xl font-shui text-center font-mono dark:text-white border-b"
        >
          A Pure Pursuit
        </h1>
        <br></br>

        <div className="place-content-center max-w-3xl p-4">

          <div className="pb-4">
            <p><b>By: </b>Huaidian Hou</p>
            <p><b>Released: </b>Aug 16, 2023</p>
            <p><b>Last Edited: </b>Aug 16, 2023</p>
          </div>


          <b>The Birth of Ambition</b>
          <p className="py-4 font-roboto">
            As senior year dawned, my days were colored with a mix of hands-on tinkering and devouring literature on control theory and robotic manipulation. Fueled by an insatiable curiosity and a hint of audacity, I envisioned an ambitious project: a sophisticated framework layered over Purdue PROS, designed to seamlessly integrate every nuance of motor control and robot operation into one cohesive, user-friendly API.
          </p>
          

          <b>Building Blocks to Mastery</b>
          
          <div className="flex">
            
            <p className="py-4 font-roboto">

              <div className="self-center pl-6 float-none md:float-right">

                <Image className="rounded-3xl shadow-xl overflow-hidden" src="/static/post/eportfolio/a-pure-pursuit/a-pure-pursuit-3.jpg" alt="Image" width={320} height={180}/>
                <p className="text-xs py-2 opacity-60 italic">Image: Action Shot of Pure Pursuit in the Tuning</p>

              </div>

              Starting from scratch, I dove deep, crafting C++ class wrappers for each sensor our robot would rely on. Then came the mastery of PID motor control. But the jewel in this engineering crown was the &apos;Pure Pursuit&apos; algorithm, a marvel I had discovered thanks to the brilliance of team 60470S. This gem was interwoven with a positioning system, a project which I was already knee-deep in, harnessing the precision of wheel odometry and the consistency of IMUs. Juggling college applications and late-night coding marathons, I successfully derived the core mathematics for wheel odometry. In that euphoric moment of achievement, Hamilton&apos;s words rang true for me: &ldquo;For all kids out there who dare to dream the impossible.&rdquo;
            </p>
          </div>

          <b>Trials, Triumphs, and Midnight Epiphanies</b>
          <div>

            <div className="self-center pr-6 pt-4 float-none md:float-left">
              <Image className="rounded-3xl shadow-xl overflow-hidden" src="/static/post/eportfolio/a-pure-pursuit/a-pure-pursuit-1.jpeg" alt="Image" width={360} height={180}/>
              <p className="text-xs py-2 opacity-60 italic">Image: Team 169 Robots at World Championship</p>
            </div>

            <p className="py-4 font-roboto">
              Then came the World Championships. With the clock ticking down, our robot still had quirks to iron out. One unforgettable night, with my teammates lost in slumber and the quiet hum of machinery my only companion, I found myself deep-diving into debugging the Pure Pursuit stack. And there, in the dim glow of laptop screens and arena lights, our robot executed a near-flawless trajectory. Nav&apos;s stunned admiration, &ldquo;That was the most beautiful thing I&apos;ve ever seen!&rdquo; was the cherry on top.
            </p>
            <p className="py-4 font-roboto">
              It wasn&apos;t merely about our robot&apos;s movements. It was about the embodiment of life and intelligence in metal and code. It danced, not just as a piece of machinery, but as a living entity, realizing the vision of its creator. I had birthed intelligence. I had crafted life.
            </p>
          </div>

          <div className="max-w-xl m-auto pb-4">
            <div className="p-4 bg-gray-800 rounded-lg shadow-md">
              <pre className="text-xs text-white font-mono overflow-x-scroll">
                <code>
                  {`int EPursuit::calcPursuit(
    QLength& pursuitDist, 
    QAngle& pursuitAngle, 
    QLength& dist2Target)
{

    // Find Nearest Index
    int nearIndex = findNearestIndex();
    targetIndex = findTargetIndex();

    // Find the X, Y of target Index
    QLength tx = path.nodes[targetIndex].point.x;
    QLength ty = path.nodes[targetIndex].point.y;

    // Find Desired Parameters
    pursuitDist = path.nodes[nearIndex].targetDistance;
    if(path.direction) pursuitDist *= -1;

    pursuitAngle = (atan2(ty-truePose->y,tx-truePose->x) - truePose->theta) * sgn(pursuitDist.convert(meter));
    if (path.direction) pursuitAngle = getBoundAngle(pursuitAngle - 180_deg);
    
    dist2Target = hypot(path.nodes[targetIndex].point.x-truePose->x, path.nodes[targetIndex].point.y-truePose->y);

    return 0;
}`}
                </code>
              </pre>
            </div>
            <p className="py-2 text-xs py-2 opacity-60 italic">Code Snippet: Core Algorithm of Pure Pursuit (project source code available on Github at link below)</p>
          </div>

          <b className="py-4">A Final Reflection</b>
          <p className="py-4 font-roboto">
            Now, looking back, I understand that engineering isn&apos;t merely a profession. It&apos;s an art, a dance. An elegant choreography that melds the abstract beauty of mathematics with tangible, impactful creation. That night, amidst algorithms and metallic limbs, I wasn&apos;t just an engineer; I was a maestro, conducting a symphony of innovation.
          </p>

          <ExternalTextButton title="See ELib Framework source code on Github" pageUrl="https://github.com/DanielHou315/ELib"/>

        </div>

        <PortfolioReturnButton section="p3-card"/>
        
      </div>
    </div>
  )
}
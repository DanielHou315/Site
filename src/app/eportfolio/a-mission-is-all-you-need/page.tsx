import Image from 'next/image'
import { PortfolioReturnButton } from '@components/buttons'

export default function AMission() {
  return (
    <div className="flex w-11/16 flex-col items-center justify-between">
      <div className="min-h-screen p-8 py-24">
        <h1
          className="self-center text-6xl font-shui text-center font-mono dark:text-white border-b"
        >
          A Mission is All You Need
        </h1>
        <br></br>

        <div className="place-content-center max-w-3xl p-4">

          <div className="pb-4">
            <p><b>By: </b>Huaidian Hou</p>
            <p><b>Released: </b>Aug 16, 2023</p>
            <p><b>Last Edited: </b>Aug 16, 2023</p>
          </div>

          <b className="py-4">The Transformation Begins</b>
          <p className="py-4 font-roboto">
            Arriving at Michigan Engineering was not just a geographical shift for me, but an elevation in my engineering ethos. The cornucopia of ideas and the diverse curriculum was an open invitation to see the world differently.
          </p>


          <b className="py-4">The Transformation Begins</b>
          <div>
            <div className="self-center pr-6 pt-4 float-none md:float-left">
              <Image className="rounded-3xl shadow-xl overflow-hidden" src="/post/eportfolio/a-mission-is-all-you-need/Engr100_Tech_Drawing.jpg" alt="Image" width={420} height={180}/>
              <p className="text-xs py-2 opacity-60 italic">Image: Engr 100 Class Project <b>Suds Saver</b> Technical Drawing</p>
            </div>

            <p className="py-4 font-roboto">
            
            By what felt like serendipity, I found myself enrolling in a Digital Studies class focused on Digital Incarceration. As the lone Computer Science aficionado amidst a sea of varied perspectives, the class was a profound revelation. From the biases in early facial recognition algorithms to the unauthorized surveillance by police, the dark underbelly of unchecked technological advancement was laid bare. Furthermore, my Engr 100 class, which delved into product design, underscored the oft-ignored principles of equity and accessibility. These lessons imprinted a commitment in me: to engineer solutions with conscientiousness, prioritizing inclusivity and fairness.
          </p>
          </div>
          
          <b className="py-4">Incorporating Ethics in Real-world Solutions</b>
          <p className="py-4 font-roboto">
            Fast forward to summer 2023 at Minsheng Fintech Co. Ltd. (MSKJ), where I was handed the reins to design a search engine component for mobile banking utilizing Large Language Models (LLMs). Empowered by my Michigan experiences, I meticulously scoured the training datasets, identified edge cases to accommodate diverse user behaviors, and championed equity in design. My mission was clear: ensure every user, irrespective of their fluency in banking parlance, received accurate and unbiased search results.
          </p>

          <b className="py-4">A Deep Dive into State-of-the-Art AI Research</b>
          <div>
            <div className="self-center pl-6 pt-4 float-none md:float-right">
              <Image className="rounded-3xl shadow-xl overflow-hidden" src="/post/eportfolio/a-mission-is-all-you-need/Obsidian-sc.png" alt="Image" width={420} height={180}/>
              <p className="text-xs py-2 opacity-60 italic">Image: Obsidian Knowledge Graph built during MSKJ internship</p>
            </div>
            <p className="py-4 font-roboto">
              The internship turned out to be more than just a design task. It was a treasure trove of learning opportunities. Leveraging Obsidian, I curated an intricate web of knowledge, encapsulating nuances of NLP, ML, and broader AI concepts. As I navigated research papers on Transformer Architecture, BERT, T5, Mixure-of-Expert systems, and more, I marveled at the genius of researchers who pushed boundaries with unmatched creativity. This journey through AI&apos;s intricate maze further intensified my passion. I eagerly anticipate plunging deeper into AI research, where I aim to fuse creativity with mathematics, sculpting pioneering systems that enrich our communities.
            </p>
          </div>
          
        </div>

        <PortfolioReturnButton section="p4-card"/>
        
      </div>
    </div>
  )
}
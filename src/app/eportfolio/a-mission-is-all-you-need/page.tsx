// import Image from 'next/image'
import { PortfolioReturnButton, ExternalTextButton, FileTextButton } from '@components/buttons'

export default function AMission() {
  return (
    <div className="flex flex-col pt-24">
      <h1
        className="self-center text-6xl font-shui text-center font-mono dark:text-white border-b"
      >
        A Mission is All You Need <sup className="text-2xl">1</sup>
      </h1>
      <br></br>

      <div className="place-content-center">

        <div className="pb-4">
          <p><b>By: </b>Huaidian Hou</p>
          <p><b>Released: </b>Aug 16, 2023</p>
          <p><b>Last Edited: </b>Aug 31, 2023</p>
        </div>

        <p className="py-4 font-roboto">
          Arriving at Michigan Engineering was not just a geographical shift for me, but an elevation in my engineering ethos. The cornucopia of ideas and the diverse curriculum was an open invitation to see the world differently.
        </p>

        <p className="py-4 font-roboto">
          
            Enrollment in Digital Studies 258 showed me the dark underbelly of crude technologies and misuses, from the biases in early facial recognition algorithms to the unauthorized surveillance by police. These triggered my reflections on the responsible development and use of technology. Intelligent systems have greater powers in modern society than most things, judging loan eligibilities, identifying criminal faces, and invisibly doing so much more. Misuse and improper development can lead to serious loan mis-declines, causing family finances to fail. Mis-identification of criminals can also derogate people&apos;s credit and fame. Starting to gain awareness of these issues, I am determined to extensively support minority users and promote righteous use of any product I design as a Michigan engineer. 
          </p>
          <ExternalTextButton title="Experience my Digital 258 Final Project: Analytics Reflector" pageUrl="https://reflector.danielhou.me"/>

        <div className="pt-4">
          <div className="self-center pr-6 pt-4 float-none md:float-left">
            <img fetchPriority='high' className="rounded-3xl shadow-xl overflow-hidden" src="/static/post/eportfolio/a-mission-is-all-you-need/Engr100_Tech_Drawing.jpg" alt="Image" width={420} height={180}/>
            <p className="text-xs py-2 opacity-60 italic pb-14">Image: Engr 100 Class Project <b>Suds Saver</b> Technical Drawing</p>
          </div>

          <p>
            This is why, for my Suds Saver project for Engineering 100 delved into product design, I underscored the often-ignored principles of equity and accessibility in early stages of the development process. For this simple soap box that aims at convenience and germ protection, I led my team to consider the needs of customers who are different from us: elderlies with less strong hands, left-handed users, curious children playing with them, handicapped users, etc. This is why our design took advantage of gravity, using an intricately designed slope, magnetic force, and a smooth plastic living hinge. With these features, the soap to slide into the hands of the user gently, enabling single-handed operation, and avoids potential sudden release of energy by any spring-like mechanism. This design was a piece of demonstration of my determination to focus on equity and accessibility in future research. 
          </p>

          <div className="min-w-xl py-2">  
            <FileTextButton pageUrl="/static/post/eportfolio/a-mission-is-all-you-need/Huaidian_Hou_Engr_100_Final_Report_Suds_Saver.pdf" title="Download the Engr 100 Suds Saver Project Report"/>
          </div>

        </div>
        
        {/* <b className="py-4">Incorporating Ethics in Real-world Solutions</b>
        <p className="py-4 font-roboto">
          Fast forward to summer 2023 at Minsheng Fintech Co. Ltd. (MSKJ), where I was handed the reins to design a search engine component for mobile banking utilizing Large Language Models (LLMs). Empowered by my Michigan experiences, I meticulously scoured the training datasets, identified edge cases to accommodate diverse user behaviors, and championed equity in design. My mission was clear: ensure every user, irrespective of their fluency in banking parlance, received accurate and unbiased search results.
        </p> */}

        <p className="py-4 font-roboto">
          These Michigan experiences are the reasons why I am eager to conduct research in the field of robotics in the name of fairness and accessibility. Before robots enter regular households, many problems await resolution in the design of fair and helpful robots for various home scenarios. For example, conversations should be appropriate in single-parent or orphanaged families, human machine interactions trained by Reinforcement Learning need to incorporate awareness and knowledge of handicapped user habits. As I immerse myself in this highly creative and fast-developing field, I aim to fuse creativity with mathematics, sculpting pioneering systems that enrich the accessibility of technology and intelligent systems in our communities. 
        </p>
        
      </div>

      <PortfolioReturnButton section="p4-card"/>

      {/* Credits Section */}
            
      <div id="credits" className="pt-8 border-t">
        <h3 className="text-lg font-bold text-center pb-4">Credits</h3>

        <p className="py-2 px-8">
          The title of this story and its content are inspired by or use resoures from these awesome sources: 
        </p>

        <div className="mb-32 flex-col place-content-center md:max-w-5xl md:w-full md:mb-0 px-4">
          <ExternalTextButton pageUrl="https://arxiv.org/abs/1706.03762" title="1. Attention is All You Need"/>
        </div>
      </div>

    </div>
  )
}
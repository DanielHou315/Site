import { H1Text } from "@/components/styling"
import { ExternalButton } from "@components/buttons"

export default function Acknowledgement() {
  return (
    <div className="min-h-screen pt-24">

      <H1Text text="Acknowledgement" font="shui" />

        <div>
          <p className="py-4 text-center">This website is not possible without these awesome technologies and resources: </p>
          
          <div className="flex grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center md:text-left place-items-center sm:place-items-left">

            <ExternalButton title="Next.js" description='The base Web Framework for this site' link='https://nextjs.org'/>
            
            <ExternalButton title="TailwindCSS" description='What powers this beautiful interface' link='https://tailwindcss.com'/>
            
            <ExternalButton title="Figma" description='Elegant UI prototyping' link='https://figma.com'/>
            
            <ExternalButton title="ChatGPT" description='The Obvious way to tackle beginner Coding Problems' link='https://chat.openai.com'/>
            
            <ExternalButton title="Github Pages" description='Awesome blog showing how this site is hosted' link='https://pages.github.com//'/>

            <ExternalButton title="The Noun Project" description='Awesome Open Source Icons and Photos' link='https://thenounproject.com/'/>
          </div>

        </div>
      
    </div>
  )
}
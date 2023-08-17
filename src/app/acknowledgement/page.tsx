import { ExternalButton } from "@components/buttons"

export default function Acknowledgement() {
  return (
    <div className="h-screen">

      <div className="p-24">
        <h1 className="text-center text-4xl p-6">Acknowledgement</h1>
        <div className="px-24">
          <p className="py-4">This website is not possible without these awesome technologies and resources: </p>
          
          <div className="mb-32 grid grid-cols-3 text-center lg:max-w-5xl lg:w-full lg:mb-0  lg:text-left">

            <ExternalButton title="Next.js" description='The base Web Framework for this site' link='https://nextjs.org'/>
            <ExternalButton title="TailwindCSS" description='What powers this beautiful interface' link='https://tailwindcss.com'/>
            <ExternalButton title="Figma" description='Elegant UI prototyping' link='https://figma.com'/>
            <ExternalButton title="ChatGPT" description='The Obvious way to tackle beginner Coding Problems' link='https://chat.openai.com'/>
            <ExternalButton title="Deploy to Github Pages" description='Where this site is hosted' link='https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/'/>
          </div>

        </div>
       
      </div>
      
    </div>
  )
}
import { Navbar, Footer } from "../components"

export default function EPortfolio() {
  return (
    <main className="flex min-h-screen w-11/16 flex-col items-center justify-between p-24 bg-gradient-to-tr from-yellow-50 to-pink-50 dark:from-blue-800 dark:to-purple-900">

      <div id="home" className="h-screen">

        <div className="relative flex place-content-center p-16 space-x-48">
        

          <p className="relative dark self-center p-3">
            Huaidian Hou
          </p>
        </div>

      </div>



      <div id="about-me" className="h-screen border-t p-4">
        <h1
          className="self-center text-4xl font-bold text-center font-mono dark:text-white"
        >
          About Me
        </h1>

      </div>
      
    </main>
  )
}
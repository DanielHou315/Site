import { Navbar, Footer } from "../../components"

export default function PurePursuit() {
  return (
    <main className="flex min-h-screen w-11/16 flex-col items-center justify-between p-24 bg-gradient-to-tr from-yellow-50 to-pink-50 dark:from-blue-800 dark:to-purple-900">
      
      <Navbar/>

      <div id="home" className="h-screen">

        <div className="relative flex place-content-center p-16 space-x-48">
        
          <p className="relative dark self-center p-3">
            Pure Pursuit Demonstration and Derivation
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
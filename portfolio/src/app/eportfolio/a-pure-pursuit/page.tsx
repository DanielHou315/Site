import Image from 'next/image'
import { PortfolioReturnButton } from '@components/buttons'

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
            <p><b>Released: </b>DATE</p>
            <p><b>Last Edited: </b>DATE</p>
          </div>


          <div className="self-center py-4">
            <Image src="/index/ZR-Logo.svg" width={360} height={240} alt="Img"/>
          </div>

          <p className="py-4 font-roboto">
            PP
          </p>
        </div>

        <PortfolioReturnButton section="sparks-of-agi-card"/>
        
      </div>
    </div>
  )
}
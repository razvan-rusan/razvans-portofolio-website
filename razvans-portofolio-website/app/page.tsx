import Image from "next/image";
import {heebo, inter} from "@/app//ui/fonts"
import '@/app/public/styles.css'

const blurb: string[] = [
    "Hi! You are viewing Razvan Rusan's portofolio.",
    "•",
    "Here is what we have:",
    "Videogames"
]

export default function Home() {
  return (
      <div className='container grid grid-cols-3 grid-rows-3'>
          {blurb.map((item, i) => (
                  <div key={i} className={`${inter.className} antialiased pt-6 p-1 text-2xl flex justify-center h-screen font-bold`}>
                      {item}
                  </div>
          ))}
          {/*<div className={`${inter.className} antialiased pt-6 text-2xl flex justify-center h-screen font-medium`}>*/}
          {/*    Hi! You are viewing Razvan Rusan's portofolio.*/}
          {/*</div>*/}
          {/*<div className={`${inter.className} antialiased pt-6 text-2xl flex justify-center h-screen font-medium`}>*/}
          {/*    •*/}
          {/*</div>*/}
          {/*<div className={`${inter.className} antialiased pt-6 text-2xl flex justify-center h-screen font-medium`}>*/}
          {/*      Here is what we have.*/}
          {/*</div>*/}
      </div>
  )
}

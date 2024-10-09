//import Image from "next/image";

import { FlipWords } from "@/components/ui/flip-words";
import { SignIn, useUser } from '@clerk/nextjs'

export default function Home() {
  const words: string[]= ["Skibidi", "Toilet", "Sigma"]
  return (
    <div>
      <div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
        <h1 className="font-bold text-5xl">Taking drugs is not <FlipWords words = {words}></FlipWords></h1>

      </div>

    </div>
    // <div>
    //   <div className="flex flex-wrap -mx-4 justify-center">
    //     <div className="flex justify-center items-center pb-10 mb-4 md:mb-0 px-4 w-full md:w-1/3">
    //     <Image
    //         src={druggie}
    //         alt="say no to drug"
    //         width={500}
    //         height={500}
    //       >
    //       </Image>
    //     </div>

    //     <div className="flex justify-center items-center pb-10 mb-4 md:mb-0 px-4 w-full md:w-1/3">
    //       <Image
    //         src={nodrug}
    //         alt="say no to drug"
    //         width={500}
    //         height={500}
    //       >
    //       </Image>
    //     </div>
    //   </div>

    //   <div className="flex flex-col justify-center">
    //     <p className="font-bold text-5xl text-center">Hello World!</p><br />
    //     <p className="text-sm text-lft text-center">Did you know that drugs cause 70% of deaths in Singapore?</p>
    //   </div>
    // </div>
  );
}



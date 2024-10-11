'use client'

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FlipWords } from "@/components/ui/flip-words";
import drugImageOne from "../assets/nodrugone.jpg";
import drugImageTwo from "../assets/nodrug2.jpg";
import drugImageThree from "../assets/nodrug3.jpg";
import Autoplay from "embla-carousel-autoplay"



export default function Home() {
  const words: string[] = ["Cool", "Fun", "Amazing", "Awesome"]

  return (
      <div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
      <Carousel className="w-full max-w-md" plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
            <CarouselContent >
              <CarouselItem>
                <Image src={drugImageOne} alt="Item" className="object-fill" />
              </CarouselItem>
              <CarouselItem>
                <Image src={drugImageTwo} alt="Item" className="object-fill"/>
              </CarouselItem>
              <CarouselItem>
                <Image src={drugImageThree} alt="Item" className="object-fill"/>

              </CarouselItem>
            </CarouselContent>
          </Carousel>

        <h1 className="font-bold text-5xl">Taking drugs is not <FlipWords words={words}></FlipWords></h1>
        <h2 className="py-10">Do you know the harmful effects of drugs? Please dont do it </h2>
        <h3>Every year, about 10% of families have issues with drugs, and this issue is something that will affect generations.</h3>
      </div>


  );
}



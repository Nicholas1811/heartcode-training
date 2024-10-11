'use client'
import Image from "next/image";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import self from "../../assets/header_imng.jpeg";
import drugImageTwo from "../../assets/software.jpeg";
import drugImageThree from "../../assets/mahjong.jpeg";



export default function Home() {
  return (
    <div>

<div className="flex flex-col mt-6 items-center justify-center">
    <Carousel className="w-full max-w-md" plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
            <CarouselContent >
              <CarouselItem>
                <Image src={self} alt="Item" className="object-fill" />
              </CarouselItem>
              <CarouselItem>
                <Image src={drugImageTwo} alt="Item" className="object-fill"/>
              </CarouselItem>
              <CarouselItem>
                <Image src={drugImageThree} alt="Item" className="object-fill"/>

              </CarouselItem>
            </CarouselContent>
          </Carousel>
          </div>
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>

    </div>
  );
}

const projects = [
  {
    title: "Who am i?",
    description:
      "My name is Nicholas, and I am 23 years of age",
    link: "",
  },
  {
    title: "What am I up to?",
    description:
      "I am student in Singapore Management University, in the school of computing and information systems. I am a student in software engineering now!",
    link: "",
  },
  {
    title: "What are my hobbies?",
    description:
      "I like to play mahjong, and I love me some me time, no particular hobbies!",
    link: "",
  },
];

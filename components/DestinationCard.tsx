"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface DestinationInterface {
  img: string;
  title: string;
  handle: string;
}

function DestinationCard() {
  const [destinationImg, setDestinationImg] = useState<DestinationInterface[]>([]);
  const router = useRouter()
  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get<{ destination: DestinationInterface[] }>(
        "https://json-data-1wm2.onrender.com/featured-destination"
      );
      setDestinationImg(res.data.destination);
    };
    fetchImages();
  }, []);

  return (
    <Carousel className="mx-auto max-w-5/6 max-h-[30vh]">
      <CarouselContent className="-ml-1">
        {destinationImg.map((des, index) => (
          <CarouselItem key={index} className="pl-6 basis-1/1 sm:basis-1/2 md:basis-1/4">
            <div className="relative p-0">
              <Card className="h-[30vh]">
                <CardContent className="flex h-full items-center justify-center p-0">
                  <div className="relative w-full h-full cursor-pointer" onClick={()=> router.push(`/destination/${des.handle}`)}>
                    <Image
                      src={des.img}
                      alt={des.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <CardTitle className="absolute top-1/2 right-1/2 text-white text-xl translate-x-1/2 translate-y-2/3 hover:text-teal-400">{des.title}</CardTitle>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default DestinationCard;

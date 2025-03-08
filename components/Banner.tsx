"use client";

import axios from "axios";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel";


const Banner = () => {
  const [bannerImages, setBannerImages] = useState<{ img: string; alt: string }[]>();
  const [loading, setLoading] = useState(true);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get<{ banners: { img: string; alt: string }[] }>(
          "https://json-data-1wm2.onrender.com/banners"
        );
        setBannerImages(res.data.banners);
      } catch (error) {
        console.error("Error fetching banner images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div className="w-full h-64 flex items-center justify-center">Loading banners...</div>;
  }

  return (
    <Carousel
      plugins={[plugin.current]}
     
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {bannerImages && bannerImages.length > 0 ? (
          bannerImages.map((banner, index) => (
            <CarouselItem key={index}>
              <div  className="relative">
                <Card className="p-0">
                  <CardContent className="flex items-center p-0 justify-center overflow-hidden">
                    <div className="relative w-full h-[76vh]">
                      <Image
                        src={banner.img || "/placeholder.svg"}
                        alt={banner.alt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>

              </div>
            </CarouselItem>
          ))
        ) : (
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-lg">No banner images available</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        )}
      </CarouselContent>
      {/* Uncomment if needed */}
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default Banner;

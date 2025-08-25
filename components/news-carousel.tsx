"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import Mock from "@/lib/mock-data";
import NewsCard from "./news-card/news-card";

export default function CarouselWithProgress() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    const progress = count ? (current * 100) / count : 0;

    React.useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
    }, [api]);

    return (
        <div className="w-full pb-6">
            <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                    align: "start",
                    loop: false,
                }}
            >
                <CarouselContent className="-ml-3 sm:-ml-4 lg:-ml-5">
                    {Mock.News.map((news, i) => (
                        <CarouselItem
                            key={i}
                            className="
                pl-3 sm:pl-4 lg:pl-5
                basis-[85%]      
                sm:basis-1/2    
                lg:basis-1/3   
                xl:basis-1/4  
              "
                        >
                            {/* <Card className="border shadow-sm">
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}

                            <NewsCard {...news} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="absolute top-[calc(100%+0.5rem)] right-0 flex gap-2 mt-2">
                    <CarouselPrevious className="translate-y-0 static" />
                    <CarouselNext className="translate-y-0 static" />
                </div>

            </Carousel>

            {/* <Progress value={progress} className="mt-4 w-24 ml-auto" /> */}
        </div>
    );
}

"use client"; 

import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";

const ImageCarousel = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="relative px-4">
      <Carousel
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        itemsToShow={3}
        itemsToScroll={1}
        speed={400}
        easing="ease-out"
        forwardBtnProps={{
          children: <FaAngleRight />,
          className: "absolute -right-1 top-1/2 -translate-y-1/2 text-3xl text-neutral-100 bg-black rounded-full px-2 py-2 text-xl z-10",
        }}
        backwardBtnProps={{
          children: <FaAngleLeft />,
          className: "absolute left-5 top-1/2 -translate-y-1/2 text-3xl text-neutral-100 bg-black rounded-full px-2 py-2 text-xl z-10",
        }}
        responsiveProps={[
          { itemsToShow: 1, itemsToScroll: 1, minWidth: 0 },
          { itemsToShow: 2, itemsToScroll: 1, minWidth: 640 },   // sm
          { itemsToShow: 3, itemsToScroll: 1, minWidth: 1024 },  // lg
        ]}
        containerProps={{
          className: "justify-between select-none",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-[350px] md:w-[650px] lg:w-[800px] aspect-video"
          >
            <Image
              src={image.src}
              alt={`carousel-${index}`}
              width={2000}
              height={2000}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

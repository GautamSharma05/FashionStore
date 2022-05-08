import React, { useState, useEffect, useRef } from "react";

import { GrNext, GrPrevious } from "react-icons/gr";

const featuredProducts = [
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/846beb79-ada7-48c3-a6c6-4448f276c2111651599573979-Sports-Shoes_Desk.jpg",
];

let count = 0;
let slideInterval: NodeJS.Timer;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current?.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current?.addEventListener("animationend", removeAnimation);
    slideRef.current?.addEventListener("mouseenter", pauseSlider);
    slideRef.current?.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 10000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current?.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current?.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img src={featuredProducts[currentIndex]} alt="" />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className=" text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <GrPrevious size={40} />
        </button>
        <button
          className=" text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <GrNext size={40} />
        </button>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

// 

import { subTitleStyle, titleContainerStyle, titleStyle } from "../../lib/constants/services";
import { cardData } from "../../lib/data/data";
import type { TCard } from "../../types";

export default function ServicesSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation(0.3);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);

  return (
    <section className="w-full h-full flex flex-col justify-center py-2 px-4 lg:py-4 lg:px-8">
      {/* heading */}
      <div 
        ref={headingRef}
        className={`flex justify-center w-full my-6 lg:my-12 transition-all duration-700 ${
          headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-3xl md:4xl lg:text-5xl font-bold text-gray-900">What Do We Do</h1>
      </div>

      {/* slider card */}
      <div>
        {/* See all card btn */}
        <div className="flex lg:flex-row items-center flex-col-reverse lg:justify-end w-full md:px-4">
          <button className="bg-[#3e83fe] cursor-pointer text-left text-white text-sm md:text-md lg:text-lg px-3 py-1 lg:px-5 lg:py-2 rounded-sm">
            See All
          </button>
        </div>

        {/* cards */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:p-4"
        >
          {cardData?.slice(0, 3)?.map((card: TCard, index: number) => (
            <div
              key={index}
              className={`transition-all duration-700 hover:scale-105 hover:ease-out delay-100 hover:delay-0 shadow-lg w-full h-full flex flex-col items-center justify-center ${
                cardsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' 
              }}
            >
              <img
                className="w-64 h-64"
                src={`${card.image}` || "/placeholder.png"}
                alt={card.title || "card image"}
              />
              <div className="my-6">
                <h2 className="text-xl md:2xl lg:text-3xl font-bold text-black">
                  {card.title || "Card Title"}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* projects stats */}
      <div 
        ref={statsRef}
        className="flex flex-col md:flex-row items-center justify-center w-full my-10"
      >
        {[
          { number: "700+", label: "Project Done" },
          { number: "20+", label: "Team Member" },
          { number: "12+", label: "Years in Business" }
        ].map((stat, index) => (
          <div 
            key={index}
            className={`${titleContainerStyle} transition-all duration-700 ${
              statsVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-10 scale-95'
            }`}
            style={{ 
              transitionDelay: statsVisible ? `${index * 200}ms` : '0ms' 
            }}
          >
            <h2 className={titleStyle}>{stat.number}</h2>
            <p className={subTitleStyle}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

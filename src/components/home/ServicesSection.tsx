import { subTitleStyle, titleContainerStyle, titleStyle } from "../../lib/constants/services";
import { cardData } from "../../lib/data/data";
import type { TCard } from "../../types";

export default function ServicesSection() {


  return (
    <section className="w-full h-full flex flex-col justify-center py-2 px-4 lg:py-4 lg:px-8">
      {/* heading */}
      <div className="flex justify-center w-full my-6 lg:my-12">
        <h1 className="text-3xl md:4xl lg:text-5xl font-bold text-gray-900 ">What Do We Do</h1>
      </div>
      {/* slider card */}
      <div>
        {/* See all card btn */}
        <div className="flex lg:flex-row items-center flex-col-reverse lg:justify-end w-full md:px-4">
          <button className="bg-[#3e83fe] cursor-pointer text-left text-white text-sm md:text-md lg:text-lg px-3 py-1 lg:px-5 lg:py-2 rounded-sm">
            See All
          </button>
        </div>
        {/* card */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:p-4">
          {cardData?.slice(0, 3)?.map((card: TCard, index: number) => (
            <div
              key={index}
              className=" transition-transform hover:scale-105 hover:ease-out delay-100 hover:delay-0 hover:decoration-1 shadow-lg  w-full h-full flex flex-col items-center justify-center">
              <img
                className=" w-64 h-64"
                src={`${card.image}` || "/placeholder.png"}
                alt={card.title || "card image"}
              />
              <div className=" my-6">
                <h2 className="text-xl md:2xl lg:text-3xl font-bold text-black">
                  {card.title || "Card Title"}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* projects */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full my-10">
        <div className={titleContainerStyle}>
          <h2 className={titleStyle} >700+</h2>
          <p className={subTitleStyle}>Project Done</p>
        </div>
        <div className={titleContainerStyle}>
          <h2 className={titleStyle} >20+</h2>
          <p className={subTitleStyle}>Team Member</p>
        </div>
        <div className={titleContainerStyle}>
          <h2 className={titleStyle} >12+</h2>
          <p className={subTitleStyle}>Years in Business</p>
        </div>
      </div>
    </section>
  );
}

import { info } from "../../lib/data/data";
import type { IInfo } from "../../types";
import workingImage from "../../assets/working-desk.jpg";

export default function WhyUsSection() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-purple-50 py-2 px-4 lg:py-4 lg:px-8">
      {/* heading */}
      <div className=" flex justify-center w-full my-6 lg:my-12">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ">
          Why We Are Different
        </h1>
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row  justify-center">
        <div className="flex flex-col items-start lg:items-center md:justify-start lg:justify-center gap-6 w-full lg:w-1/2 md:p-4">
          {info?.map((item: IInfo, index: number) => (
            <div className="flex flex-row items-center justify-center gap-4 " key={index}>
              {/* logo */}
              <div className=" drop-shadow-lg bg-blue-300 p-2 w-12 h-12 flex items-center justify-center rounded-sm">
                <span>{item.logo || "logo"}</span>
              </div>
              <div className="flex flex-col items-start justify-center gap-1 ">
                {/* text */}
                <h1 className=" text-md md:text-lg lg:text-xl font-md text-gray-700">{item.heading || "heading"}</h1>
                <p className=" text-sm md:text-md lg:text-[16px] font-light text-gray-600  ">{item.description || "description"}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="500 w-full lg:w-1/2 h-full flex justify-center mt-12 lg:mt-0 ">
          <div className=" w-full lg:w-7/12 h-full flex  justify-center md:p-5 ">
            <div className="">
              <img 
              className="working-image w-full h-full object-cover"
                src={workingImage || "placeholder.png"}
                alt="working image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

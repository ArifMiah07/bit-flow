import uiUxImage from "../../assets/ui-ux.webp";
import developmentImage from "../../assets/development.webp";
import animationImage from "../../assets/animation.webp";

export default function ServicesSection() {
  type TCard = {
    title: string;
    image: string;
  };

  const cardData: TCard[] = [
    {
      title: "Ui/Ux",
      image: uiUxImage,
    },
    {
      title: "Development",
      image: developmentImage,
    },
    {
      title: "Animation",
      image: animationImage,
    },
    {
      title: "Analytics",
      image: developmentImage,
    },
  ];

  return (
    <section className=" w-full h-full flex flex-col justify-center">
      {/* heading */}
      <div className="flex  justify-center w-full my-6 lg:my-12">
        <h1 className="text-5xl font-bold text-gray-900 ">What Do We Do</h1>
      </div>
      {/* slider card */}
      <div>
        {/* See all card btn */}
        <div className="flex lg:flex-row items-center flex-col-reverse lg:justify-end w-full px-4">
          <button className="bg-[#3e83fe] text-left text-white px-4 py-2 rounded-sm">
            See All
          </button>
        </div>
        {/* card */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-4">
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
                <h2 className="text-3xl font-bold text-black">
                  {card.title || "Card Title"}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* projects */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full my-10">
        <div className="flex flex-col items-center justify-center gap-4 w-full p-4">
          <h2 className="font-bold text-5xl text-gray-800 " >700+</h2>
          <p className="text-lg font-medium text-gray-700">Project Done</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full p-4">
          <h2 className="font-bold text-5xl text-gray-800 " >20+</h2>
          <p className="text-lg font-medium text-gray-700">Team Member</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full p-4">
          <h2 className="font-bold text-5xl text-gray-800 " >12+</h2>
          <p className="text-lg font-medium text-gray-700">Years in Business</p>
        </div>
      </div>
    </section>
  );
}

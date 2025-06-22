import heroImage from "../../assets/hero-section.webp";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full min-h-[80vh] bg-[#f8f9ff] text-white">
      {/* hero text */}
      <div className="flex flex-col gap-6 p-4 justify-center ">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-left text-black font-bold ">
          We are a digital <br /> and creative <br /> agency
        </h1>
        <p className="text-md md:text-lg lg:text-xl text-gray-600 font-light ">
          We are a digital and creative agency that specializes in creating
          innovative solutions for businesses of all sizes. Our team of experts
          is dedicated to helping you achieve your goals through cutting-edge
          design and technology.
        </p>
        <button className="w-fit bg-[#3e83fe] px-5 py-3">Start A Project</button>
      </div>
      {/* hero image */}
      <div>
        <img
          src={heroImage ? heroImage : "/placeholder.png"}
          alt="hero image"
        />
      </div>
    </section>
  );
}

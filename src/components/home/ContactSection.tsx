import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center p-12 bg-[#3e83fe] mt-6 lg:mt-12 ">
      <div className="flex flex-col item-center justify-center w-full h-full gap-4 p-4 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center ">
          Lets Discuss your Project
        </h1>
        <p className="text-center text-white text-sm md:text-lg lg:text-xl font-light">
          We are here to help you with your project. Whether you have a
          question, need a quote, <br /> or just want to chat, feel free to
          reach out to us. We look forward to hearing from you!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full ">
        <Link to={"/"}>
          <button className="bg-white text-left text-gray-800 text-sm md:text-md lg:text-lg font-bold 
          px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-sm">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}

export default function ContactSection() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center  p-12 bg-[#3e83fe] ">
      <div className="flex flex-col item-center justify-center w-full h-full gap-4 p-4 ">
        <h1 className="text-5xl font-bold text-white text-center ">Lets Discuss your Project</h1>
        <p className="text-center text-white text-md md:text-lg lg:text-xl font-light">
            We are here to help you with your project. Whether you have a question, need a quote, <br />  or just want to chat, feel free to reach out to us. We look forward to hearing from you!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full ">
        <button className="bg-white text-left text-gray-800 text-lg font-bold px-6 py-3 rounded-sm">
          Get Started
        </button>
      </div>
    </section>
  );
}

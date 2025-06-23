export default function TestimonialSection() {
  return (
    <section className="flex flex-col items-center justify-center my-6 lg:my-12">
      {/* text */}
      <div className=" flex flex-col items-center justify-center w-full my-6 lg:my-12 ">
        <h3 className="text-md text-purple-500 font-medium uppercase my-6 ">Testimonial</h3>
        <h1 className="text-5xl font-bold text-gray-900 ">
          Clients Feedback
        </h1>
      </div>
      {/* image */}
      <div className="disc shadow-lg  relative w-full h-full flex flex-col lg:flex-row items-center justify-center gap-4 p-4">
        {/* center image */}
        <div className="border-2 border-purple-500 flex flex-col items-center justify-center gap-4 w-fit h-fit rounded-full  p-4">
            <img className="w-24 h-24 object-cover rounded-full " src="https://images.pexels.com/photos/32633454/pexels-photo-32633454.jpeg" alt="" />
        </div>
        {/* top left image */}
        <div className=" absolute drop-shadow-md left-10 top-10 border-1 border-purple-500 flex flex-col items-center justify-center gap-4 w-fit h-fit rounded-full p-0">
            <img className="w-16 h-16 object-cover rounded-full " src="https://images.pexels.com/photos/3831164/pexels-photo-3831164.jpeg" alt="" />
        </div>
        {/* top right image */}
        <div className="absolute drop-shadow-md right-10 top-10 border-1 border-purple-500 flex flex-col items-center justify-center gap-4 w-fit h-fit rounded-full p-0">
            <img className="w-16 h-16 object-cover rounded-full " src="https://images.pexels.com/photos/14070405/pexels-photo-14070405.jpeg" alt="" />
        </div>
        {/* bottom left image */}
        <div className="absolute drop-shadow-md left-10 bottom-10 border-1 border-purple-500 flex flex-col items-center justify-center gap-4 w-fit h-fit rounded-full p-0">
            <img className="w-16 h-16 object-cover rounded-full " src="https://images.pexels.com/photos/10896245/pexels-photo-10896245.png" alt="" />
        </div>
        {/* bottom right image */}
        <div className="absolute drop-shadow-md right-10 bottom-10 border-1 border-purple-500 flex flex-col items-center justify-center gap-4 w-fit h-fit rounded-full p-0">
            <img className="w-16 h-16 object-cover rounded-full " src="https://images.pexels.com/photos/29501967/pexels-photo-29501967.jpeg" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-4">
        <p className="text-md text-gray-600 font-light text-center w-full lg:w-1/2 p-4">
            "Working with this team has been a game-changer for our business. Their
            creativity and attention to detail are unmatched. We couldn't be happier
            with the results!"
        </p>
        <h3 className="text-lg font-semibold text-gray-800">David Smith</h3>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 w-full p-4 ">
        {
            Array(5).fill(0).map((_, index)=> <div className="bg-pink-500 rounded-full hover:bg-purple-500 delay-100 transition-transform ease-in-out hover:delay-75 duration-100 hover:duration-75 hover:scale-105 focus:w-3 focus:h-3 focus:border focus:border-pink-600 w-2 h-2" key={index}></div>)
        }
      </div>
    </section>
  );
}

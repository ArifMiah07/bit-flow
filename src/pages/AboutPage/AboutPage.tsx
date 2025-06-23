export default function AboutPage() {
  return (
    <section className=" min-h-screen mx-auto mb-6 lg:mb-12 flex flex-col lg:flex-row justify-between gap-4 p-12 ">
      {/* text */}
      <div className=" border border-gray-200 drop-shadow-lg rounded-md p-4 lg:p-12 w-full lg:1/2 flex flex-col items-start justify-between gap-6">
        <h4 className="text-md text-amber-500 font-medium  ">How it Started</h4>
        <h1 className="text-5xl text-gray-800 font-bold ">
          Our Dream is <br /> Global Leaning <br /> Transformation
        </h1>
        <p className="text-md text-gray-600 font-light">
          We are a team of passionate individuals who believe in the power of
          education to transform lives. Our journey began with a simple idea: to
          make quality education accessible to everyone, everywhere. We started
          small, with a few online courses, and quickly grew into a global
          platform that has helped thousands of learners achieve their goals.
          Our mission is to continue expanding our reach and impact, providing
          innovative and effective learning solutions that empower individuals
          to succeed in their personal and professional lives.
        </p>
      </div>
      {/* image */}
      <div className=" border border-gray-200 drop-shadow-lg rounded-md p-4 lg:p-12 w-full lg:1/2 flex flex-col items-end justify-start gap-6">
        <div className="w-full rounded-lg">
          <img
          className=" rounded-lg"
            src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center lg:text-left w-full">
          <div className="rounded-lg bg-slate-100 p-4 ">
            <h3 className="text-xl font-semibold text-gray-700 ">700+</h3>
            <p className="text-sm text-gray-500">Successful Projects Done</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 ">
            <h3 className="text-xl font-semibold text-gray-700 ">12+</h3>
            <p className="text-sm text-gray-500">Years In Business</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 ">
            <h3 className="text-xl font-semibold text-gray-700 ">20+</h3>
            <p className="text-sm text-gray-500">Team Member</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 ">
            <h3 className="text-xl font-semibold text-gray-700 ">600+</h3>
            <p className="text-sm text-gray-500">Positive Review</p>
          </div>
        </div>
      </div>
    </section>
  );
}

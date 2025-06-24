import projectImg from "../../assets/project.jpg";

export default function OurWorksPage() {
  return (
    <section className=" min-h-screen mx-auto mb-6 lg:mb-12 flex flex-col lg:flex-row justify-between gap-4 p-8 lg:p-12 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full ">
        <div className="col-span-1">
          <div className="flex flex-col items-center justify-center w-fit h-fit p-4 bg-blue-500 rounded-2xl ">
            <h1 className="text-md md:text-lg lg:text-xl font-bold text-white ">CapaCV</h1>
          </div>
        </div>
        <div className="col-span-1 hidden w-full h-full md:flex border-r border-dashed border-gray-600"></div>
        <div className="col-span-10 flex flex-col items-center justify-center lg:gap-6 lg:p-4">
          {/* text */}
          <div className="flex flex-col lg:flex-row items-start justify-center lg:gap-4 lg:p-4 w-full">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                CapaCV
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl opacity-80 text-gray-500"> Desktop Software Design</span>
              </h1>
              <p className="text-sm md:text-md lg:text-lg text-gray-600">
                CapaCV is a desktop application designed to help users create
                professional resumes and CVs with ease. It offers a
                user-friendly interface, customizable templates, and various
                formatting options to ensure that your resume stands out.
              </p>
            </div>
            {/* project image slider */}
            <div className="my-12 lg:my-4">
              <img
                className="project-image"
                src={projectImg || "placeholder.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

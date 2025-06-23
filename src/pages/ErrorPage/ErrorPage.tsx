import { Link } from "react-router-dom";
import notFoundImg from "../../assets/not-found.jpg";

export default function ErrorPage() {
  return (
    <section className=" min-h-screen mx-auto mb-4 flex flex-col items-center justify-center p-4 ">
      <div className="w-6/12 h-6/12 flex flex-col items-center gap-2 ">
        <img
        className="w-full h-full"
          src={notFoundImg || "placeholder.png"}
          alt="404 not found image "
        />
        <p className="text-md md:text:lg lg:text-xl font-medium text-gray-600 ">Page Not Found</p>
      </div>
      <div className="w-full h-full flex items-center justify-center my-4">
        <Link to="/">
          <button className="cursor-pointer text-md px-3 py-2 rounded-sm text-white bg-blue-500 hover:bg-purple-500 ">Back to Home</button>
        </Link>
      </div>
    </section>
  );
}
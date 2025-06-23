import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="w-full border-t border-gray-500 h-full flex flex-col items-center justify-center gap-4 p-8 text-gray-800">
      {/* logo */}
      <div className="flex items-center justify-start w-full">
        <Link to={"/"}>
          <span className="text-lg md:text-2xl lg:text-3xl text-purple-500 font-bold">
            Bit
          </span>
          <span className="text-lg md:text-2xl lg:text-3xl text-pink-500 font-bold">
            Flow
          </span>
        </Link>
      </div>
      {/* nav links */}
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-start gap-6">
        {/* menu */}
        <div className="w-full">
          <ul className="flex flex-col items-start justify-start gap-4">
            <li className="text-md text-gray-700 font-normal">
              <Link to="/">Home</Link>
            </li>
            <li className="text-md text-gray-700 font-normal">
              <Link to="/about-us">About</Link>
            </li>
            <li className="text-md text-gray-700 font-normal">
              <Link to="/our-works">Services</Link>
            </li>
            <li className="text-md text-gray-700 font-normal">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Connect */}
        <div className="w-full">
          <ul className="flex flex-col items-start justify-start gap-4">
            <li className="text-md text-gray-700 font-normal">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li className="text-md text-gray-700 font-normal">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li className="text-md text-gray-700 font-normal">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="text-md text-gray-700 font-normal">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        {/* stay in touch */}
        <div className="w-full flex flex-col gap-3">
         <div className="md:border md:border-blue-500 md:rounded-md flex flex-col md:flex-row items-center justify-between gap-4">
             <input
            className="outline-none  px-4 py-2 rounded-xl"
            placeholder="Enter your Email address"
            type="email"
            name=""
            id=""
          />
          <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
         </div>
          <p className="text-md text-gray-600 font-light">
            Stay in touch with us for latest updates and news.
          </p>
        </div>
      </div>
    </section>
  );
}

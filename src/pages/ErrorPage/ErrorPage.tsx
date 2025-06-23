import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="  min-h-screen mx-auto mb-6 lg:mb-12 flex flex-col lg:flex-row justify-between gap-4 p-12 ">
      <h1>404</h1>

      <p>Page not Found</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  );
}

import Footer from "../../pages/shared/Footer";
import NavBar from "../../pages/shared/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" mx-auto max-w-7xl ">
      <header className="">
        <NavBar></NavBar>
      </header>
      <main className="">{children}</main>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
}

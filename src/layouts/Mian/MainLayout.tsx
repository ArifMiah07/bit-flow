import Footer from "../../pages/shared/Footer";
import NavBar from "../../pages/shared/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" mx-auto max-w-7xl ">
      <header className="border-2 border-red-500">
        <NavBar></NavBar>
      </header>
      <main className="border-2 border-red-500">{children}</main>
      <footer className="border-2 border-red-500">
        <Footer></Footer>
      </footer>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/Mian/MainLayout";

export default function App() {
  return (
    <div className="mx-auto w-[98.5vw] min-h-screen">
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </div>
  );
}

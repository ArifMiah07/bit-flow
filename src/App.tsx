import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/Mian/MainLayout";

export default function App() {
  return (
    <div className="mx-auto w-full min-h-screen">
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </div>
  );
}

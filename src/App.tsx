import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/Mian/MainLayout";

export default function App() {
  return (
    <div className="border-2 border-red-500 p-2 min-w-screen min-h-screen ">
      <h1> Flow Bit App</h1>
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
export function Layout() {
  return (
    <div className="h-screen pt-10  mx-5">
      <Header />
      <Outlet />
    </div>
  );
}

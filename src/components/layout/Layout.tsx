import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
export function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full pl-5 pr-5">
      <div className=" hidden md:flex pt-10">
        <Header />
      </div>
      <div className=" md:hidden">
        <Menu />
      </div>
      <Outlet />
    </div>
  );
}

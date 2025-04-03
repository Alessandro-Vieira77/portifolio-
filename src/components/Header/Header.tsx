import { Link } from "react-router-dom";
// icons
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
// img
import logo from "/img/logo.png";

export function Header() {
  return (
    <header className="flex justify-between w-full max-w-6xl h-14 mx-auto">
      <img className="h-14 object-contain mr-11" src={logo} alt="logo" />
      <div className="flex w-full max-w-2xl items-center gap-4 ">
        <nav className="flex justify-around items-center w-full max-w-2xl font-medium text-zinc-600">
          <Link className="" to={"/"}>
            Home
          </Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/techstack"}>Tech Stack</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contacts"}>Contacts</Link>
        </nav>
        <div className="flex items-center gap-5 ">
          <a href="#">
            <FaGithub size={30} color="#666666" />
          </a>
          <a href="#">
            <AiFillTwitterCircle
              className="rounded-full"
              size={34}
              color="#666666"
            />
          </a>
          <a href="#">
            <BsLinkedin className=" rounded-full" size={30} color="#666666" />
          </a>
        </div>
      </div>
    </header>
  );
}

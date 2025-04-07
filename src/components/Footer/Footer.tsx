import { Link } from "react-router-dom";

// icons
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
// img
import logo from "/img/logo.png";

export function Footer() {
  return (
    <footer className="flex flex-col justify-between w-full max-w-6xl h-14 mx-auto">
      <div className="w-full flex justify-between pb-4 border-b-2 border-zinc-400">
        <img className="h-14 object-contain mr-11" src={logo} alt="" />
        <div className="flex flex-col gap-1 items-end md:flex-row  w-567 justify-between md:items-cente">
          <p>+91 12345 09876</p>
          <p>info@example.com</p>
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
      </div>
      <div className="w-full flex  items-center md:items-start justify-between pt-4">
        <nav className="flex justify-between items-center w-md  font-medium text-zinc-600">
          <Link className="" to={"/"}>
            Home
          </Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/techstack"}>Tech Stack</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contacts"}>Contacts</Link>
        </nav>
      </div>
    </footer>
  );
}

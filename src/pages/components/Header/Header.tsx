import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <nav className="flex justify-center items-center gap-8 w-full max-w-6xl h-14">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/techstack"}>Tech Stack</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contacts"}>Contacts</Link>
      </nav>
    </header>
  );
}

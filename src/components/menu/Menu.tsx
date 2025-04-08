import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/img/logo.png";

// icons
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

export default function Menu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-2">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/">Home</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/about">About</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/techstack">Tech Stack</Link>
              </li>

              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/contacts">Contacts</Link>
              </li>
              <li className="flex items-center gap-3 mt-8">
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
                  <BsLinkedin
                    className=" rounded-full"
                    size={30}
                    color="#666666"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

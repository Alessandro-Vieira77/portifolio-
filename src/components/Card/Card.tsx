import image1 from "/img/Rectangle4.png";

import { IoIosLink } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";

export function Card() {
  return (
    <div className="flex flex-col justify-self-center gap-5 w-65 md:w-xs rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-40 md:h-50 rounded-t-2xl" src={image1} alt="" />
      <div className="flex flex-col gap-2 px-5">
        <h2 className="text-base md:text-2xl font-medium">
          Project Tile goes here
        </h2>
        <p className="text-sm text-left md:text-xl text-zinc-500">
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </p>
        <p className="text-sm md:text-base text-zinc-500">
          <span className="text-sm md:text-base font-medium text-indigo-900">
            Tech stack
          </span>{" "}
          : HTML , JavaScript, SASS, React
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-between px-5 mb-5">
        <a
          className="text-sm md:text-base flex gap-1 items-center font-medium hover:border-b-2 border-black"
          href="#"
        >
          <IoIosLink size={18} />
          Live Preview
        </a>
        <a
          className="text-sm md:text-base flex gap-1 items-center font-medium hover:border-b-2 border-black"
          href="#"
        >
          <AiFillGithub size={18} />
          View Code
        </a>
      </div>
    </div>
  );
}

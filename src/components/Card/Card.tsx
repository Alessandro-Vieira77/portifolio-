import { ProjectPorps } from "../../pages/Projects/Projects";

import { IoIosLink } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";

export function Card({
  title,
  description,
  technologies,
  view,
  code,
  img,
}: ProjectPorps) {
  return (
    <div className="flex flex-col justify-self-center gap-5 w-65 md:w-xs rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-40 md:h-50 rounded-t-2xl object-center border-b-2 border-zinc-500"
        src={img}
        alt="cart e-comerce"
      />
      <div className="flex flex-col gap-2 px-5">
        <h2 className="text-base md:text-2xl font-medium">{title}</h2>
        <p className="text-sm text-left md:text-xl text-zinc-500">
          {description}
        </p>
        <p className="text-sm md:text-base text-zinc-500">
          <span className="text-sm md:text-base font-medium text-indigo-900">
            Tech stack
          </span>{" "}
          : {technologies}
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-between px-5 mb-5">
        <a
          className="text-sm md:text-base flex gap-1 items-center font-medium hover:border-b-2 border-black"
          href={view}
          target="_blank"
        >
          <IoIosLink size={18} />
          Live Preview
        </a>
        <a
          className="text-sm md:text-base flex gap-1 items-center font-medium hover:border-b-2 border-black"
          href={code}
          target="_blank"
        >
          <AiFillGithub size={18} />
          View Code
        </a>
      </div>
    </div>
  );
}

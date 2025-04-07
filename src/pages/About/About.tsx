import { MdOutlineLocationCity } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export function About() {
  return (
    <main
      className="w-full max-w-6xl min-h-96 mx-auto flex mt-8 md:mt-20 
  "
    >
      <div className="flex flex-col gap-8 w-2xl">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4">
            About
          </h1>
          <p className="text-xs md:text-base text-zinc-500">
            Hi, I'm Alessandro, a front-end developer. I'm passionate about
            technology, and programming won me over — especially the front-end
            side. Seeing the visual part come to life is incredible. Since then,
            I've been studying and gaining experience in this field to
            specialize more and continuously improve my skills with discipline,
            effort, courage, and consistency, always striving to become a better
            professional every day.
          </p>
        </div>
        <div className="flex gap-4 flex-col w-full">
          <h1 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4">
            Work Experience
          </h1>
          {/* Junior Web Developer */}
          <div className="w-full">
            <div className="w-full flex items-center justify-between mb-1">
              <p className="text-sm md:text-xl text-zinc-800">
                internship Front-end - AWS Cloud Context
              </p>
              <p className="w-20 h-6 flex justify-center items-center text-green-700 bg-green-300 rounded-full text-xs font-bold">
                Full Time
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col md:flex-row gap-0 md:gap-10">
                <p className="flex gap-1 items-center font-medium text-xs text-zinc-500">
                  <MdOutlineLocationCity size={16} className="text-zinc-500" />{" "}
                  Compass Uol
                </p>
                <p className="flex items-center gap-1 font-medium text-xs text-zinc-500">
                  <CiLocationOn size={16} className="text-zinc-500" /> Remote
                </p>
              </div>
              <p className="font-medium text-xs text-zinc-500">
                Sep 2024 - feb 2025
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4">
            Education
          </h1>
          <div className="w-full">
            <div className="w-full flex items-center justify-between mb-1">
              <p className="text-sm md:text-xl text-zinc-800">
                Software engineering
              </p>
              <p className="h-6 px-2 flex justify-center items-center text-white bg-orange-300 rounded-full text-xs font-bold">
                in progress
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-10">
                <p className="flex  gap-1 items-center font-medium text-xs text-zinc-500">
                  <MdOutlineLocationCity size={16} className="text-zinc-500" />{" "}
                  Uniasselvi Institute
                </p>
              </div>
              <p className="font-medium text-xs text-zinc-500">feb 2024</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

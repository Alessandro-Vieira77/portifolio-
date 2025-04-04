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
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
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
                Junior Web Developer
              </p>
              <p className="w-20 h-6 flex justify-center items-center text-green-700 bg-green-300 rounded-full text-xs font-bold">
                Full Time
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col md:flex-row gap-0 md:gap-10">
                <p className="flex gap-1 items-center font-medium text-xs text-zinc-500">
                  <MdOutlineLocationCity size={16} className="text-zinc-500" />{" "}
                  Dr. Rajkumar’s Learning App
                </p>
                <p className="flex items-center gap-1 font-medium text-xs text-zinc-500">
                  <CiLocationOn size={16} className="text-zinc-500" /> Bengaluru
                </p>
              </div>
              <p className="font-medium text-xs text-zinc-500">
                Sep 2021 - Dec 2021
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full flex items-center justify-between mb-1">
              <p className="text-sm md:text-xl text-zinc-800">
                Junior Web Developer
              </p>
              <p className="w-20 h-6 flex justify-center items-center text-green-700 bg-green-300 rounded-full text-xs font-bold">
                Full Time
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col md:flex-row gap-0 md:gap-10">
                <p className="flex gap-1 items-center font-medium text-xs text-zinc-500">
                  <MdOutlineLocationCity size={16} className="text-zinc-500" />{" "}
                  Dr. Rajkumar’s Learning App
                </p>
                <p className="flex items-center gap-1 font-medium text-xs text-zinc-500">
                  <CiLocationOn size={16} className="text-zinc-500" /> Bengaluru
                </p>
              </div>
              <p className="font-medium text-xs text-zinc-500">
                Sep 2021 - Dec 2021
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full flex items-center justify-between mb-1">
              <p className="text-sm md:text-xl text-zinc-800">
                Junior Web Developer
              </p>
              <p className="w-20 h-6 flex justify-center items-center text-green-700 bg-green-300 rounded-full text-xs font-bold">
                Full Time
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col md:flex-row gap-0 md:gap-10">
                <p className="flex gap-1 items-center font-medium text-xs text-zinc-500">
                  <MdOutlineLocationCity size={16} className="text-zinc-500" />{" "}
                  Dr. Rajkumar’s Learning App
                </p>
                <p className="flex items-center gap-1 font-medium text-xs text-zinc-500">
                  <CiLocationOn size={16} className="text-zinc-500" /> Bengaluru
                </p>
              </div>
              <p className="font-medium text-xs text-zinc-500">
                Sep 2021 - Dec 2021
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
              <p className="w-20 h-6 flex justify-center items-center text-green-700 bg-green-300 rounded-full text-xs font-bold">
                Full Time
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-10">
                <p className="flex  gap-1 items-center font-medium text-xs text-zinc-500">
                  <MdOutlineLocationCity size={16} className="text-zinc-500" />{" "}
                  Bangalore Instutute of Technology
                </p>
              </div>
              <p className="font-medium text-xs text-zinc-500">
                Sep 2021 - Dec 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

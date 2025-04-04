import { Tools } from "../../components/Tools/Tools";

// icons
import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { LiaAws } from "react-icons/lia";

export function TechStack() {
  return (
    <main className="w-full max-w-6xl h-96 mx-auto flex flex-col gap-8 mt-8 md:mt-20 ">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 md:mb-7">
          My Tech Stack
        </h1>
        <p className="text-sm md:text-xl text-zinc-500">
          {" "}
          Technologies I’ve been working with recently
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-4 gap-5">
          <Tools>
            <h1 className="text-base md:text-xl font-medium">React</h1>
            <FaReact className="h-16 w-16 md:h-20 md:w-20" color="#61DAFB" />
          </Tools>
          <Tools>
            <h1 className="text-base md:text-xl font-medium">TypeScript</h1>
            <SiTypescript
              className="h-16 w-16 md:h-20 md:w-20"
              color="#3178c6"
            />
          </Tools>
          <Tools>
            <h1 className="text-base md:text-xl font-medium">JavaScript</h1>
            <IoLogoJavascript
              className="h-16 w-16 md:h-20 md:w-20"
              color="oklch(85.2% 0.199 91.936)"
            />
          </Tools>
          <Tools>
            <h1 className="text-base md:text-xl font-medium">Tailwindcss</h1>
            <RiTailwindCssFill
              className="h-16 w-16 md:h-20 md:w-20"
              color="#00bcff"
            />
          </Tools>
          <Tools>
            <h1 className="text-base md:text-xl font-medium">Git</h1>
            <FaGitAlt className="h-16 w-16 md:h-20 md:w-20" color="#F05133" />
          </Tools>
          <Tools>
            <h1 className="text-base md:text-xl font-medium">GitHub</h1>
            <FaGithubSquare
              className="h-16 w-16 md:h-20 md:w-20"
              color="#010409"
            />
          </Tools>
          <Tools>
            <h1 className="text-base md:text-xl font-medium">Redux</h1>
            <TbBrandRedux
              className="h-16 w-16 md:h-20 md:w-20"
              color="#764ABC"
            />
          </Tools>
          <Tools>
            <h1 className="text-base md:text-xl font-medium">Nodejs</h1>
            <FaNodeJs className="h-16 w-16 md:h-20 md:w-20" color="#417E38" />
          </Tools>
          <Tools>
            <h1 className="text-base md:text-xl font-medium">Nextjs</h1>
            <RiNextjsFill className="h-16 w-16 md:h-20 md:w-20" color="black" />
          </Tools>
          <Tools>
            <h1 className="text-base md:text-xl font-medium">FireBase</h1>
            <IoLogoFirebase
              className="h-16 w-16 md:h-20 md:w-20"
              color="orange"
            />
          </Tools>
          <Tools>
            <h1 className="text-base md:text-xl font-medium">AWS</h1>
            <LiaAws className="h-16 w-16 md:h-20 md:w-20" color="orange" />
          </Tools>
        </div>
      </div>
    </main>
  );
}

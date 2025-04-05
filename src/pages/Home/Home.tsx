import imgPerfil from "/img/imgPerfil.png";
export function Home() {
  return (
    <main className="w-full max-w-6xl h-96 mx-auto flex justify-center items-center mt-30">
      <div className="w-full flex items-center gap-5 flex-col-reverse md:flex-row justify-between">
        <h1 className="text-2xl text-center md:text-left md:text-6xl w-full md:w-96">
          Hello 👋, My name is{" "}
          <span className=" text-2xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent">
            Alessandro Vieira
          </span>{" "}
          I am a Dev Front-end
        </h1>
        <div className="p-2 bg-linear-65 from-purple-500 to-pink-500 rounded-full">
          <img
            className="w-48 h-48 md:w-80 md:h-80  rounded-full"
            src={imgPerfil}
            alt="image profile"
          />
        </div>
      </div>
    </main>
  );
}

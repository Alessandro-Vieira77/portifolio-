import { Card } from "../../components/Card/Card";

export function Projects() {
  return (
    <main className="flex flex-col gap-8 w-full max-w-6xl mx-auto mt-10 pb-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl md:text-4xl font-bold text-indigo-900">
          Projects
        </h1>
        <p className="text-base md:text-xl text-zinc-500">
          Things I’ve built so far
        </p>
      </div>
      <div className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

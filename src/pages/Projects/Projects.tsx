import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { db } from "../../service/db";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";

export interface ProjectPorps {
  id?: number;
  title: string;
  description: string;
  technologies: string;
  view: string;
  code: string;
  img?: string;
}

export function Projects() {
  const [projects, setProjects] = useState<ProjectPorps[]>([]);

  useEffect(() => {
    async function getDB() {
      const dbproject = await collection(db, "projects");
      const queryRef = query(dbproject, orderBy("id", "asc"));
      let arrayDB = [] as ProjectPorps[];
      const onsub = onSnapshot(queryRef, (snapshot) => {
        snapshot.forEach((doc) => {
          arrayDB.push({
            id: doc.data().id,
            title: doc.data().title,
            description: doc.data().description,
            technologies: doc.data().technologies,
            view: doc.data().view,
            code: doc.data().code,
            img: doc.data().img,
          });
          setProjects(arrayDB);
        });
        onsub;
      });
    }
    getDB();
  }, []);

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
        {projects.map((project) => (
          <Card
            key={project?.id}
            title={project?.title}
            description={project?.description}
            technologies={project?.technologies}
            view={project?.view}
            code={project?.code}
            img={project?.img}
          />
        ))}
      </div>
    </main>
  );
}

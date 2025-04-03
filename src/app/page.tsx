'use client';
import ResumeForm from "@/app/components/ResumeForm";
import AddComponents from "@/app/components/AddComponents";
import RemoveComponents from "@/app/components/RemoveComponents";
import { useState } from "react";

export default function Home() {

  const [unincludedContactComponents, setUnincludedContactComponents] = useState<string[]>(["LinkedIn", "GitHub", "Portfolio"]);
  const [includedContactComponents, setIncludedContactComponents] = useState<string[]>([]);
  // const [resumeSections, setResumeSections] = useState<string[]>([]);

  const addContactComponent = (component: string) => {
    setUnincludedContactComponents(unincludedContactComponents.filter((c) => c !== component));
    setIncludedContactComponents([...includedContactComponents, component]);
  }

  const removeContactComponent = (component: string) => {
    setIncludedContactComponents(includedContactComponents.filter((c) => c !== component));
    setUnincludedContactComponents([...unincludedContactComponents, component]);
  }

  return (
    <main className="flex gap-4 h-screen p-4">
      <ResumeForm />
      <aside className="flex flex-col gap-4 w-2/5">
        <AddComponents contactComponents={unincludedContactComponents} addContactComponent={addContactComponent} />
        <RemoveComponents contactComponents={includedContactComponents} removeContactComponent={removeContactComponent} />
      </aside>
    </main>
  );
}

import { useContext } from 'react';
import CardProjects from '../Components/CardProjects.tsx';
import { ProjectContext } from '../context/ProjectContext.tsx';

export default function Projects() {
  const { projectList, isLoading } = useContext(ProjectContext);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5 lg:text-6xl">
        Projetos
      </h1>
      {isLoading ? <p>Loading</p> : <CardProjects value={ projectList } /> }
    </div>
  );
}

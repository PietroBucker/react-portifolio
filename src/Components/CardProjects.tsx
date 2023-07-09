import React from 'react';
import { ResponseApiType } from '../context/ProjectContext.tsx';
import { card } from '../Pages/Home.tsx';

type Props = {
    value: ResponseApiType[]
}
const CardProjects: React.FC<Props> = ({ value }) => {
  return (
    <div
      className="flex flex-col items-center text-center w-4/5 lg:items-stretch
    lg:flex-row lg:flex-wrap lg:w-1/1 lg:justify-center"
    >
      {value.map((project) => (
        <div key={ project.id } className={ `${card} md:w-1/2 p-5 lg:w-3/12` }>
          <p className="mb-4">
            {project.name}
          </p>
          <a href={ project.html_url } target="blank">
            <img
              src={ project.image }
              alt={ project.name }
              className="m-auto h-2/3 w-2/3"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardProjects;

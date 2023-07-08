import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import ApiRequest from './ApiRequest.tsx';

export type ResponseApiType = {
    id: string,
    name: string,
    html_url: string,
    image: string
  }

export type Context = {
    isLoading: boolean,
    projectList: ResponseApiType[],
}

const initialValue: Context = {
  isLoading: false,
  projectList: [],
};

export const ProjectContext = createContext<Context>(initialValue);

export const ProjectProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [projectList, setProjectList] = useState<ResponseApiType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    ApiRequest.ApiFetch()
      .then((teste) => setProjectList(teste))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ProjectContext.Provider
      value={ {
        isLoading,
        projectList,
      } }
    >
      {children}
    </ProjectContext.Provider>);
};

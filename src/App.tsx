/* eslint-disable react/function-component-definition */
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';
import Header from './Components/Header.tsx';
import Projects from './Pages/Projects.tsx';
import { ProjectProvider } from './context/ProjectContext.tsx';

const App: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-transparent via-[#002C00] to-transparent
      h-screen font-[Matrix] fixed overflow-auto
      sm:h-full
      lg:h-screen"
    >
      <Header />
      <Switch>
        <Route path="/about" component={ About } />
        {/* <Route path="/projects" component={ Projects } /> */}
        <Route path="/projects">
          <ProjectProvider>
            <Projects />
          </ProjectProvider>
        </Route>
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
};

export default App;

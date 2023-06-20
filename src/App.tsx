import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';
import Header from './Components/Header.tsx';
import Projects from './Pages/Projects.tsx';

function App() {
  return (
    <div
      className="bg-gradient-to-r from-black via-green-950 to-black
      text-white h-screen font-[Matrix]
      sm:h-full
      lg:h-screen"
    >
      <Header />
      <Switch>
        <Route path="/about" component={ About } />
        <Route path="/projects" component={ Projects } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className="mb-3 h-20 rounded-md flex items-center text-lg
    justify-between w-screen p-3  bg-green-900 shadow-md shadow-lime-700"
    >
      PIETRO BUCKER
      <div className="flex justify-between w-2/5 p-1 lg:w-2/12">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </header>
  );
}

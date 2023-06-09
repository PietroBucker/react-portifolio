import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className="mb-3 h-20 rounded-md flex items-center text-md
    justify-between w-screen p-3  bg-green-900 shadow-md shadow-lime-700 bg-opacity-70
    lg:mb-20 lg:text-xl lg:pl-10"
    >
      PIETRO BUCKER
      <div className="flex justify-around w-3/6 p-1 lg:justify-end lg:gap-28 lg:mr-10">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </header>
  );
}

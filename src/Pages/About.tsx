import { complet, hardSkills, resumed, softSkills } from '../pessoalInf.tsx';

const aboutCSS = `bg-gradient-to-tl from-green-800 shadow-md shadow-lime-700
bg-opacity-40 rounded-lg w-1/2 p-5
sm:w-1/3 lg:w-1/6`;

export default function About() {
  const teste = false;
  return (
    <div className="flex-col m-auto">
      <section
        className="bg-gradient-to-tl from-green-800 shadow-md shadow-lime-700
        bg-opacity-40 rounded-lg m-10 mt-14 p-7
        lg:m-36"
      >
        <h1 className="text-2xl mb-5">Sobre Mim</h1>
        <p className="leading-6 text-justify lg:text-2xl lg:m-10">
          {teste ? resumed : complet}
        </p>
      </section>
      <div className="flex flex-col">

        <h2 className="text-center text-4xl mb-5">Minhas Habilidades</h2>

        <h3 className="text-center text-3xl mb-5">Hard Skills</h3>
        <section className="flex justify-center gap-5 text-center items-center flex-wrap">
          {hardSkills.map((hardSkill, ind) => (
            <p key={ ind } className={ `${aboutCSS} text-2xl` }>{hardSkill}</p>))}
        </section>

        <h3 className="text-center text-3xl mb-5 mt-10">Soft Skills</h3>
        <section
          className="flex justify-center gap-5 text-center
          items-stretch flex-wrap"
        >
          {softSkills.map((softSkill, ind) => (
            <p
              key={ ind }
              className={ `${aboutCSS} text-2xl flex place-items-center justify-center ` }
            >
              {softSkill}

            </p>))}
        </section>
      </div>
    </div>
  );
}

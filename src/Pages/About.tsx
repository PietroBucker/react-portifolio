import { complet, resumed } from '../pessoalInf.tsx';

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
      <div className="">

        <h2>Minhas Habilidades</h2>

        <h3>Hard Skills</h3>
        <section>
          teste
          <img src="" alt="" />
        </section>
        <h3>Soft Skills</h3>
        <section>
          <img src="" alt="" />
        </section>
      </div>
    </div>
  );
}

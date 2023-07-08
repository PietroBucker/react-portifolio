import foto from '../../public/foto3.png';
import linkedin from '../../public/linkedin.png';
import github from '../../public/github.png';
import whatsapp from '../../public/whatsapp.png';

export const card = `bg-gradient-to-tl from-green-800 shadow-lime-700
shadow-[5px_10px_15px_-5px_rgba(0,0,0,0.3)]
bg-opacity-40 rounded-lg m-5
lg:w-2/5 lg:pb-5`;

export default function Home() {
  return (
    <div
      className="w-auto h-auto flex items-center justify-center flex-col m-auto
        sm:flex-row flex-wrap justify-around"
    >
      <img
        className="rounded-full border-8 border-double border-green-600 w-3/6 mt-10 mb-5
        opacity-80
        sm:w-2/6
        lg:w-1/3"
        src={ foto }
        alt="Foto Pietro"
      />
      <div
        className="bg-gradient-to-tl from-green-800 shadow-lime-700
        shadow-[5px_10px_15px_-5px_rgba(0,0,0,0.3)]
        bg-opacity-40 rounded-lg m-5
        lg:w-2/5 lg:pb-5"
      >
        <div
          className="flex flex-col place-items-start m-3 text-md ml-6
          "
        >
          <h1
            className="text-3xl font-bold mb-5
          lg:text-6xl"
          >
            Olá!

          </h1>
          <h2 className="lg:text-4xl mb-5">Meu nome é Pietro Canuto Bucker Franchini</h2>
          <h3 className="lg:text-xl lg:mb-14">Desenvolvedor FULL-STACK-JR</h3>
        </div>
        <div className="flex justify-around gap-10 relative lg:justify-end lg:mr-10">
          <a href="https://www.linkedin.com/in/pietro-bucker-dev/">
            <img src={ linkedin } alt="linkedin" className="w-14 lg:w-20" />
          </a>
          <a href="https://github.com/PietroBucker/">
            <img src={ github } alt="github" className="w-14 lg:w-20" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5516982201928&text=whatspietro">
            <img src={ whatsapp } alt="whatsapp" className="w-14 lg:w-20" />
          </a>
        </div>
      </div>

    </div>
  );
}

import foto from '../../public/foto.jpg';

export default function Home() {
  return (
    <div
      className="w-auto h-auto flex items-center justify-center flex-col m-auto
        sm:flex-row flex-wrap justify-around"
    >
      <img
        className="rounded-full w-3/6 mt-10 mb-5
        sm:w-2/6 "
        src={ foto }
        alt="Foto Pietro"
      />
      <div
        className="bg-gradient-to-tl from-green-800 shadow-lime-700
        shadow-[5px_10px_15px_-5px_rgba(0,0,0,0.3)]
        bg-opacity-40 rounded-lg m-5"
      >
        <div
          className="flex flex-col place-items-start m-3 text-md ml-6
          "
        >
          <h1 className="text-3xl font-bold mb-5">Olá!</h1>
          <h2>Meu nome é Pietro Canuto Bucker Franchini</h2>
          <h3>Desenvolvedor FULL-STACK-JR</h3>
        </div>
        <div className="flex justify-around gap-5 relative -bottom-14">
          <a href="https://www.linkedin.com/in/pietro-bucker-dev/">Linkedin</a>
          <a href="https://github.com/PietroBucker/">GitHub</a>
          <a href="https://api.whatsapp.com/send?phone=5516982201928&text=whatspietro">WhatsApp</a>
        </div>
      </div>

    </div>
  );
}

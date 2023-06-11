export default function Home() {
  return (
    <div
      className="w-auto h-auto flex items-center justify-center flex-col m-5
        lg:flex-row flex-wrap justify-around"
    >
      <img
        className="rounded-full w-4/12 mt-10 mb-5
        lg:w-2/6 "
        src="react-portifolio/public/foto.jpg"
        alt="Foto Pietro"
      />
      <div
        className="h-auto bg-gradient-to-tl from-green-800 shadow-lime-700
        shadow-[7px_10px_15px_-5px_rgba(0,0,0,0.3)]
        bg-opacity-40 rounded-lg p-2"
      >
        <div
          className="flex flex-col place-items-start m-3 text-xl ml-5 mb-10 mt-10
          lg:text-4xl space-y-2"
        >
          <h1 className="text-3xl font-bold lg:text-4xl">Olá!</h1>
          <h2>Meu nome é Pietro Canuto Bucker Franchini</h2>
          <h3>Desenvolvedor FULL-STACK</h3>
        </div>
        <div className=" flex justify-between ml-5 lg:justify-normal gap-5">
          <a href="https://www.linkedin.com/in/pietro-bucker-dev/">Linkedin</a>
          <a href="https://github.com/PietroBucker/">GitHub</a>
          <a href="https://api.whatsapp.com/send?phone=5516982201928&text=whatspietro">WhatsApp</a>
        </div>
      </div>

    </div>
  );
}

import CardBot from "../components/CardBots/CardBots";
import CarroselDetails from "../components/CarroselDetails/CarroselDetails";
import Doubts from "../components/Doubts/Doubts";
import Header from "../components/Header/Header";

export default function Page() {
  return (
    <>
      <Header />
      <img src="/HomeWallpaper.png" alt="mainImage" className="w-full object-cover max-h-[600px]" />
      <div className="text-center p-2 mb-10 mt-2" id="bots">
        <h1>🌟 Eficiência e segurança. Experimente a inovação da Infinity Store!🏷️🌟</h1>
      </div>

      <section className="cardBotItems">
        <h1 className="text-center font-bold text-3xl" data-aos="fade-right" data-aos-duration="1000">
          Nossos Bots
        </h1>
        <CardBot />

        <h1 className="text-center font-bold text-3xl mt-10" data-aos="fade-right" data-aos-duration="1000">
          Detalhes
        </h1>
        <CarroselDetails />
      </section>
      <section className="p-2 flex flex-col items-center">
        <h1
          className="text-center font-bold text-3xl mt-10 mb-4"
          id="duvidas"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Dúvidas
        </h1>
        <Doubts />
      </section>
    </>
  );
}

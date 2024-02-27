import CardBot from "../components/CardBots/CardBots";
import CarroselDetails from "../components/CarroselDetails/CarroselDetails";
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
      <section>
        <h1 className="text-center font-bold text-3xl mt-10" data-aos="fade-right" data-aos-duration="1000">
          Perguntas Frequentes
        </h1>
        
      </section>
    </>
  );
}

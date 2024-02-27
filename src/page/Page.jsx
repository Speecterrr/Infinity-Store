import CardBot from "../components/CardBots/CardBots";
import CarroselDetails from "../components/CarroselDetails/CarroselDetails";
import Doubts from "../components/Doubts/Doubts";
import Header from "../components/Header/Header";
import PaymentMethod from "../components/PaymentMethods/PaymentMethods";

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
      <span id="doubts" className="mt-10"></span>
      <section className="p-2 flex flex-col items-center">
        <h1 className="text-center font-bold text-3xl mt-10 mb-4" data-aos="fade-right" data-aos-duration="1000">
          Dúvidas
        </h1>
        <Doubts />
      </section>

      <section className="paymentsMethods flex flex-col items-center" id="paymentMethods">
        <h1 className="text-center font-bold text-3xl mt-10 mb-4" data-aos="fade-right" data-aos-duration="1000">
          Métodos de Pagamento
        </h1>
        <div data-aos="fade-up" data-aos-duration="1000">
          <PaymentMethod />
        </div>
      </section>

      <footer className="p-4 px-8 flex flex-wrap justify-between items-center w-full bg-indigo-950 mt-20">
        <h1 className="font-bold text-2xl">Infinity Store</h1>
        <div className="flex items-center flex-col gap-1">
          <div className="flex items-center gap-1">
            <p className="text-2xl mb-1">©</p>
            <h1>Criado por Matheus Sousa</h1>
          </div>

          <button className="bg-indigo-800 py-1 px-2 rounded transition duration-300 hover:bg-indigo-400">
            <p>Veja</p>
          </button>
        </div>
      </footer>
    </>
  );
}

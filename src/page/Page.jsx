import CardBot from "../components/CardBots/CardBots";
import CarroselDetails from "../components/CarroselDetails/CarroselDetails";
import Doubts from "../components/Doubts/Doubts";
import Header from "../components/Header/Header";
import PaymentMethod from "../components/PaymentMethods/PaymentMethods";
import "./Page.scss";

export default function Page() {
  return (
    <>
      <Header />
      <img src="/HomeWallpaper.png" alt="mainImage" className="w-full object-cover max-h-[600px] mainImg" />
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

      <footer className="p-6 px-8 flex flex-wrap justify-between items-center w-full bg-indigo-950 mt-20">
        <h1 className="font-bold text-2xl">Infinity Store</h1>
        <div className="flex items-center flex-col gap-1">
          <div className="flex items-center gap-1">
            <p className="text-2xl mb-1">©</p>
            <h1>
              Criado por{" "}
              <a
                className="border-b border-black transition duration-200 text-blue-700 hover:text-blue-300"
                href="https://www.linkedin.com/in/matheussousadev/"
                target="blank"
              >
                Matheus Sousa
              </a>
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
}

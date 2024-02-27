import CardBotItem from "./CardBotItem/CardBotItem";
import "./CardBots.scss";
import AOS from "aos";

export default function CardBot() {
  AOS.init();
  return (
    <div className="p-5 flex flex-wrap justify-center items-center gap-8">
      <div data-aos="fade-up" data-aos-duration="1000">
        <CardBotItem>
          <h1 className="text-center font-bold text-xl mb-2">Recrutamento</h1>
          <div className="p-2 flex justify-center flex-col">
            <ul className="flex flex-col gap-2">
              <li>- Coletar informações dos candidatos através de formulários.</li>
              <li>- Enviar notificações aos administradores para avaliar as candidaturas.</li>
            </ul>
            <button className="mt-24 p-2 button rounded">
              <a href="https://discord.gg/wyXW7uzX" target="blank" className="font-bold">
                Mais Detalhes
              </a>
            </button>
          </div>
        </CardBotItem>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <CardBotItem>
          <h1 className="text-center font-bold text-xl mb-2">Criação de Call Privadas</h1>
          <div className="p-2 flex justify-center flex-col">
            <ul className="flex flex-col gap-2">
              <li>- Permitir a criação de canais de voz temporários e privados para comunicações internas..</li>
              <li>- Configurar permissões para que apenas membros autorizados possam acessar esses canais.</li>
            </ul>
            <button className="mt-12 p-2 rounded button">
              <a href="https://discord.gg/wyXW7uzX" target="blank" className="font-bold">
                Mais Detalhes
              </a>
            </button>
          </div>
        </CardBotItem>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000">
        <CardBotItem>
          <h1 className="text-center font-bold mb-2" style={{ fontSize: "1.2rem" }}>
            Monitoramento de Atividade
          </h1>
          <div className="p-2 flex justify-center flex-col">
            <ul className="flex flex-col gap-2 mb-2">
              <li>- Listar membros ativos na comunidade, possivelmente com estatísticas de tempo online.</li>
              <li>- Monitorar a participação dos membros em eventos ou atividades específicas do servidor.</li>
            </ul>
            <button className="mt-16 p-2 rounded button">
              <a href="https://discord.gg/wyXW7uzX" target="blank" className="font-bold">
                Mais Detalhes
              </a>
            </button>
          </div>
        </CardBotItem>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <CardBotItem>
          <h1 className="text-center font-bold text-xl mb-2">Promoções</h1>
          <div className="p-2 flex justify-center flex-col">
            <ul className="flex flex-col gap-2 mb-2">
              <li>- Gerenciar o sistema de promoções dentro da estrutura policial.</li>
              <li>- Anunciar promoções e atualizar automaticamente os cargos dos membros no Discord.</li>
            </ul>
            <button className="mt-16 p-2 rounded button">
              <a href="https://discord.gg/wyXW7uzX" target="blank" className="font-bold">
                Mais Detalhes
              </a>
            </button>
          </div>
        </CardBotItem>
      </div>
    </div>
  );
}

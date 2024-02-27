import AOS from "aos";
import "./Doubts.scss";

export default function Doubts() {
  AOS.init();
  return (
    <div className="flex flex-col gap-2 doubts">
      <div data-aos="fade-up" data-aos-duration="1000">
        <details className="p-3 rounded">
          <summary className="font-bold cursor-pointer">Como adquirir o BOT?</summary>
          <ul className="pt-3">
            <li>
              <strong>Abertura de Ticket:</strong> Entre no nosso servidor do Discord:
              <a
                href="https://discord.gg/wyXW7uzX"
                target="blank"
                className="text-white bg-black rounded hover:bg-slate-500 mx-3 transition duration-300"
              >
                Clique Aqui.
              </a>
              E abra um Ticket. Este é o primeiro passo para iniciar a comunicação direta conosco.
            </li>
            <br />
            <li>
              <strong>Consulta Personalizada:</strong> Após a abertura do ticket, nossa equipe entrará em contato para
              entender suas necessidades específicas. Durante esta consulta, você pode escolher um bot de nosso catálogo
              existente ou descrever as funcionalidades que deseja para um bot personalizado.
            </li>
          </ul>
        </details>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <details className="p-3 rounded">
          <summary className="font-bold cursor-pointer">Instalação e Configuração do Bot?</summary>
          <ul className="pt-3">
            <li>
              <strong>Adição ao Servidor:</strong> Após a confirmação da compra, você receberá um link exclusivo para
              adicionar o bot ao seu servidor do Discord. É necessário ter permissões de administrador no servidor para
              realizar essa ação. Este é o primeiro passo para iniciar a comunicação direta conosco.
            </li>
            <br />
            <li>
              <strong>Configuração Personalizada:</strong> Nossa equipe se encarregará da configuração inicial e das
              personalizações do bot. Uma vez instalado, entraremos em contato para compreender suas necessidades específicas
              e ajustar o bot de acordo com os requisitos do seu servidor.
            </li>
            <br />
            <li>
              <strong>Suporte Contínuo:</strong> Estamos comprometidos em oferecer suporte contínuo para quaisquer questões
              ou necessidades adicionais de configuração que possam surgir. Você pode nos contatar a qualquer momento através
              do Discord para solicitar ajustes, esclarecer dúvidas ou reportar problemas.
            </li>
          </ul>
        </details>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <details className="p-3 rounded">
          <summary className="font-bold cursor-pointer">Suporte e Manutenção?</summary>
          <ul className="pt-3">
            <li>
              <strong>Tipo de Suporte:</strong> Oferecemos suporte técnico especializado através do Discord. Nossa equipe
              está preparada para responder suas dúvidas e resolver problemas de maneira eficiente e rápida. Este é o
              primeiro passo para iniciar a comunicação direta conosco.
            </li>
            <br />
            <li>
              <strong>Contato:</strong> Para qualquer tipo de suporte, entre em contato conosco diretamente pelo Discord.
              Isso garante uma comunicação rápida e eficaz, permitindo um atendimento mais personalizado e direcionado às
              suas necessidades.
            </li>
            <br />
            <li>
              <strong>Resolução de Problemas:</strong> Nossa equipe está sempre pronta para fornecer assistência técnica
              rápida e eficaz. Estamos equipados para lidar com qualquer falha ou bug, assegurando que seu bot permaneça
              funcional e eficiente.
            </li>
          </ul>
        </details>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <details className="p-3 rounded ">
          <summary className="font-bold cursor-pointer">Segurança e Privacidade?</summary>
          <ul className="pt-3">
            <li>
              <strong>Segurança dos Dados:</strong> Utilizamos criptografia e seguimos as melhores práticas de segurança da
              indústria.
            </li>
            <br />
            <li>
              <strong>Coleta de Dados:</strong> Coletamos apenas dados necessários para o funcionamento do bot, sem acesso a
              informações pessoais.
            </li>
            <br />
            <li>
              <strong>Proteção de Privacidade:</strong> Compromisso com a privacidade e conformidade com as leis de proteção
              de dados.
            </li>
          </ul>
        </details>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <details className="p-3 rounded">
          <summary className="font-bold cursor-pointer">Política de Reembolso e Cancelamento?</summary>
          <ul className="pt-3">
            <li>
              <strong>Reembolso:</strong> Política de reembolso de 5 dias para insatisfação com o produto.
            </li>
            <br />
            <li>
              <strong>Cancelamento:</strong> Cancelamento fácil através do painel de controle do usuário.
            </li>
            <br />
            <li>
              <strong>Dados Após Cancelamento:</strong> Dados coletados pelo bot são deletados após o cancelamento ou
              exclusão do bot do servidor.
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}

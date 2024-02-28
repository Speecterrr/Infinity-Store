import "./Header.scss";

export default function Header() {
  return (
    <header
      className="p-6 px-8 top-0 sticky w-full z-50 header"
      style={{
        backdropFilter: "blur(0.75rem)",
        WebkitBackdropFilter: "blur(0.75rem)",
      }}
    >
      <h1 className="font-bold text-2xl ">Infinity Store</h1>
      <div className="flex gap-2">
        <nav>
          <ul className="flex gap-3">
            <a href="#paymentMethods">
              <li href="" className="bg-[#211C6A] p-2 rounded hover:bg-[#324a86] transition duration-300">
                Formas de Pagamento
              </li>
            </a>
            <a href="#doubts">
              <li className="bg-[#211C6A] p-2 rounded hover:bg-[#324a86] transition duration-300">Dúvidas</li>
            </a>
            <a href="#bots">
              <li className="bg-[#070F2B] p-2 rounded hover:bg-[#0C359E] transition duration-300">Confira nossos Bots</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}

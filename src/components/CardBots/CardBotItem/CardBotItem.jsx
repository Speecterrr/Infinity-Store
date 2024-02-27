import "./CardBotItem.scss";
import PropTypes from "prop-types";

CardBotItem.propTypes = {
  children: PropTypes.string,
};

export default function CardBotItem({ children }) {
  return (
    <div>
      <div className="box p-2">{children}</div>
    </div>
  );
}

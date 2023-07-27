import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="gucci" title="Gucci" />
          <Button onClickHandler={handleClick} value="Being Human" title="Being Human" />
          <Button onClickHandler={handleClick} value="Allen Solly" title="Allen Solly" />
          <Button onClickHandler={handleClick} value="Levi’s" title="Levi’s" />
        </div>
      </div>
    </>
  );
};

export default Recommended;

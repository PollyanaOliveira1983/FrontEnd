import "./styles.css";
import carImg from "../../assets/car.png";
import Button from "../Button";

export default function Card() {
  return (
    <div className="ct-card">
      <img src={carImg} alt="Carro" />
      <h3>Audi Supra TT</h3>
      <p>
        <i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </i>
      </p>
      <Button />
    </div>
  );
}
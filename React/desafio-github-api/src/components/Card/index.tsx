import "./styles.css";
import { ObjectDTO } from "../../models/object";

type Props = {
  object: ObjectDTO;
};

export default function Card({ object }: Props) {
  return (
    <div className="card-style">
      <div className="img-style">
        <img src={object.avatar_url} alt={object.name} />
      </div>
      <div className="information-style">
        <h3>Informações</h3>
        <div>
          <div className="information-content">
            <p>Perfil: </p> <a href={object.url}>{object.url}</a>
          </div>
          <div className="information-content">
            <p>Seguidores: </p> {object.followers}
          </div>
          <div className="information-content">
            <p>Localidade: </p> {object.location}
          </div>
          <div className="information-content">
            <p>Nome: </p> {object.name}
          </div>
        </div>
      </div>
    </div>
  );
}

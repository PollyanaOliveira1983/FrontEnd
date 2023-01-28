import "./styles.css";

import { useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();

  let product = "";

  if (params.name == "computers") {
    product = "Computador";
  } else if (params.name == "eletronics") {
    product = "Eletrônico";
  } else if (params.name == "books") {
    product = "Livro";
  }

  return (
    <div className="container container-product">
      {<p>{product} 1</p>}
      {<p>{product} 2</p>}
      {<p>{product} 3</p>}
      {<p>{product} 4</p>}
    </div>
  );
}

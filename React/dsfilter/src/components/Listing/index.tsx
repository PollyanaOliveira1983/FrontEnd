import { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
  products: ProductDTO[];
};

export default function Listing({ products }: Props) {
  return (
    <section id="listing-section" className="ds-container ds-listing-card">
      {products.map((p) => (
        <div key={p.id} className="dsc-list-item">
          <p className="ds-item-title">{p.name}</p>
          <p className="ds-item-price">R$ {p.price.toFixed(2)}</p>
        </div>
      ))}
    </section>
  );
}

import { CardListProps } from '../../util';
import './styles.css';

export default function CardListing({ product }: CardListProps) {
  return (
    <>
      <section>
        <div className=" card-listing-dsfilter container-body">
          <div className="product-dsfilter">
            <h3>{product.name}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
          </div>
        </div>
      </section>
    </>
  );
}
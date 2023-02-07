import React, { useContext } from 'react';
import * as productService from '../../services/produtos-service';
import { ProductDTO, QueryParams } from '../../util';
import { ContextNumberCount } from '../../util/utils/context-number';
import CardFilter from '../CardFilter';
import CardListing from '../CardListing';
import './styles.css';

export default function ListingBody() {
  const { contextNumberCount, setContextNumberCount } =
    useContext(ContextNumberCount);

  const [products, setProducts] = React.useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = React.useState<QueryParams>({
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
  });

  React.useEffect(() => {
    const loadProducts: ProductDTO[] = productService.findAll();
    setProducts(loadProducts);

    if (queryParams.minPrice !== 0 || queryParams.maxPrice !== 0) {
      const filteredProducts: ProductDTO[] = productService.findByPrice(
        queryParams.minPrice,
        queryParams.maxPrice,
      );
      setProducts(filteredProducts);

      setContextNumberCount(
        productService.findByPrice(queryParams.minPrice, queryParams.maxPrice)
          .length,
      );
    }
  }, [setProducts, queryParams.minPrice, queryParams.maxPrice]);

  const handleOnFilter = (minPrice: number, maxPrice: number) => {
    setQueryParams({ ...queryParams, minPrice, maxPrice });
  };

  return (
    <main className="container-body-960">
      <CardFilter onFilter={handleOnFilter} />

      {products.map((product) => (
        <CardListing key={product.id} product={product} />
      ))}
    </main>
  );
}
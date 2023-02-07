export type ProductDTO = {
  id: number;
  name: string;
  price: number;
};

export type FormData = {
  minPrice: number;
  maxPrice: number;
};

export type FilterProps = {
  onFilter: (arg1: number, arg2: number) => void;
};

export type CardListProps = {
  product: ProductDTO;
};

export type QueryParams = {
  minPrice: number;
  maxPrice: number;
};
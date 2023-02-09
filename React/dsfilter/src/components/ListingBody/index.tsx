import { useContext, useState } from "react";
import { ProductDTO } from "../../models/product";
import { findByPrice } from "../../services/produtos-service";
import { ContextListCount } from "../../utils/context-listing";
import Filter from "../Filter";
import Listing from "../Listing";
import "./styles.css";

export default function ListingBody() {
    const [products, setProducts] = useState<ProductDTO[]>(findByPrice(0, Number.MAX_VALUE));
    const { setContextListCount } = useContext(ContextListCount);

    function handleFilter(min: number, max: number) {
        const result = findByPrice(min, max);
        setProducts(result);
        setContextListCount(result.length);
    };

    return (
        <main>
            <Filter onFilter={handleFilter} />
            <Listing products={products} />
        </main>
    );
}
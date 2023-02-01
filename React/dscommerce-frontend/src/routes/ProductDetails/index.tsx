import "./styles.css";
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import * as productService from "../../../src/services/product-service";
import * as cartService from "../../../src/services/cart-service";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";


export default function ProductDetails() {
  
  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);
  
  function handleByClick(){
    if (product) {
      cartService.addProduct(product);
      navigate("/cart");
    }
  }

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {
          product &&
          <ProductDetailsCard product={product} />
        }
       
        <div className="dsc-btn-page-container">
          <div onClick={handleByClick}>
            <ButtonPrimary text="Comprar" />
          </div>
          <Link to="/">
            <ButtonInverse text="Inicio" />
          </Link>
          
        </div>
      </section>
    </main>
  );
}

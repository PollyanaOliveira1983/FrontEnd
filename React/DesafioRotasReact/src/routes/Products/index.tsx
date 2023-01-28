import "./styles.css";
import { Outlet, NavLink } from "react-router-dom";
import { getProducts } from "../../data";

export default function Products() {
  let products = getProducts();

  return (
    <>
      <div className="container-nav container">
        <nav>
          {products.map((product) => (
            <NavLink
              to={`/products/${product.name}`}
              key={product.name}
              className={({ isActive }) =>
                isActive ? "mr-20 menu-active" : "mr-20"
              }
            >
              {product.description}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="mt-20">
        <Outlet />
      </div>
    </>
  );
}

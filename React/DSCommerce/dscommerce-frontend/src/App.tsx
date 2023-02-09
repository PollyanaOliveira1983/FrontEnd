import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Cart from "./routes/ClientHome/Cart";
import Catalog from "./routes/ClientHome/Catalog";
import Login from "./routes/ClientHome/Login";
import ProductDetails from "./routes/ProductDetails";
import { ContextCartCount } from "./utils/context-cart";

export default function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider
      value={{ contextCartCount, setContextCartCount }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  );
}

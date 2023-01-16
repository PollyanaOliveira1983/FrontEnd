import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Catalog from "./routes/ClientHome/Catalog";
import ProductDetails from "./routes/PrductDetails";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
        <Route path="index" element={<Catalog/>} />
          <Route path="catalog" element={<Catalog/>} />
          <Route path="product-details" element={<ProductDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

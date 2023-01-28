import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeMain from "./routes";
import About from "./routes/About";
import Home from "./routes/Home";
import NotFound from "./components/NotFound";
import Products from "./routes/Products";
import Product from "./routes/Products/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products/" element={<Products />}>
            <Route index element={<Navigate to="/products/computers" />} />
            <Route path=":name" element={<Product />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

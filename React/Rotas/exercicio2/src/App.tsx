import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Promotion from "./routes/Home/Promotion";
import Subscription from "./routes/Subscription";

function App() {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<HomeBody />} />
            <Route path="promotion" element={<Promotion />} />
          </Route>
          <Route path="/sub" element={<Subscription />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App

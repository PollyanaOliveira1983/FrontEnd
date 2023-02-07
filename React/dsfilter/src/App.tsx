import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextNumberCount } from "./util/utils/context-number";



function App() {
  const [contextNumberCount, setContextNumberCount] = useState<number>(0);

  return (
    <ContextNumberCount.Provider
      value={{ contextNumberCount, setContextNumberCount }}
    >
      <Header />
      <ListingBody />
    </ContextNumberCount.Provider>
  );
}

export default App

import { useEffect, useState } from "react";
import { findProduct } from "./data";


function App() {

  console.log("PASSOU NO AP");
  const [productId, setProductId] = useState(1);
  const [prod, setProd] = useState<any>();

  useEffect(() => {
    console.log("Passou no useEffect")
    setProd(findProduct(productId));
  }, [productId]);

  function handleClick(){
    console.log("PASSOU NO handleClick");
    setProductId(2); 
  }

  return (
    <>
      <h2>{prod?.name}</h2>
      <p>{prod?.price}</p>
      <br />
      <button onClick={handleClick}>Mudar para produto 2</button>
    </>
  )
}

export default App

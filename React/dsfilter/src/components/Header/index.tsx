import { useContext } from "react";
import { ContextListCount } from "../../utils/context-listing";
import "./styles.css";

export default function Header() {
  const { contextListCount } = useContext(ContextListCount);

  return (
    <header>
      <nav className="ds-container">
        <h1>DSFilter</h1>
        <p>{contextListCount} produto(s)</p>
      </nav>
    </header>
  );
}

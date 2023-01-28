import homeIcon from "../../assets/home.svg";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="header-content-container container">
        <nav>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "mr-20 menu-active" : "mr-20"
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "mr-20 menu-active" : "mr-20"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "mr-20 menu-active" : "mr-20"
            }
          >
            Sobre nós
          </NavLink>
        </nav>
        <div className="menu-home">
          <Link to="/">
            <img src={homeIcon} alt="Home" />
          </Link>
        </div>
      </div>
    </header>
  );
}

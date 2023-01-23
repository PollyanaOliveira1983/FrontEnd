import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {

    return(
       <header>
        <div className="container">
            <Link to="/">
                <h1 className="site-name">MeuSite</h1>
            </Link>
        </div>
       </header>
    );
}
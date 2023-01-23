import { Link, NavLink } from 'react-router-dom';
import './styles.css';

export default function Header() {

    return (
        <header>
            <div className="header-content-container container">
                <Link to="/">
                    <h1 className="site-name">MeuSite</h1>
                </Link>
                <nav className="navbar">
                    <NavLink to="/" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                        Início
                    </NavLink>
                    <NavLink to="/promotion" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                        Promoção
                    </NavLink>
                    <NavLink to="/sub" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                        Participar
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
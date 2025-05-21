import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../store";

export const Navbar = () => {
    const { state } = useContext(StoreContext);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/cards">
                    <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5-768x432.png" alt="logo" width="40" height="32" className="d-inline-block align-text-top"/>
                </Link>

                <div className="ml-auto">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites
                        </button>
                        <ul className="dropdown-menu">
                            {state.favorites.length === 0 ? (
                                <li><span className="dropdown-item">No favorites</span></li>
                            ) : (
                                state.favorites.map(fav => (
                                    <li key={fav.id}>
                                        <span className="dropdown-item">{fav.name}</span>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};





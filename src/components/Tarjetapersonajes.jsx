import { useContext, useState } from "react";
import { StoreContext } from "../store";
import { Link } from "react-router-dom";

export const Tarjetapersonajes = ({ name, birthyear, haircolor, eyecolor, id }) => {
    const { dispatch, state } = useContext(StoreContext);
    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        dispatch({
            type: "ADD_FAVORITE",
            payload: { name, birthyear, haircolor, eyecolor, id }
        });
        setIsFav(true);
    };

    return (
        <div className="row" style={{ display: "flex", marginTop: "20px", marginLeft: "20px" }}>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
                <img src={`https://placehold.co/600x400/lightblue/blue?text=${name}`} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{birthyear}</p>
                    <p className="card-text">{haircolor}</p>
                    <p className="card-text">{eyecolor}</p>
                    <Link to={`/detalles/people/${id}`}>Learn More</Link>
                    <button onClick={handleFavorite} className="icon float-end" style={{ background: "none", border: "none" }}>
                        <i className="fa-solid fa-heart" style={{ color: isFav ? "red" : "gray" }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
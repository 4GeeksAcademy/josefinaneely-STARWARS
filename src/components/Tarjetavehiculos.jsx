import { useContext, useState } from "react";
import { StoreContext } from "../store";
import { Link } from "react-router-dom";

export const Tarjetavehiculos = ({ name, max_atmosphering_speed, material, id }) => {
    const { dispatch, state } = useContext(StoreContext);
    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        dispatch({
            type: "ADD_FAVORITE",
            payload: { name, max_atmosphering_speed, material, id }
        });
        setIsFav(true);
    };

    return (
        <div className="row" style={{ display: "flex", marginTop: "20px", marginLeft: "20px" }}>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
                <img src={`https://placehold.co/600x400/lightyellow/pink?text=${name}`} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{max_atmosphering_speed}</p>
                    <p className="card-text">{material}</p>
                    <Link to={`/detalles/vehicles/${id}`}>Learn More</Link>
                    <button onClick={handleFavorite} className="icon float-end" style={{ background: "none", border: "none" }}>
                        <i className="fa-solid fa-heart" style={{ color: isFav ? "red" : "gray" }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
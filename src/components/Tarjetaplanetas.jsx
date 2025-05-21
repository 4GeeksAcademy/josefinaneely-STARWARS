import { Link } from "react-router-dom";

export const Tarjetaplanetas = ({ name, population, terrain, id }) => {
    return (
        <div className="row" style={{ display: "flex", marginTop: "20px", marginLeft: "20px" }}>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
                <img src={`https://placehold.co/600x400/pink/white?text=${name}`} className="card-img-top" alt="starwars" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{population}</p>
                    <p className="card-text">{terrain}</p>
                    <Link to={`/detalles/planets/${id}`}>Learn More</Link>
                   <button href="#" className="icon float-end">
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
import { Link } from "react-router-dom";

export const Tarjetavehiculos = ({ name, max_atmosphering_speed, material, id }) => {
    return (
        <div className="row" style={{ display: "flex", marginTop: "20px", marginLeft: "20px" }}>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
                <img src={`https://placehold.co/600x400/lightyellow/pink?text=${name}`} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{max_atmosphering_speed}</p>
                    <p className="card-text">{material}</p>
                    <Link to={`/detalles/vehicles/${id}`}>Learn More</Link>
                   <button href="#" className="icon float-end">
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
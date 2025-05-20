import { Link } from "react-router-dom";

export const Tarjetavehiculos = ({ name, max_atmosphering_speed, material, id }) => {
    return (
        <div className="row" style={{ display: "flex", marginTop: "20px", marginLeft: "20px" }}>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/a-wing-trainer_72ac4ed9.jpeg?region=0%2C0%2C1559%2C877" className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{max_atmosphering_speed}</p>
                    <p className="card-text">{material}</p>
                    <Link to={`/detalles/vehicles/${id}`}>Learn More</Link>
                    <a href="#" className="icon float-end">
                        <i className="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
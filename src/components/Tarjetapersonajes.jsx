import { Link } from "react-router-dom";

export const Tarjetapersonajes = ({ name , birth_year, hair_color, eye_color, id }) => {
    return (
        <div className="row" style={{ display: "flex", marginTop: "20px", marginLeft: "20px" }}>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/grogu-main_89c92eaa.jpeg?region=246%2C0%2C1428%2C803" className="card-img-top" alt="starwars" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{birth_year}</p>
                    <p className="card-text">{hair_color}</p>
                    <p className="card-text">{eye_color}</p>
                    <Link to={`/detalles/people/${id}`}>Learn More</Link>
                    <a href="#" className="icon float-end">
                        <i className="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
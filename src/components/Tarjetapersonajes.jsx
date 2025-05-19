import { Link } from "react-router-dom"; 

export const Tarjetapersonajes = () => {
    return (
        <div className="row" style={{ display: "flex", marginTop: "20px", marginLeft: "20px" }}>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/grogu-main_89c92eaa.jpeg?region=246%2C0%2C1428%2C803" className="card-img-top" alt="starwars" />
                <div className="card-body">
                    <h5 className="card-title">Baby Yoda</h5>
                    <p className="card-text">Gender: n/a </p>
                    <p className="card-text">Hair-color: n/a </p>
                    <p className="card-text">Eye-color: n/a </p>
                    <Link to="/detalles" className="btn btn-primary">Learn More</Link>
                    <a href="#" className="icon float-end">
                        <i className="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
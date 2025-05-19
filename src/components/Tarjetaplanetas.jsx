import { Link } from "react-router-dom"; 
export const Tarjetaplanetas = () => {

    return (


        <div className="row" style={{ display: "flex", marginTop: "20px", marginLeft: "20px"}}>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/agamar_9044714e.jpeg?region=0%2C0%2C1560%2C878" className="card-img-top" alt="starwars" />
                <div className="card-body">
                    <h5 className="card-title">Agamar</h5>
                    <p className="card-text">Population: 1000000 </p>
                    <p className="card-text">Terrain: grassland </p>
                   <Link to="/detalles" className="btn btn-primary">Learn More</Link>
                    <a href="#" className="icon float-end">
                        <i class="fa-solid fa-heart"></i></a>

                </div>
            </div>
        </div>

    );
};
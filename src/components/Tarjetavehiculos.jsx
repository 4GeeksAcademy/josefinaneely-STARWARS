import { Link } from "react-router-dom";
export const Tarjetavehiculos = () => {

    return (

 <div className="row" style={{ display: "flex", marginTop: "20px", marginLeft: "20px"}}>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/a-wing-trainer_72ac4ed9.jpeg?region=0%2C0%2C1559%2C877" className="card-img-top" alt="starwars" />
                <div className="card-body">
                    <h5 className="card-title">A-wing trainer (RZ-1T)</h5>
                    <p className="card-text">Speed: 10000 </p>
                    <p className="card-text">Material: copper </p>
                   <Link to="/detalles" className="btn btn-primary">Learn More</Link>
                    <a href="#" className="icon float-end">
                        <i class="fa-solid fa-heart"></i></a>

                </div>
            </div>
        </div>




    );
};
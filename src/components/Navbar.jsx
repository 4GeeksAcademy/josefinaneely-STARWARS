import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/cards">
					
						<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5-768x432.png" alt="logo" width="40" height="32" className="d-inline-block align-text-top"/>
				
				</Link>


				<div className="ml-auto">
					<div className="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};






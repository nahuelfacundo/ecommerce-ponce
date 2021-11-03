/* eslint-disable jsx-a11y/anchor-is-valid */
import "./NavBar.css";
import NavCart from "./CartWidget/CartWidget.js";
import logoVegy from "../../assets/img/logoVegy.png";

function NavBar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="navbar-center">
					<a className="navbar-brand" href="#">
						<img src={logoVegy} className="img-logo" alt="imagen"></img>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-item nav-link active" href="#">
								Inicio
							</a>
							<a className="nav-item nav-link" href="#">
								Productos
							</a>
							<a className="nav-item nav-link" href="#">
								Contacto
							</a>
						</div>
					</div>
				</div>
				<NavCart />
			</nav>
		</>
	);
}
export default NavBar;

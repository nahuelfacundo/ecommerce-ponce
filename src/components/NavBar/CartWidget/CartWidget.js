import "./CartWidget.css";
import { BsBasket } from "react-icons/bs";

function NavCart() {
	return (
		<>
			<div>
				<span className="nav-cart-icon text-danger">
					<BsBasket />
				</span>
			</div>
		</>
	);
}
export default NavCart;

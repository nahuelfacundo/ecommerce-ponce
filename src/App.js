import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
	return (
		<>
			<NavBar />

			<ItemListContainer />
		</>
	);
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import CartBody from "./components/CartBody/CartBody";

function App() {
	const [cartbody, setCartbody] = useState([]);
	useEffect(() => {
		fetch("/activitys.json")
			.then((res) => res.json())
			.then((data) => setCartbody(data));
	}, []);

	console.log(cartbody);
	return (
		<div className=" container">
			{cartbody.map((cart) => (
				<CartBody key={cart.id} cart={cart}></CartBody>
			))}
		</div>
	);
}

export default App;

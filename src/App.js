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
		<div className=" main-container container">
			<div className=" activityscarts-maindiv ">
				{cartbody.map((cart) => (
					<CartBody key={cart.id} cart={cart}></CartBody>
				))}
			</div>
			<div className="border warning p-2 m-2 rounded-2 shadow">
				<div className="d-flex align-items-center  align-content-center text-center justify-content-center  p-2 ">
					<img
						className="img-fluid w-25"
						src="/images/profile.png"
						alt=""
					/>
					<div>
						<h5> Saifuddin Ahammed </h5>
						<p>Mymensingh,Bangladesh</p>
					</div>
				</div>
				<div>
					<div>
						{" "}
						<p></p>
					</div>
					<div>
						<p></p>
					</div>
					<div>
						<p></p>
					</div>
				</div>

				<div className="m-2 p-2 border border-light  rounded-3">
					<p className=" text-bolder fw-bolder">Add A Break </p>
					<div className="m-2 p-2">
						<span className="rounded-circle bg-light border m-2 p-1">
							10s
						</span>
						<span className="rounded-circle bg-light border m-2 p-1">
							20s
						</span>
						<span className="rounded-circle bg-light border m-2 p-1">
							30s
						</span>
						<span className="rounded-circle bg-light border m-2 p-1">
							40s
						</span>
						<span className="rounded-circle bg-light border m-2 p-1">
							50s
						</span>
					</div>
				</div>

				<div className="m-2 p-2">
					<h5>Exerxise Details</h5>
					<div className="bg-light p-3 m-2">
						<h5>Add a break </h5>
						<p>00000</p>
					</div>
					<div className="bg-light p-3 m-2 rounded-3 border-info">
						{" "}
						<h5 className="bg-light">Exercise Details</h5>
						<p>00000</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

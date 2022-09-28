import React from "react";
import './CartBody.css'
const CartBody = ({ cart }) => {
	console.log("cartbody", cart.img);
	return (
		<div className="activityscart border p-2 m-2 rounded-3 shadow text-wrap text-">
			<img
				id="img-control"
				className="img-fluid border rounded-3 border-light border-2 shadow"
				src={cart.img}
				alt=""
			/>
			<p className="name fw-bolder">{cart.name}</p>
			<p className="about text-wrap overflow"> {cart.about}</p>
			<p className="for-age fw-bolder">For Age : {cart.age}</p>
			<p className="time-required fw-bolder">
				Time required : {cart.time}
			</p>
			<button className="w-100 rounded-bottom btn btn-primary">
				{" "}
				Add to Cart
			</button>
		</div>
	);
};

export default CartBody;

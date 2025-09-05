
import React from "react";
import { Link } from "react-router-dom";

const Ordercomplete = () => {
	return (
		<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100">
			<div className="bg-white/90 border border-orange-100 rounded-3xl shadow-2xl p-10 max-w-lg w-full flex flex-col items-center">
				<span className="text-6xl mb-4">✅</span>
				<h1 className="text-2xl font-extrabold text-orange-500 mb-2 text-center">Order Completed!</h1>
				<p className="text-orange-400 text-center mb-4">
					Thank you for your order.<br />
					Please proceed to the counter to pay and collect your food.<br />
					We appreciate your business!
				</p>
				<Link
					to="/foodcourt"
					className="inline-block bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold px-6 py-3 rounded-full shadow hover:scale-105 hover:from-orange-500 hover:to-pink-500 transition-all duration-200 mt-2"
				>
					Back to Foodcourt
				</Link>
			</div>
		</section>
	);
};

export default Ordercomplete;

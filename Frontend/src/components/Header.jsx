
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Header = () => {
	const { user, logout } = useAuth();
		return (
			<header className="bg-gradient-to-r from-yellow-50 via-orange-100 to-pink-100 shadow-md sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						{/* Logo & Brand */}
						<Link to="/" className="flex items-center gap-2 group">
							<span className="inline-block text-3xl">🍽️</span>
							<span className="text-2xl font-extrabold text-orange-500 tracking-wide group-hover:underline drop-shadow-sm">
								Kampus Eats
							</span>
						</Link>
						{/* Navigation */}
						<nav className="flex items-center gap-4 md:gap-8">
							<>
								<Link
									to="/foodcourt"
									className="text-orange-600 font-semibold px-4 py-2 rounded-full hover:bg-orange-100 transition-colors duration-200"
								>
									Menu
								</Link>
								<Link
									to="/orders"
									className="text-orange-600 font-semibold px-4 py-2 rounded-full hover:bg-orange-100 transition-colors duration-200"
								>
									My Orders
								</Link>
								<Link
									to="/cart"
									className="relative text-orange-600 text-2xl px-4 py-2 rounded-full hover:bg-orange-100 transition-colors duration-200"
									title="Cart"
								>
									🛒
								</Link>
							</>
							{user ? (
								<button
									onClick={logout}
									className="ml-2 bg-white text-orange-500 font-semibold px-5 py-2 rounded-full shadow hover:bg-orange-200 transition-colors duration-200"
								>
									Logout
								</button>
							) : (
								<>
									<Link
										to="/login"
										className="text-orange-600 font-semibold px-4 py-2 rounded-full hover:bg-orange-100 transition-colors duration-200"
									>
										Login
									</Link>
									<Link
										to="/register"
										className="ml-2 bg-white text-orange-500 font-semibold px-5 py-2 rounded-full shadow hover:bg-orange-200 transition-colors duration-200"
									>
										Register
									</Link>
								</>
							)}
						</nav>
					</div>
				</div>
			</header>
		);
};

export default Header;

import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../utils/AuthContext'

const Register = () => {
	const registerForm = useRef(null)
	const { user, register } = useAuth()
  const navigate = useNavigate()

	useEffect(() => {
		if (user) {
			navigate('/')
		}
	}, [])

	const handleFormSubmit = (e) => {
		e.preventDefault()
		const username = registerForm.current.username.value
		const email = registerForm.current.email.value
		const password = registerForm.current.password.value
		const userInfo = { username, email, password }
		register(userInfo)
	}
		return (
			<>
				<form ref={registerForm} onSubmit={handleFormSubmit}>
					<div className="w-full min-h-[80vh] flex justify-center items-center bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100">
						<div className="flex flex-col justify-center items-center space-y-6 w-[90%] sm:w-[70%] md:w-[30%] bg-white/80 rounded-3xl shadow-2xl p-8 border border-orange-100">
							<div className="flex flex-col items-center gap-2 mb-2">
								<span className="text-4xl">🍽️</span>
								<h1 className="text-2xl font-extrabold text-orange-500">Create an account</h1>
							</div>
							<input
								className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg outline-none focus:border-orange-400 bg-white/90 text-orange-700 placeholder-orange-300 transition"
								type="text"
								placeholder="Enter your username"
								name="username"
								autoComplete="username"
								required
							/>
							<input
								className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg outline-none focus:border-orange-400 bg-white/90 text-orange-700 placeholder-orange-300 transition"
								type="email"
								placeholder="Enter your email"
								name="email"
								autoComplete="email"
								required
							/>
							<input
								className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg outline-none focus:border-orange-400 bg-white/90 text-orange-700 placeholder-orange-300 transition"
								type="password"
								placeholder="Password must be at least 8 characters"
								name="password"
								autoComplete="new-password"
								minLength={8}
								required
							/>
							<button className="w-full px-4 py-3 text-lg font-bold text-white bg-gradient-to-r from-orange-400 to-pink-400 rounded-full shadow hover:scale-105 hover:from-orange-500 hover:to-pink-500 transition-all duration-200">
								Register
							</button>
							<div className="flex justify-center items-center space-x-2 mt-2 text-sm">
								<span className="text-orange-400">Already have an account?</span>
								<Link to="/login" className="text-pink-500 hover:underline font-semibold">Login</Link>
							</div>
						</div>
					</div>
				</form>
				{/* <Footer /> */}
			</>
		);
}
export default Register

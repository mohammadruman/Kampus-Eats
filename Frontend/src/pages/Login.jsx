import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useRef, useEffect } from 'react'
import { useAuth } from '../utils/AuthContext'

const Login = () => {
	const { user, login } = useAuth()
	const navigate = useNavigate()
	const loginForm = useRef(null)

	useEffect(() => {
		if (user) {
			navigate('/')
		}
	}, [])

	const handleFormSubmit = (e) => {
		e.preventDefault()
		const email = loginForm.current.email.value
		const password = loginForm.current.password.value
		const userInfo = { email, password }
		login(userInfo)
	}

	const handleDemoAccount = () => {
		const email = 'dave@gmail.com'
		const password = 'abcdabcd'
		const userInfo = { email, password }
		login(userInfo)
	}

		return (
			<>
				<form ref={loginForm} onSubmit={handleFormSubmit}>
					<div className="w-full min-h-[80vh] flex justify-center items-center bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100">
						<div className="flex flex-col justify-center items-center space-y-6 w-[90%] sm:w-[70%] md:w-[30%] bg-white/80 rounded-3xl shadow-2xl p-8 border border-orange-100">
							<div className="flex flex-col items-center gap-2 mb-2">
								<span className="text-4xl">🍽️</span>
								<h1 className="text-2xl font-extrabold text-orange-500">Log in to your account</h1>
							</div>
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
								placeholder="Enter your password"
								name="password"
								autoComplete="current-password"
								required
							/>
							<button className="w-full px-4 py-3 text-lg font-bold text-white bg-gradient-to-r from-orange-400 to-pink-400 rounded-full shadow hover:scale-105 hover:from-orange-500 hover:to-pink-500 transition-all duration-200">
								Log in
							</button>
							<div className="flex justify-between items-center w-full mt-2 text-sm">
								<div className="flex items-center space-x-2">
									<span className="text-orange-400">New here?</span>
									<Link to="/register" className="text-pink-500 hover:underline font-semibold">Register</Link>
								</div>
								<span
									onClick={handleDemoAccount}
									className="text-orange-400 hover:text-pink-500 cursor-pointer font-semibold"
								>
									Use demo account
								</span>
							</div>
						</div>
					</div>
				</form>
				{/* <Footer /> */}
			</>
		);
}

export default Login

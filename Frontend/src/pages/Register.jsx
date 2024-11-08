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
				<div className="w-full flex justify-center items-center h-[80vh] ">
					<div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
						<h1 className="text-xl font-bold text-left">Create an account</h1>
						<input
							className="w-full px-4 py-2 border-2 border-black outline-0"
							type="text"
							placeholder="Enter your username"
							name="username"
						/>
						<input
							className="w-full px-4 py-2 border-2 border-black outline-0"
							type="email"
							placeholder="Enter your email"
							name="email"
						/>
						<input
							className="w-full px-4 py-2 border-2 border-black outline-0"
							type="password"
							placeholder="password must be of 8 character"
							name="password"
						/>
						<button className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">
							Register
						</button>
						<div className="flex justify-center items-center space-x-3">
							<p>Already have an account?</p>
							<p className="text-gray-500 hover:text-black">
								<Link to="/login">Login</Link>
							</p>
						</div>
					</div>
				</div>
			</form>
			{/* <Footer /> */}
		</>
	)
}
export default Register

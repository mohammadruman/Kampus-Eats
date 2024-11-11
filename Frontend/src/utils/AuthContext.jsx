import { React, useContext, useState, useEffect, createContext } from 'react'
import { account } from './appwrite.jsx'
import { ID } from 'appwrite'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState(null)

	useEffect(() => {
		checkAuth()
	}, [])

	const login = async (userData) => {
		console.log(userData)
		setLoading(true)
		try {
			let response = await account.createEmailPasswordSession(
				userData.email,
				userData.password
			)
			console.log('session: ', response)
			let accountDetails = await account.get()
			setUser(accountDetails)
		} catch (error) {
			console.error(error)
		}
		setLoading(false)
	}

	const logout = async () => {
		console.log('logged out')
		await account.deleteSession('current')
		setUser(null)
	}

	const register = async (userData) => {
		console.log(userData)
		setLoading(true)
		try {
			let response = await account.create(
				ID.unique(),
				userData.email,
				userData.password,
				userData.username
			)
			console.log('session: ', response)

			await account.createEmailPasswordSession(
				userData.email,
				userData.password
			)
			let accountDetails = await account.get()
			setUser(accountDetails)
		} catch (error) {
			console.error(error)
		}
		setLoading(false)
	}

	//for persisting a user
	const checkAuth = async () => {
		try {
			let accountDetails = await account.get()
			setUser(accountDetails)
		} catch (error) {}
		setLoading(false)
	}

	const contextData = {
		user,
		login,
		logout,
		register,
		checkAuth,
	}

	return (
		<AuthContext.Provider value={contextData}>
			{loading ? <div>Loading...</div> : children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	return useContext(AuthContext)
}

export default AuthContext

import {
	React,
	useContext,
	useState,
	useEffect,
	createContext,
} from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState(null)

	useEffect(() => {
		setLoading(false)
	}, [])

	const login = (userData) => {}

	const logout = () => {}	

	const register = (userData) => {}

	//for persisting a user
	const checkAuth = () => {}	

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

export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext

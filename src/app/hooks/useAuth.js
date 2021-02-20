import { useContext } from 'react'
import AuthContext from 'app/contexts/FirebaseAuthContext'

const useAuth = () => useContext(AuthContext)

export default useAuth

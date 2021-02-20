import { useContext } from 'react'
import NotificationContext from 'app/contexts/NotificationContext'

const useNotification = () => useContext(NotificationContext)

export default useNotification

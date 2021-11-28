import axios from 'axios'

export const getContactById = (id) => {
    return axios.get('/api/chat/contacts', { data: id })
}
export const getRecentContact = (id) => {
    return axios.get('/api/chat/contacts/recent', { data: id })
}
export const getAllContact = (currentUserId) => {
    return axios.get('/api/chat/contacts/all', { data: currentUserId })
}
export const getChatRoomByContactId = (currentUser, contactId) => {
    return axios.get('/api/chat/chat-room', {
        data: { currentUser, contactId },
    })
}
export const deleteMessage = (message) => {
    return axios.post('/api/chat/delete', message)
}
export const sendNewMessage = (message) => {
    return axios.post('/api/chat/add', message)
}
export const updateMessage = (message) => {
    return axios.post('/api/chat/update', message)
}

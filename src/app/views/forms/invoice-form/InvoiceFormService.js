import axios from 'axios'

export const calculateAmount = (item) => {
    if (!item.discount) return item.price * item.quantity || 0

    if (item.discountType === '$') {
        let total = item.price * item.quantity
        return total - item.discount || 0
    } else {
        let total = item.price * item.quantity
        return total - (total * item.discount) / 100 || 0
    }
}

export const getProductList = () => {
    return axios.get('/api/ecommerce/get-product-list')
}

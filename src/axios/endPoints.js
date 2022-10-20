import axiosClient from './axiosClient'

export const getTopProducts = async () => {
    return axiosClient
        .get(`/products?limit=6`, {})
        .then(function (res) {
            return res.data.products
        })
        .catch(function (err) {
            console.error(err);
            throw err
        })
}

export const getProductById = async (id) => {
    return axiosClient
        .get(`/products/${id}`, {})
        .then(function (res) {
            return res.data
        })
        .catch(function (err) {
            console.error(err);
            throw err
        })
}
export const getAllproduct = async () => {
    return axiosClient
        .get(`/products`, {})
        .then(function (res) {
            return res.data
        })
        .catch(function (err) {
            console.error(err);
            throw err
        })
}

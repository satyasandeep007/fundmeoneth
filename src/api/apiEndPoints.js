// const BASE_URL = "http://localhost:4343/api/v1";
const BASE_URL = "https://garage99-be.herokuapp.com/api/v1";


export const category = {
    getAll: BASE_URL + "/category"
}

export const product = {
    getAll: BASE_URL + "/product",
    getTrending: BASE_URL + "/product/trending",
    getById: (id) => BASE_URL + `/product/${id}`
}

export const user = {
    login: BASE_URL + "/user/verify/otp", // POST
    register: BASE_URL + "/user", // POST
    sendOtp: BASE_URL + "/user/send/otp", // POST
}


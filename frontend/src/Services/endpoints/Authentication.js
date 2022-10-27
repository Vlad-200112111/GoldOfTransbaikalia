import axios from "../axios/axios";


const endpoints = {
    authentication: (data) => axios.post("jwt/create/", data),
    signUp: (data) => axios.post("users/", data),
    userActivation: (data) => axios.post("users/", data),
};

export default endpoints;
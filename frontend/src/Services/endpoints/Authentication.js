import axios from "../axios/axios";


const endpoints = {
    authentication: (data) => axios.post("jwt/create/", data),

};

export default endpoints;
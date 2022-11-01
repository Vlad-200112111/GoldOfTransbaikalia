import axios from "../axios/axios";

const endpoints = {
    getSubsoilUserById: (id) => axios.get(`subsoil-user/${id}`)
};

export default endpoints;

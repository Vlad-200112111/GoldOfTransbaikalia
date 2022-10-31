import axios from "../axios/axios";


const endpoints = {
    getListLicenses: (page) => axios.get(`licenses/?page=${page}`),
    getLicenseById: (id) => axios.get(`licenses/${id}`)
};

export default endpoints;